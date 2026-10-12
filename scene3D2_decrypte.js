// scene3D2.js - Version décryptée depuis scene3D2_encrypte.js

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

let isIntroAnimationPlaying = false;
let hudNeedsReset = false;

function calculerSeuils(nbZones) {
  const nbEtapes = nbZones - 1;
  if (nbEtapes <= 0) {
    return { nombreDEtapes: 0, seuils: [] };
  }

  const pas = 1 / nbEtapes;
  const seuils = [];

  for (let i = 1; i < nbEtapes; i++) {
    const valeur = pas * i;
    seuils.push(Number(valeur.toFixed(2)));
  }

  return { nombreDEtapes: nbEtapes, seuils };
}

const canvas = document.getElementById('scene-3d');
const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 77;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: false,
  powerPreference: 'high-performance',
  precision: 'mediump'
});

renderer.setSize(window.innerWidth, window.innerHeight);

const pixelRatio = window.innerWidth < 0x300
  ? 0.8
  : Math.min(window.devicePixelRatio, 1.2);

renderer.setPixelRatio(pixelRatio);

const isMobile = window.innerWidth < 0x300;
renderer.antialias = !isMobile;

let cssRenderer;
let cssScene;

const cssContainer = document.createElement('div');
cssContainer.style.position = 'fixed';
cssContainer.style.top = '0';
cssContainer.style.left = '0';
cssContainer.style.width = '100%';
cssContainer.style.height = '100%';
cssContainer.style.zIndex = '2';
cssContainer.style.pointerEvents = 'none';
document.body.appendChild(cssContainer);

