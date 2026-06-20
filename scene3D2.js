// scene3D2.js - Corrigé et nettoyé

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

let isIntroAnimationPlaying = ![], hudNeedsReset = ![];

function calculerSeuils(_0x533caf) {
  const _0xe2b7a9 = _0x533caf - 0x1;
  if (_0xe2b7a9 <= 0x0) return { 'nombreDEtapes': 0x0, 'seuils': [] };
  const _0x1cfcd4 = 0x1 / _0xe2b7a9, _0x4e0c6a = [];
  for (let _0x4d4d87 = 0x1; _0x4d4d87 < _0xe2b7a9; _0x4d4d87++) {
    const _0x224bbd = _0x1cfcd4 * _0x4d4d87;
    _0x4e0c6a.push(Number(_0x224bbd.toFixed(0x2)));
  }
  return { 'nombreDEtapes': _0xe2b7a9, 'seuils': _0x4e0c6a };
}

const canvas = document.getElementById('scene-3d');
const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(0x4b, window.innerWidth / window.innerHeight, 0.1, 0x3e8);
camera.position.z = 0x4d;

const renderer = new THREE.WebGLRenderer({
  'canvas': canvas,
  'alpha': !![],
  'antialias': ![],
  'powerPreference': 'high-performance',
  'precision': 'mediump'
});
renderer.setSize(window.innerWidth, window.innerHeight);

const pixelRatio = window.innerWidth < 0x300 ? 0.8 : Math.min(window.devicePixelRatio, 1.2);
renderer.setPixelRatio(pixelRatio);
const isMobile = window.innerWidth < 0x300;
renderer.antialias = !isMobile;

let cssRenderer, cssScene;
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

const directionalLight = new THREE.DirectionalLight(0xffffff, 0x1);
directionalLight.position.set(0x5, 0x5, 0x5);
scene.add(directionalLight);

const manager = new THREE.LoadingManager();
manager.onLoad = function() {
  console.log('Modele 3D chargé (100%). Vérification Vidéo...');
  checkVideoAndSignalReady();
};

function checkVideoAndSignalReady() {
  const _0x1d73db = document.getElementById('bg-video-z1');
  const _0x1da4ff = () => {
    console.log('>> TOUT EST PRÊT (3D + Vidéo). Envoi du signal \'assetsReady\'.');
    window.assetsAreReady = !![];
    document.dispatchEvent(new Event('assetsReady'));
  };
  if (!_0x1d73db) {
    _0x1da4ff();
    return;
  }
  _0x1d73db.play().then(() => {
    _0x1d73db.pause();
    _0x1da4ff();
  }).catch(() => {
    console.warn('Autoplay bloqué, on lance quand même.');
    _0x1da4ff();
  });
}

const loader = new GLTFLoader();
let javelinModel = null, mixer = null, hoverAction, exposedAction, hudObject = null;

