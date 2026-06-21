// tacticalMap.js - Mise à jour : Collines, Drone Shahed et Viseur fixe

import * as THREE from 'three';

export function initTacticalMap() {
    const canvas = document.getElementById('tactical-map-canvas');
    if (!canvas) return;

    // 1. Initialisation de la scène
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a0a0c'); 
    scene.fog = new THREE.FogExp2('#0a0a0c', 0.015);

    const container = canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Caméra placée plus haut pour voir la vallée
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 35, 50); 
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
    } catch (e) {
        console.error('Erreur WebGL :', e);
        canvas.style.display = 'none';
        return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Création du terrain (Plusieurs collines)
    const terrainGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const colorValley = new THREE.Color('#cda47d'); 
    const colorPeak = new THREE.Color('#8b4513');   

    const gridX = 150;
    const gridZ = 150;
    const step = 1.5;

    for (let i = -gridX / 2; i < gridX / 2; i++) {
        for (let j = -gridZ / 2; j < gridZ / 2; j++) {
            if (Math.random() > 0.6) continue; // Points clairsemés

            const x = i * step;
            const z = j * step;
            
            // Équation pour créer plusieurs petites collines et ondulations
            const heightVal = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 5 + Math.sin(x * 0.05) * 8;

            positions.push(x, heightVal, z);

            const mixedColor = colorValley.clone().lerp(colorPeak, (heightVal + 8) / 20);
            colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }
    }

    terrainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    terrainGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const terrainMaterial = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
        transparent: true,
        opacity: 2,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const terrain = new THREE.Points(terrainGeometry, terrainMaterial);
    scene.add(terrain);

    // 3. Création du Drone
    const droneTarget = new THREE.Group();
    scene.add(droneTarget);

    // Forme d'aile delta (type Shahed)
    const droneGeo = new THREE.ConeGeometry(0.8, 1.6, 3);
    droneGeo.rotateX(Math.PI / 2); // On le pointe vers l'avant
    droneGeo.scale(1, 0.15, 1);    // On l'aplatit fortement pour faire une aile
    const droneMat = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: true });
    const droneMesh = new THREE.Mesh(droneGeo, droneMat);
    droneTarget.add(droneMesh);

    // 4. Création du Viseur (Encadrement)
    // Séparé du drone pour qu'il reste toujours face à la caméra
    const reticleGroup = new THREE.Group();
    scene.add(reticleGroup); 

    const reticleMat = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    const s = 1.5; // Taille de l'encadrement
    const l = 0.6; // Longueur des bords

    // Fonction pour dessiner de vrais coins " [ ] "
    function createCorner(x, y, scaleX, scaleY) {
        const pts = [
            new THREE.Vector3(x + (l * scaleX), y, 0),
            new THREE.Vector3(x, y, 0),
            new THREE.Vector3(x, y + (l * scaleY), 0)
        ];
        return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), reticleMat);
    }

    reticleGroup.add(createCorner(-s, s, 1, -1));  // Haut-Gauche
    reticleGroup.add(createCorner(s, s, -1, -1));  // Haut-Droite
    reticleGroup.add(createCorner(-s, -s, 1, 1));  // Bas-Gauche
    reticleGroup.add(createCorner(s, -s, -1, 1));  // Bas-Droite

    // 5. Boucle d'Animation
    const clock = new THREE.Clock();

    function animate() {
        if (canvas.classList.contains('paused') || canvas.style.display === 'none') {
            requestAnimationFrame(animate);
            return;
        }
        requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        // Mouvement du drone (Surface plus large)
        droneTarget.position.x = Math.sin(t * 0.2) * 45;
        droneTarget.position.z = Math.cos(t * 0.25) * 35;
        
        // Calcul du relief sous le drone pour voler en rase-motte (4 unités au-dessus du sol)
        const groundY = Math.sin(droneTarget.position.x * 0.2) * Math.cos(droneTarget.position.z * 0.2) * 5 + Math.sin(droneTarget.position.x * 0.05) * 8;
        droneTarget.position.y = groundY + 1.2;

        // Le drone regarde dans la direction où il avance
        const dx = Math.cos(t * 0.2) * 45 * 0.2;
        const dz = -Math.sin(t * 0.25) * 35 * 0.25;
        // On le laisse bien horizontal en gardant son Y actuel pour le lookAt
        droneMesh.lookAt(droneTarget.position.x + dx, droneTarget.position.y, droneTarget.position.z + dz);

        // Le viseur suit la position du drone mais regarde TOUJOURS la caméra
        reticleGroup.position.copy(droneTarget.position);
        reticleGroup.quaternion.copy(camera.quaternion);

        // Clignotement de l'encadrement : 80% rouge (verrouillé), 20% blanc (recherche)
        const isLocked = (t % 2) < 1.7; // Sur un cycle de 2s, vrai pendant 1.7s
        reticleMat.color.setHex(isLocked ? 0xff0000 : 0xffffff);

        renderer.render(scene, camera);
    }
    animate();

    // 6. Gestion du redimensionnement et optimisation
    window.addEventListener('resize', () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                canvas.classList.add('paused');
            } else {
                canvas.classList.remove('paused');
            }
        });
    });
    observer.observe(canvas);
}