cssScene = new THREE.Scene();
cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssContainer.appendChild(cssRenderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const manager = new THREE.LoadingManager();

manager.onLoad = function () {
  console.log('Modele 3D chargé (100%). Vérification Vidéo...');
  checkVideoAndSignalReady();
};

function checkVideoAndSignalReady() {
  const video = document.getElementById('bg-video-z1');

  const signalReady = () => {
    console.log(">> TOUT EST PRÊT (3D + Vidéo). Envoi du signal 'assetsReady'.");
    window.assetsAreReady = true;
    document.dispatchEvent(new Event('assetsReady'));
  };

  if (!video) {
    signalReady();
    return;
  }

  video.play()
    .then(() => {
      video.pause();
      signalReady();
    })
    .catch(() => {
      console.warn('Autoplay bloqué, on lance quand même.');
      signalReady();
    });
}

const loader = new GLTFLoader();

let javelinModel = null;
let mixer = null;
let hoverAction;
let exposedAction;
let hudObject = null;

loader.load('ref/drone.glb', (gltf) => {
  javelinModel = gltf.scene;

  const box = new THREE.Box3().setFromObject(javelinModel);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);

  javelinModel.scale.multiplyScalar(3 / maxDim);
  javelinModel.position.sub(center);
  javelinModel.position.set(0, -12, 0);
  javelinModel.rotation.y = 0;
  javelinModel.rotation.z = 0;

  scene.add(javelinModel);

  try {
    renderer.compile(scene, camera);
    renderer.render(scene, camera);
  } catch (e) {
    console.log('Warm-up render skipped');
  }

  const attacherHUD = () => {
    const nomPiece = 'camera_jnt56_56';
    const piece = javelinModel.getObjectByName(nomPiece);
    const animationContainer = document.querySelector('.animation-container');

    if (piece && animationContainer && !hudObject) {
      console.log('Attachement du HUD au modèle 3D...');

      animationContainer.style.position = 'absolute';
      animationContainer.style.top = '0px';
      animationContainer.style.left = '0px';
      animationContainer.style.transform = 'none';

      hudObject = new CSS3DObject(animationContainer);
      javelinModel.userData.normalizedSize = 3;
      // Puis
      hudObject.position.set(0, 0, 1.14 * javelinModel.userData.normalizedSize / 3);
      hudObject.rotation.x = 0;
      hudObject.scale.set(0.001, 0.001, 0.001);

      piece.add(hudObject);
      javelinModel.updateMatrixWorld(true);

      const spinnerWrapper = animationContainer.querySelector('.spinner-wrapper');
      if (spinnerWrapper) {
        hudNeedsReset = true;
      }
    } else if (hudObject) {
      console.log('HUD déjà attaché, update ignoré.');
    } else {
      console.warn("Impossible d'attacher le HUD : Pièce ou Élément manquant.");
    }
  };

  if (window.skipIntroAnimation) {
    console.log('Modèle chargé APRÈS le signal Skip. Application immédiate.');
    camera.position.z = 77;
    attacherHUD();
    onScroll();
  }

  const video = document.getElementById('bg-video-z1');

  document.addEventListener('loaderFinished', () => {
    console.log("Signal 'loaderFinished' reçu. Attachement du HUD au modèle.");

    attacherHUD();
    isIntroAnimationPlaying = true;

    const zoomDepartIntro = 1000;
    const zoomFinIntro = 77;

    if (exposedAction) {
      exposedAction.weight = 0;
    }

    let etatIntro = {
      z: zoomDepartIntro,
      hoverWeight: 0
    };

    camera.position.z = zoomDepartIntro;

    if (video) {
      video.play();
    }

    if (window.skipIntroAnimation === true) {
      console.log("Skip-flag détecté. Saut de l'animation d'intro.");

      camera.position.z = zoomFinIntro;

      if (hoverAction) {
        hoverAction.weight = 0;
      }

      isIntroAnimationPlaying = false;

      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';

      updateModelOnScroll(0);
    } else {
      console.log("Pas de skip-flag. Lancement de l'animation d'intro.");

      anime({
        targets: etatIntro,
        z: zoomFinIntro,
        duration: 6000,
        easing: 'easeInOutCubic',
        hoverWeight: [
          { value: 1, duration: 3000, easing: 'easeInQuad' },
          { value: 0, duration: 3000, easing: 'easeOutQuad' }
        ],
        update: function () {
          camera.position.z = etatIntro.z;

          if (hoverAction) {
            hoverAction.weight = etatIntro.hoverWeight;
          }
        },
        complete: function () {
          isIntroAnimationPlaying = false;

          window.scrollTo(0, 0);
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';

          updateModelOnScroll(0);

          const btnNextLoader = document.querySelector('.btn-next-loader');

          if (btnNextLoader) {
            btnNextLoader.classList.add('is-hidden');

            setTimeout(() => {
              btnNextLoader.style.display = 'none';
            }, 400);
          }
        }
      });
    }
  });

  mixer = new THREE.AnimationMixer(javelinModel);

  const hoverClip = THREE.AnimationClip.findByName(gltf.animations, 'hover');
  const explodedClip = THREE.AnimationClip.findByName(gltf.animations, 'exploded_view');

  if (hoverClip) {
    hoverAction = mixer.clipAction(hoverClip);
    hoverAction.play();
    hoverAction.weight = 0;
  } else {
    console.error("Animation 'hover' non trouvée !");
  }

  if (explodedClip) {
    exposedAction = mixer.clipAction(explodedClip);
    exposedAction.play();
    exposedAction.weight = 0;
  } else {
    console.error("Animation 'exploded_view' non trouvée !");
  }
});

const NB_ZONES = 13;
const configScroll = calculerSeuils(NB_ZONES);

const seuil_Etape1_fin = configScroll.seuils[0];
const seuil_Etape2_fin = configScroll.seuils[1];
const seuil_Etape3_fin = configScroll.seuils[2];
const seuil_Etape4_fin = configScroll.seuils[3];
const seuil_Etape5_fin = configScroll.seuils[4];
const seuil_Etape6_fin = configScroll.seuils[5];
const seuil_Etape7_fin = configScroll.seuils[6];
const seuil_Etape8_fin = configScroll.seuils[7];
const seuil_Etape9_fin = configScroll.seuils[8];
const seuil_Etape10_fin = configScroll.seuils[9];
const seuil_Etape11_fin = configScroll.seuils[10];