loader.load('ref/drone.glb', _0x5e942f => {
  javelinModel = _0x5e942f.scene;
  const _0x380655 = new THREE.Box3().setFromObject(javelinModel);
  const _0x8aab37 = _0x380655.getCenter(new THREE.Vector3());
  const _0x478ed6 = _0x380655.getSize(new THREE.Vector3());
  const _0x29f1e2 = Math.max(_0x478ed6.x, _0x478ed6.y, _0x478ed6.z);
  
  javelinModel.scale.multiplyScalar(0x3 / _0x29f1e2);
  javelinModel.position.sub(_0x8aab37);
  javelinModel.position.set(0x0, -0xc, 0x0);
  javelinModel.rotation.y = 0x0;
  javelinModel.rotation.z = 0x0;
  scene.add(javelinModel);
  
  try {
    renderer.compile(scene, camera);
    renderer.render(scene, camera);
  } catch (_0x26cf74) {
    console.log('Warm-up render skipped');
  }
  
  const _0x1c036c = () => {
    const _0x3012e9 = 'camera_jnt56_56';
    const _0xe124f3 = javelinModel.getObjectByName(_0x3012e9);
    const _0x38ca45 = document.querySelector('.animation-container');
    
    if (_0xe124f3 && _0x38ca45 && !hudObject) {
      console.log('Attachement du HUD au modèle 3D...');
      _0x38ca45.style.position = 'absolute';
      _0x38ca45.style.top = '0px';
      _0x38ca45.style.left = '0px';
      _0x38ca45.style.transform = 'none';
      hudObject = new CSS3DObject(_0x38ca45);
      hudObject.position.set(0x0, 0x0, 1.14);
      hudObject.rotation.x = 0x0;
      hudObject.scale.set(0.001, 0.001, 0.001);
      _0xe124f3.add(hudObject);
      javelinModel.updateMatrixWorld(!![]);
      const _0x2d2c42 = _0x38ca45.querySelector('.spinner-wrapper');
      _0x2d2c42 && (hudNeedsReset = !![]);
    } else hudObject ? console.log('HUD déjà attaché, update ignoré.') : console.warn('Impossible d\'attacher le HUD : Pièce ou Élément manquant.');
  };
  
  window.skipIntroAnimation && (console.log('Modèle chargé APRÈS le signal Skip. Application immédiate.'), camera.position.z = 0x4d, _0x1c036c(), onScroll());
  const _0x569139 = document.getElementById('bg-video-z1');
  
  document.addEventListener('loaderFinished', () => {
    console.log('Signal \'loaderFinished\' reçu. Attachement du HUD au modèle.');
    _0x1c036c();
    isIntroAnimationPlaying = !![];
    const _0x4543f5 = 0x3e8, _0x488d72 = 0x4d;
    if (exposedAction) exposedAction.weight = 0x0;
    let _0x2c0c54 = { 'z': _0x4543f5, 'hoverWeight': 0x0 };
    camera.position.z = _0x4543f5;
    _0x569139 && _0x569139.play();
    
    if (window.skipIntroAnimation === !![]) {
      console.log('Skip-flag détecté. Saut de l\'animation d\'intro.');
      camera.position.z = _0x488d72;
      if (hoverAction) hoverAction.weight = 0x0;
      isIntroAnimationPlaying = ![];
      window.scrollTo(0x0, 0x0);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      updateModelOnScroll(0x0);
    } else {
      console.log('Pas de skip-flag. Lancement de l\'animation d\'intro.');
      anime({
        'targets': _0x2c0c54,
        'z': _0x488d72,
        'duration': 0x1770,
        'easing': 'easeInOutCubic',
        'hoverWeight': [
          { 'value': 0x1, 'duration': 0xbb8, 'easing': 'easeInQuad' },
          { 'value': 0x0, 'duration': 0xbb8, 'easing': 'easeOutQuad' }
        ],
        'update': function() {
          camera.position.z = _0x2c0c54.z;
          hoverAction && (hoverAction.weight = _0x2c0c54.hoverWeight);
        },
        'complete': function() {
          isIntroAnimationPlaying = ![];
          window.scrollTo(0x0, 0x0);
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          updateModelOnScroll(0x0);
          const _0x229947 = document.querySelector('.btn-next-loader');
          _0x229947 && (_0x229947.classList.add('is-hidden'), setTimeout(() => {
            _0x229947.style.display = 'none';
          }, 0x190));
        }
      });
    }
  });
  
  mixer = new THREE.AnimationMixer(javelinModel);
  const _0x199c69 = THREE.AnimationClip.findByName(_0x5e942f.animations, 'hover');
  const _0x57e93f = THREE.AnimationClip.findByName(_0x5e942f.animations, 'exploded_view');
  
  _0x199c69 ? (hoverAction = mixer.clipAction(_0x199c69), hoverAction.play(), hoverAction.weight = 0x0) : console.error('Animation \'hover\' non trouvée !');
  _0x57e93f ? (exposedAction = mixer.clipAction(_0x57e93f), exposedAction.play(), exposedAction.weight = 0x0) : console.error('Animation \'exploded_view\' non trouvée !');
});