const zoomInitial = 77;
const zoomFinal = 300;

const positionY_Initial = -12;
const positionY_Final = -60;

const totalZoomDistance = zoomFinal - zoomInitial;
const zoomStep = totalZoomDistance / 3;

const rotationX_Initial = 0;
const rotationX_Final = Math.PI * 2;

const rotationY_Initial = 0;
const rotationY_Final = Math.PI * 4;

// Présent dans la version encryptée mais non utilisé ensuite.
const seuilAnimation = 0.21;

const unlockThreshold = 0.02;

const htmlEl = document.documentElement;
const loaderText = document.querySelector('.text-container');
const loaderEl = document.querySelector('.loader');

function updateModelOnScroll(scrollPercent) {
  if (isIntroAnimationPlaying) return;

  if (!javelinModel || !mixer || !hoverAction || !exposedAction) return;

  javelinModel.position.x = 0;

  if (scrollPercent <= seuil_Etape1_fin) {
    javelinModel.visible = true;

    const progress = scrollPercent / seuil_Etape1_fin;
    loaderText.style.opacity = 1 - progress;

    if (scrollPercent >= unlockThreshold) {
      htmlEl.style.scrollSnapType = 'none';

      if (loaderText) loaderText.style.display = 'none';

      if (loaderEl) {
        loaderEl.style.pointerEvents = 'none';
        loaderEl.style.display = 'none';
      }
    } else {
      htmlEl.style.scrollSnapType = 'y mandatory';

      if (loaderText) loaderText.style.display = 'block';

      if (loaderEl) {
        loaderEl.style.pointerEvents = 'auto';
        loaderEl.style.display = 'block';
      }
    }

    javelinModel.visible = true;
    camera.position.z = zoomInitial + zoomStep * progress;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

  } else if (scrollPercent <= seuil_Etape2_fin) {
    javelinModel.visible = true;

    const progress = (scrollPercent - seuil_Etape1_fin) /
      (seuil_Etape2_fin - seuil_Etape1_fin);

    camera.position.z = zoomInitial + zoomStep + zoomStep * progress;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape3_fin) {
    javelinModel.visible = true;

    const progress = (scrollPercent - seuil_Etape2_fin) /
      (seuil_Etape3_fin - seuil_Etape2_fin);

    camera.position.z = zoomInitial + zoomStep * 2 + zoomStep * progress;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape4_fin) {
    javelinModel.visible = true;

    const progress = (scrollPercent - seuil_Etape3_fin) /
      (seuil_Etape4_fin - seuil_Etape3_fin);

    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Initial +
      (positionY_Final - positionY_Initial) * progress;

    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape5_fin) {
    javelinModel.visible = false;

    // Variable présente dans la version encryptée mais non utilisée.
    const _progressEtape5 = (scrollPercent - seuil_Etape4_fin) /
      (seuil_Etape5_fin - seuil_Etape4_fin);

    camera.position.z = zoomFinal;
    javelinModel.position.y = 300;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape6_fin) {
    javelinModel.visible = false;

    // Variable présente dans la version encryptée mais non utilisée.
    const _progressEtape6 = (scrollPercent - seuil_Etape5_fin) /
      (seuil_Etape6_fin - seuil_Etape5_fin);

    camera.position.z = zoomFinal;
    javelinModel.position.y = 300;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape7_fin) {
    javelinModel.visible = false;

    // Variable présente dans la version encryptée mais non utilisée.
    const _progressEtape7 = (scrollPercent - seuil_Etape6_fin) /
      (seuil_Etape7_fin - seuil_Etape6_fin);

    camera.position.z = zoomFinal;
    javelinModel.position.y = 300;
    javelinModel.rotation.x = rotationX_Final;
    javelinModel.rotation.y = rotationY_Final;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape8_fin) {
    javelinModel.visible = false;

    // Variable présente dans la version encryptée mais non utilisée.
    const _progressEtape8 = (scrollPercent - seuil_Etape7_fin) /
      (seuil_Etape8_fin - seuil_Etape7_fin);

    camera.position.z = zoomFinal;
    javelinModel.position.y = 300;
    javelinModel.rotation.x = rotationX_Final;
    javelinModel.rotation.y = rotationY_Final;

    hoverAction.weight = 0;
    exposedAction.weight = 0;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape9_fin) {
    javelinModel.visible = true;

    const progress = (scrollPercent - seuil_Etape8_fin) /
      (seuil_Etape9_fin - seuil_Etape8_fin);

    hoverAction.weight = 0;
    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Final;
    javelinModel.position.x = EDU_DRONE_X;
    exposedAction.weight = progress;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape10_fin) {
    javelinModel.visible = true;

    const progress = (scrollPercent - seuil_Etape9_fin) /
      (seuil_Etape10_fin - seuil_Etape9_fin);

    hoverAction.weight = 0;
    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Final;
    javelinModel.position.x = EDU_DRONE_X;
    exposedAction.weight = 1 - progress;

    loaderText.style.display = 'none';

  } else if (scrollPercent <= seuil_Etape11_fin) {
    javelinModel.visible = true;

    // Variable présente dans la version encryptée mais non utilisée.
    const _progressEtape11 = (scrollPercent - seuil_Etape10_fin) /
      (seuil_Etape11_fin - seuil_Etape10_fin);

    hoverAction.weight = 0;
    exposedAction.weight = 0;
    javelinModel.position.y = positionY_Final;
    camera.position.z = zoomFinal;

    loaderText.style.display = 'none';

  } else {
    // Variable présente dans la version encryptée mais non utilisée.
    const _progressFinal = (scrollPercent - seuil_Etape11_fin) /
      (1 - seuil_Etape11_fin);

    hoverAction.weight = 0;
    exposedAction.weight = 0;
    javelinModel.position.y = 300;
    camera.position.z = zoomFinal;

    loaderText.style.display = 'none';
  }
}