const NB_ZONES = 0xd, configScroll = calculerSeuils(NB_ZONES);
const seuil_Etape1_fin = configScroll.seuils[0x0], seuil_Etape2_fin = configScroll.seuils[0x1], seuil_Etape3_fin = configScroll.seuils[0x2];
const seuil_Etape4_fin = configScroll.seuils[0x3], seuil_Etape5_fin = configScroll.seuils[0x4], seuil_Etape6_fin = configScroll.seuils[0x5];
const seuil_Etape7_fin = configScroll.seuils[0x6], seuil_Etape8_fin = configScroll.seuils[0x7], seuil_Etape9_fin = configScroll.seuils[0x8];
const seuil_Etape10_fin = configScroll.seuils[0x9], seuil_Etape11_fin = configScroll.seuils[0xa];
const zoomInitial = 0x4d, zoomFinal = 0x12c;
const positionY_Initial = -0xc, positionY_Final = -0x3c;
const totalZoomDistance = zoomFinal - zoomInitial, zoomStep = totalZoomDistance / 0x3;
const rotationX_Initial = 0x0, rotationX_Final = Math.PI * 0x2;
const rotationY_Initial = 0x0, rotationY_Final = Math.PI * 0x4;
const unlockThreshold = 0.02;

const htmlEl = document.documentElement;
const loaderText = document.querySelector('.text-container');
const loaderEl = document.querySelector('.loader');

function updateModelOnScroll(_0x5d0227) {
  if (isIntroAnimationPlaying) return;
  if (!javelinModel || !mixer || !hoverAction || !exposedAction) return;
  
  javelinModel.position.x = 0x0;
  
  if (_0x5d0227 <= seuil_Etape1_fin) {
    javelinModel.visible = !![];
    const _0x47fa7f = _0x5d0227 / seuil_Etape1_fin;
    loaderText.style.opacity = 0x1 - _0x47fa7f;
    if (_0x5d0227 >= unlockThreshold) {
      htmlEl.style.scrollSnapType = 'none';
      if (loaderText) loaderText.style.display = 'none';
      loaderEl && (loaderEl.style.pointerEvents = 'none', loaderEl.style.display = 'none');
    } else {
      htmlEl.style.scrollSnapType = 'y mandatory';
      if (loaderText) loaderText.style.display = 'block';
      loaderEl && (loaderEl.style.pointerEvents = 'auto', loaderEl.style.display = 'block');
    }
    javelinModel.visible = !![];
    camera.position.z = zoomInitial + zoomStep * _0x47fa7f;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
  } else if (_0x5d0227 <= seuil_Etape2_fin) {
    javelinModel.visible = !![];
    const _0x464224 = (_0x5d0227 - seuil_Etape1_fin) / (seuil_Etape2_fin - seuil_Etape1_fin);
    camera.position.z = zoomInitial + zoomStep + zoomStep * _0x464224;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape3_fin) {
    javelinModel.visible = !![];
    const _0x1a738f = (_0x5d0227 - seuil_Etape2_fin) / (seuil_Etape3_fin - seuil_Etape2_fin);
    camera.position.z = zoomInitial + zoomStep * 0x2 + zoomStep * _0x1a738f;
    javelinModel.position.y = positionY_Initial;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape4_fin) {
    javelinModel.visible = !![];
    const _0x1c4bb2 = (_0x5d0227 - seuil_Etape3_fin) / (seuil_Etape4_fin - seuil_Etape3_fin);
    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Initial + (positionY_Final - positionY_Initial) * _0x1c4bb2;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape5_fin) {
    javelinModel.visible = ![];
    camera.position.z = zoomFinal;
    javelinModel.position.y = 0x12c;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape6_fin) {
    javelinModel.visible = ![];
    camera.position.z = zoomFinal;
    javelinModel.position.y = 0x12c;
    javelinModel.rotation.x = rotationX_Initial;
    javelinModel.rotation.y = rotationY_Initial;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape7_fin) {
    javelinModel.visible = ![];
    camera.position.z = zoomFinal;
    javelinModel.position.y = 0x12c;
    javelinModel.rotation.x = rotationX_Final;
    javelinModel.rotation.y = rotationY_Final;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape8_fin) {
    javelinModel.visible = ![];
    camera.position.z = zoomFinal;
    javelinModel.position.y = 0x12c;
    javelinModel.rotation.x = rotationX_Final;
    javelinModel.rotation.y = rotationY_Final;
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape9_fin) {
    javelinModel.visible = !![];
    const _0x586c06 = (_0x5d0227 - seuil_Etape8_fin) / (seuil_Etape9_fin - seuil_Etape8_fin);
    hoverAction.weight = 0x0;
    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Final;
    exposedAction.weight = _0x586c06;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape10_fin) {
    javelinModel.visible = !![];
    const _0x53e458 = (_0x5d0227 - seuil_Etape9_fin) / (seuil_Etape10_fin - seuil_Etape9_fin);
    hoverAction.weight = 0x0;
    camera.position.z = zoomFinal;
    javelinModel.position.y = positionY_Final;
    exposedAction.weight = 0x1 - _0x53e458;
    loaderText.style.display = 'none';
  } else if (_0x5d0227 <= seuil_Etape11_fin) {
    javelinModel.visible = !![];
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    javelinModel.position.y = positionY_Final;
    camera.position.z = zoomFinal;
    loaderText.style.display = 'none';
  } else {
    hoverAction.weight = 0x0;
    exposedAction.weight = 0x0;
    javelinModel.position.y = 0x12c;
    camera.position.z = zoomFinal;
    loaderText.style.display = 'none';
  }
}

let lastKnownScrollPercent = 0x0, ticking = ![];
function onScroll() {
  const _0x37b0d6 = window.scrollY;
  const _0x529c6f = htmlEl.scrollHeight;
  const _0x1d1bfd = window.innerHeight;
  lastKnownScrollPercent = _0x529c6f - _0x1d1bfd > 0x0 ? _0x37b0d6 / (_0x529c6f - _0x1d1bfd) : 0x0;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateModelOnScroll(lastKnownScrollPercent);
      ticking = ![];
    });
    ticking = !![];
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', () => {
  window.scrollY < 0xa && javelinModel && (javelinModel.visible = !![], updateModelOnScroll(0x0));
});

function animate() {
  requestAnimationFrame(animate);
  const _0x2663b3 = clock.getDelta();
  mixer && mixer.update(_0x2663b3);
  
  if (hudNeedsReset) {
    const _0x5a73d2 = document.querySelector('.spinner-wrapper');
    if (_0x5a73d2) {
      console.log('animate() : Réinitialisation des styles du spinnerWrapper.');
      _0x5a73d2.style.opacity = '1';
      _0x5a73d2.style.filter = 'none';
      _0x5a73d2.style.clipPath = 'none';
    }
    hudNeedsReset = ![];
  }
  
  if (hudObject && javelinModel && !isIntroAnimationPlaying) {
    let _0x1d933c = javelinModel.rotation.y % (Math.PI * 0x2);
    _0x1d933c < 0x0 && (_0x1d933c += Math.PI * 0x2);
    _0x1d933c > Math.PI / 0x2 && _0x1d933c < Math.PI * 0x3 / 0x2 ? hudObject.element.style.visibility = 'hidden' : hudObject.element.style.visibility = 'visible';
  }
  
  renderer.render(scene, camera);
  cssRenderer && cssRenderer.render(scene, camera);
}

animate();

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const _0x29f4a0 = document.documentElement.clientWidth;
    const _0x361549 = window.innerHeight;
    const _0x431164 = _0x29f4a0 < 0x4b0;
    const _0x53ff27 = _0x431164 ? 0x2 : 0x5;
    
    renderer.setSize(_0x29f4a0, _0x361549);
    renderer.setPixelRatio(_0x53ff27);
    cssRenderer && cssRenderer.setSize(_0x29f4a0, _0x361549);
    camera.aspect = _0x29f4a0 / _0x361549;
    camera.updateProjectionMatrix();
    onScroll();
  }, 0x96);
});