let lastKnownScrollPercent = 0;
let ticking = false;

/* =====================================================================
   ANIMATION DU DRONE CALEE SUR LES SECTIONS (et non plus sur le % de scroll)
   ---------------------------------------------------------------------
   updateModelOnScroll() attend toujours une valeur "avancement" entre 0 et 1,
   avec les memes seuils qu'avant (1/12, 2/12 ... 11/12). Cette valeur est
   maintenant calculee a partir de la position des sections : ajouter ou
   retirer une section ne decale donc plus le drone.

   Repere : la ligne au milieu de l'ecran (sauf pour l'intro, au bord haut).
   Chaque ligne du tableau = [position dans la page, avancement associe].
     - Intro + About    : zoom (etapes 1 a 3), puis descente du drone (etape 4)
     - Projects         : drone cache (etapes 5-6)
     - Internship       : drone cache (etapes 7-8)
     - Education        : VUE ECLATEE (etapes 9-10 : 0 -> 1 -> 0 au milieu)
     - References       : drone visible, replie (etape 11)
     - Contact et fin   : drone masque (etape finale)
   ===================================================================== */

// Decalage horizontal optionnel du drone pendant la vue eclatee
// (0 = centre ; valeur positive/negative pour le pousser a droite/gauche
//  si le texte de la section Education le recouvre).
const EDU_DRONE_X = 0;

let droneAnchors = null;

function buildDroneAnchors() {
  const vh = window.innerHeight;
  const sy = window.scrollY;
  const half = vh / 2;

  const el = {
    about: document.getElementById('about'),
    projects: document.getElementById('projects'),
    internship: document.getElementById('internship'),
    education: document.getElementById('education'),
    references: document.getElementById('references'),
    contact: document.getElementById('contact')
  };

  // Si une section manque, on retombe sur l'ancien calcul (pourcentage de scroll)
  if (!Object.values(el).every(Boolean)) return null;

  const edge = (node, which) => {
    const r = node.getBoundingClientRect();
    const y = which === 'bottom' ? r.bottom : which === 'middle' ? (r.top + r.bottom) / 2 : r.top;
    return sy + y;
  };

  const maxScroll = Math.max(1, htmlEl.scrollHeight - vh);

  const raw = [
    [0,                                         0],
    [edge(el.about, 'top'),                     seuil_Etape3_fin],   // fin du zoom
    [edge(el.projects, 'top') - half,           seuil_Etape4_fin],   // fin de la descente
    [edge(el.internship, 'top') - half,         seuil_Etape6_fin],
    [edge(el.education, 'top') - half,          seuil_Etape8_fin],   // debut vue eclatee
    [edge(el.education, 'middle') - half,       seuil_Etape9_fin],   // vue eclatee maximale
    [edge(el.education, 'bottom') - half,       seuil_Etape10_fin],  // retour au drone replie
    [edge(el.references, 'bottom') - half,      seuil_Etape11_fin],
    [maxScroll,                                 1]
  ];

  // Positions strictement croissantes
  const anchors = [];
  raw.forEach(([y, v], i) => {
    const prevY = i === 0 ? -1 : anchors[i - 1][0];
    anchors.push([Math.max(y, prevY + 1), v]);
  });

  return anchors;
}

function computeDroneProgress() {
  if (!droneAnchors) droneAnchors = buildDroneAnchors();

  if (!droneAnchors) {
    // Ancien comportement (secours)
    const max = htmlEl.scrollHeight - window.innerHeight;
    return max > 0 ? window.scrollY / max : 0;
  }

  const y = window.scrollY;
  const a = droneAnchors;

  if (y <= a[0][0]) return a[0][1];

  for (let i = 1; i < a.length; i++) {
    if (y <= a[i][0]) {
      const t = (y - a[i - 1][0]) / (a[i][0] - a[i - 1][0]);
      return a[i - 1][1] + (a[i][1] - a[i - 1][1]) * t;
    }
  }
  return 1;
}

// Les positions changent quand le contenu se charge ou que la fenetre change
if (window.ResizeObserver) {
  new ResizeObserver(() => { droneAnchors = null; }).observe(document.body);
}
window.addEventListener('load', () => { droneAnchors = null; onScroll(); });

function onScroll() {
  lastKnownScrollPercent = computeDroneProgress();

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateModelOnScroll(lastKnownScrollPercent);
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener('scroll', onScroll);

window.addEventListener('scroll', () => {
  if (window.scrollY < 10 && javelinModel) {
    javelinModel.visible = true;
    updateModelOnScroll(0);
  }
});

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (mixer) {
    mixer.update(delta);
  }

  if (hudNeedsReset) {
    const spinnerWrapper = document.querySelector('.spinner-wrapper');

    if (spinnerWrapper) {
      console.log('animate() : Réinitialisation des styles du spinnerWrapper.');
      spinnerWrapper.style.opacity = '1';
      spinnerWrapper.style.filter = 'none';
      spinnerWrapper.style.clipPath = 'none';
    }

    hudNeedsReset = false;
  }

  if (hudObject && javelinModel && !isIntroAnimationPlaying) {
    let rotationY = javelinModel.rotation.y % (Math.PI * 2);

    if (rotationY < 0) {
      rotationY += Math.PI * 2;
    }

    if (rotationY > Math.PI / 2 && rotationY < Math.PI * 3 / 2) {
      hudObject.element.style.visibility = 'hidden';
    } else {
      hudObject.element.style.visibility = 'visible';
    }
  }

  renderer.render(scene, camera);

  if (cssRenderer) {
    cssRenderer.render(scene, camera);
  }
}

animate();

let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
    const width = document.documentElement.clientWidth;
    const height = window.innerHeight;

    const isSmall = width < 1200;
    const ratio = isSmall ? 2 : 5;

    renderer.setSize(width, height);
    renderer.setPixelRatio(ratio);

    if (cssRenderer) {
      cssRenderer.setSize(width, height);
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    droneAnchors = null;
    onScroll();
  }, 150);
});