// main.js - désobfusqué

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================
    // 1. NOUVEAU SYSTÈME OPTIMISÉ DE CHARGEMENT DES VIDÉOS
    // =========================================================
    const videoCards = document.querySelectorAll('.hud-card[data-type="video"]');
    const screenVideo = document.querySelector('#screen-video source');
    const videoElement = document.getElementById('screen-video');
    
    const videoCache = {}; 

    async function loadVideoBlob(src) {
        if (videoCache[src]) return videoCache[src]; 
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            videoCache[src] = blobUrl;
            return blobUrl;
        } catch (error) {
            console.error("Erreur de chargement vidéo:", error);
            return src; 
        }
    }

    // Préchargement de la vidéo active uniquement
    const activeCard = document.querySelector('.hud-card.active[data-type="video"]');
    if (activeCard) {
        loadVideoBlob(activeCard.dataset.src).then(blobUrl => {
            if (screenVideo && videoElement) {
                screenVideo.src = blobUrl;
                videoElement.load();
            }
        });
    }

    // Chargement au clic (Lazy-loading)
    videoCards.forEach(card => {
        card.addEventListener('click', async () => {
            const blobUrl = await loadVideoBlob(card.dataset.src);
            if (screenVideo && videoElement) {
                screenVideo.src = blobUrl;
                videoElement.load();
                videoElement.play();
            }
        });
    });

    // Préchargement fantôme après 10s
    setTimeout(() => {
        console.log(">> 10s écoulées : Lancement du préchargement des vidéos en arrière-plan.");
        videoCards.forEach(card => {
            if (!videoCache[card.dataset.src]) {
                loadVideoBlob(card.dataset.src);
            }
        });
    }, 10000);

    // =========================================================
    // 2. CONSERVATION DE TES LIENS CLIQUABLES (Panels & Images)
    // =========================================================
    const _0x419608 = document.querySelectorAll('.panel-2d--clickable');
    const _0x282064 = document.querySelectorAll('.neon-circle-image--clickable');
    const _0x177404 = [..._0x419608, ..._0x282064];
    
    _0x177404.forEach(_0x5c78b9 => {
        _0x5c78b9.addEventListener('click', () => {
            const _0x273173 = _0x5c78b9.dataset.href;
            if (_0x273173) {
                console.log('Ouverture de : ' + _0x273173);
                window.open(_0x273173, '_blank');
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const originalVideo = document.getElementById('bg-video-z1');
    const loopBuffer = document.getElementById('loop-buffer');
    
    if (originalVideo && loopBuffer) {
        // 1. On clone l'élément vidéo existant (et ses enfants <source>)
        const clonedVideo = originalVideo.cloneNode(true);
        
        // 2. On retire l'ID (un ID doit être unique) et on ajoute ta classe CSS
        clonedVideo.removeAttribute('id');
        clonedVideo.classList.add('clone-video');
        
        // 3. On force l'autoplay sur ce clone
        clonedVideo.autoplay = true; 
        
        // 4. On l'insère au tout début de la section loop-buffer
        loopBuffer.insertBefore(clonedVideo, loopBuffer.firstChild);
    }
});

const hudCards=document.querySelectorAll('.hud-card'),screenWrapper=document.getElementById('tactical-wrapper'),contentLayer=document.getElementById('tactical-content-layer'),screenImg=document.getElementById('screen-img'),screenVideo=document.getElementById('screen-video'),screenTitle=document.getElementById('screen-title'),screenDesc=document.getElementById('screen-desc'),screenLink=document.getElementById('screen-link');
function _0x568b(_0x5ae782,_0xe46b28) {
 _0x5ae782=_0x5ae782-0x117;
 const _0xd7da3c=_0xd7da();
 let _0x568bd8=_0xd7da3c[_0x5ae782];
 return _0x568bd8;
 
}
function triggerGlitch() {
 contentLayer&&(contentLayer.classList.remove('glitch-anim'),void contentLayer.offsetWidth,contentLayer.classList.add('glitch-anim'));
 
}
function closeTacticalScreen() {
 if(screenWrapper)screenWrapper.classList.remove('active-mode');
 if(contentLayer)contentLayer.style.display='none';
 if(screenVideo)screenVideo.pause();
 hudCards.forEach(_0x1fb1a5=>_0x1fb1a5.classList.remove('active'));
 
}
function _0xd7da() {
 const _0x215555=['catch','50%','cert-links','Erreur lecture auto:','div','F12','keydown','innerWidth','opacity','unobserve','screen-video','data-project','pointerEvents','transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)','deg) \x0a scale(1.02)\x0a ','>> STOP !','1537017AQanwo','video','_blank','contextmenu','active-mode','active-link','>> ACCESS_DENIED','data-desc','.domain-card, ','flex','.cert-terminal-head','364dXUAlk','opacity 0.3s ease','#main-nav ul li a','Lecture auto bloquée par le navigateur','load','#main-nav a','Démarrage du préchargement des vidéos tactiques...','scrollTo','.btn-text','zone-1','left','10000','desc','tactical-wrapper','var(--neon-red)','screen-desc','href','2px','documentElement','24195zmwNiY','isIntersecting','monospace','modal-img','img','.cyber-btn-expand','link','data-link','Vidéo préchargée en mémoire : ','body','>> STOP RIGHT CLICKING !','1003836JnaRqo','bold','1YpGGdL','34812zNxRnm','unlocked','block','oncanplaythrough','.loader','Ouverture de : ','modal-title','offsetWidth','skill-modal-overlay','overflow','DOMContentLoaded','translateY(0)','dataset','title','.neon-circle-image--clickable','preventDefault','tactical-content-layer','querySelectorAll','.term-status','then','.skill-card, ','CLOSE','>> COMMAND_BLOCKED: ','cert-trigger','underline','mouseenter','classList','modal-link','none','screen-img','shiftKey','clientY','log','2729952nIQfDc','click','target','pause','hidden','.mission-file, ','active','add','HIDE','1px solid #E13C4C','mouseleave','addEventListener','innerText','y mandatory','mousemove','getElementById','observe','inline-block','ACCESS_REPORT_DATA','modal-desc','>> WHY :( ?','.panel-2d--clickable','blob','length','CLOSED','ctrlKey','6px 12px','querySelector','transition','0.85rem','style','toUpperCase','innerHTML','remove','textDecoration','\x0a perspective(1000px) \x0a rotateX(0deg) \x0a rotateY(0deg) \x0a scale(1)\x0a ','auto','translateY(30px)','rgba(10, 15, 20, 0.95)','play','Boucle atteinte : Téléportation vers le haut !','nowrap','getAttribute','glitchText 0.2s linear','type','open','contains','appendChild','forEach','error','glitch-anim','ACCESS_REPORT','#fff','display','screen-title','src','stopPropagation','8715xHsvsa','>> ACCESS_DENIED: SHORTCUT_DISABLED','createElement','.text-container','.cert-trigger-btn .btn-text','transform','clientX','OPENED','width','3741243VDSGoL','key','.hud-card[data-type="video"]','scrollSnapType','>> WHY DO YOU RIGHT CLICK ?','color','#E13C4C','data-title','90naYuoi','toggle','bg-video-z1','assign','0px','Escape','fixed','654UFLtgc','borderColor','height'];
 _0xd7da=function() {
 return _0x215555;
 
 };
 return _0xd7da();
 
}
function openTacticalScreen() {
 if(screenWrapper)screenWrapper.classList.add('active-mode');
 if(contentLayer)contentLayer.style.display='block';
 
}
hudCards.length>0x0&&(closeTacticalScreen(),hudCards.forEach(_0x723192=> {
 _0x723192.addEventListener('click',()=> {
 if(_0x723192.classList.contains('active')) {
 closeTacticalScreen();
 return;
 
 }
 hudCards.forEach(_0x4798f4=>_0x4798f4.classList.remove('active')),_0x723192.classList.add('active'),openTacticalScreen();
 const _0x5b4f48=_0x723192.dataset.type,_0x54b67f=_0x723192.dataset.src,_0x5dc92b=_0x723192.dataset.title,_0x250422=_0x723192.dataset.desc,_0xf01b6f=_0x723192.dataset.link;
 triggerGlitch(),setTimeout(()=> {
 if(screenTitle)screenTitle.innerText=_0x5dc92b;
 if(screenDesc)screenDesc.innerHTML=_0x250422;
 screenLink&&(_0xf01b6f?(screenLink.style.display='inline-block',screenLink.href=_0xf01b6f):screenLink.style.display='none'),_0x5b4f48==='video'?(screenImg&&(screenImg.style.display='block',screenImg.src='ref/chargement.png'),screenVideo&&(screenVideo.style.display='none',screenVideo.pause(),screenVideo.src=_0x54b67f,screenVideo.load(),screenVideo.oncanplaythrough=()=> {
 console.log('Vidéo prête (buffer ok) -> Lecture');
 if(screenImg)screenImg.style.display='none';
 screenVideo.style.display='block',screenVideo.play().catch(_0x36a4e0=>console.error('Erreur lecture auto:',_0x36a4e0)),screenVideo.oncanplaythrough=null;
 
 })):(screenVideo&&(screenVideo.pause(),screenVideo.style.display='none'),screenImg&&(screenImg.style.display='block',screenImg.src=_0x54b67f));
 
 },0x64);
 
 });
 
}));
const expandButtons=document.querySelectorAll('.cyber-btn-expand');
expandButtons.forEach(_0x5386c2=> {
 _0x5386c2.addEventListener('click',()=> {
 _0x2bd820=_0x5386c2.dataset.target,_0x353674=document.getElementById(_0x2bd820);
 if(_0x353674) {
 _0x353674.classList.toggle('open');
 const _0x19a280=_0x5386c2.querySelector('.btn-text');
 if(_0x353674.classList.contains('open')) {
 if(_0x19a280)_0x19a280.innerText='CLOSE';
 _0x5386c2.style.borderColor='#fff';
 
 }
 else {
 if(_0x19a280)_0x19a280.innerText=_0x2bd820==='log-2'?'ACCESS_REPORT_DATA':'ACCESS_REPORT';
 _0x5386c2.style.borderColor='';
 
 }
 
 }
 
 });
 
});
/* =====================================================================
   BLOC REECRIT PROPREMENT (corrections de bugs)
   - Avant : tout ce bloc etait imbrique dans navLinks.forEach(...) et
     s'executait donc une fois PAR lien de navigation.
   - Avant : le bouton des certificats lisait .term-status (commente
     dans le HTML) -> erreur JS. Les certificats sont desormais sur
     skills.html (voir skills.js).
   - La modale des skills a quitte index.html (voir skills.html).
   ===================================================================== */

/* ---------- 1. Navigation : masque le loader au clic ---------- */
(function () {
    const navLinks = document.querySelectorAll('#main-nav a');
    const loaderElement = document.querySelector('.loader');
    const textContainer = document.querySelector('.text-container');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (textContainer) {
                textContainer.style.display = 'none';
                textContainer.style.opacity = '0';
            }
            if (loaderElement) loaderElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
})();

/* ---------- 2. Apparition progressive des blocs ---------- */
/* Classes concernees (les anciennes .neural-node, .skill-card,
   .domain-card, .cert-node-container ne sont plus dans index.html). */
(function () {
    const targets = document.querySelectorAll(
        '.mission-file, .edu-item, .edu-cta, .see-all-cta, .ref-card, .contact-terminal'
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 150);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
})();

/* ---------- 3. Video de fond : pause hors ecran ---------- */
(function () {
    const bgVideo = document.getElementById('bg-video-z1');
    const zone1 = document.getElementById('zone-1');
    if (!bgVideo || !zone1) return;

    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) bgVideo.pause();
            else bgVideo.play().catch(() => console.log('Lecture auto bloquee par le navigateur'));
        });
    }, { threshold: 0 }).observe(zone1);
})();

/* ---------- 4. Effet 3D sur le terminal de contact ---------- */
(function () {
    const terminal = document.querySelector('.contact-terminal');
    if (!terminal) return;
    const intensity = 5;

    terminal.addEventListener('mousemove', e => {
        const r = terminal.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        terminal.style.transform =
            'perspective(1000px) rotateX(' + (py * intensity * -2) + 'deg) rotateY(' + (px * intensity * 2) + 'deg) scale(1.02)';
    });
    terminal.addEventListener('mouseenter', () => { terminal.style.transition = 'none'; });
    terminal.addEventListener('mouseleave', () => {
        terminal.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        terminal.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
})();

/* ---------- 5. Boucle : retour en haut depuis le buffer ---------- */
(function () {
    const buffer = document.getElementById('loop-buffer');
    if (!buffer) return;

    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                document.documentElement.style.scrollSnapType = 'none';
                window.scrollTo(0, 0);
                setTimeout(() => { document.documentElement.style.scrollSnapType = 'y mandatory'; }, 50);
            }
        });
    }, { threshold: 0.6 }).observe(buffer);
})();

/* ---------- 6. Scroll-spy : lien actif dans la nav ---------- */
(function () {
    const links = document.querySelectorAll('#main-nav ul li a');
    const sections = document.querySelectorAll('section[id]');
    if (!links.length || !sections.length) return;

    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute('id');
            links.forEach(a => {
                a.classList.toggle('active-link', a.getAttribute('href') === '#' + id);
            });
        });
    }, { root: null, rootMargin: '0px', threshold: 0.3 });

    sections.forEach(sec => spy.observe(sec));
})();

/* ---------- 7. Projects : scroller (fleches, barre de progression, glisser) ---------- */
(function () {
    const scroller = document.getElementById('project-scroller');
    const prev = document.getElementById('scroller-prev');
    const next = document.getElementById('scroller-next');
    const bar = document.getElementById('scroller-progress-bar');
    if (!scroller) return;

    function stepSize() {
        const card = scroller.querySelector('.hud-card');
        return card ? card.getBoundingClientRect().width + 15 : 200;
    }

    function update() {
        const max = scroller.scrollWidth - scroller.clientWidth;
        const ratio = max > 0 ? scroller.scrollLeft / max : 0;
        if (prev) prev.disabled = scroller.scrollLeft <= 2;
        if (next) next.disabled = scroller.scrollLeft >= max - 2;
        if (bar && scroller.scrollWidth > 0) {
            const w = Math.min(100, (scroller.clientWidth / scroller.scrollWidth) * 100);
            bar.style.width = w + '%';
            bar.style.transform = 'translateX(' + (ratio * ((100 - w) / w) * 100) + '%)';
        }
    }

    function go(dir) {
        scroller.scrollBy({ left: dir * stepSize() * 2, behavior: 'smooth' });
        if (next) next.classList.add('used');
    }

    /* Largeur du bandeau (desktop) = 4 panels pleins + une zone de fondu.
       Le bouton de défilement se place donc juste après le 4e panel. */
    const stripMain = scroller.closest('.scroller-main');
    function sizeStrip() {
        if (!stripMain) return;
        const card = scroller.querySelector('.hud-card');
        if (!card || window.matchMedia('(max-width: 768px)').matches) {
            stripMain.style.removeProperty('--strip-w');
            stripMain.style.removeProperty('--fade-w');
            return;
        }
        const cardW = card.getBoundingClientRect().width + 15;   // largeur + espace entre panels
        const fadeW = Math.round(cardW * 0.9);
        stripMain.style.setProperty('--fade-w', fadeW + 'px');
        stripMain.style.setProperty('--strip-w', Math.round(18 + cardW * 4) + 'px');
        update();
    }
    window.addEventListener('resize', sizeStrip);
    window.addEventListener('load', sizeStrip);
    sizeStrip();

    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    /* Glisser a la souris (le clic sur une carte reste possible) */
    let down = false, startX = 0, startLeft = 0, dragged = false;
    scroller.addEventListener('mousedown', e => {
        down = true; dragged = false;
        startX = e.pageX; startLeft = scroller.scrollLeft;
    });
    window.addEventListener('mousemove', e => {
        if (!down) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > 5) dragged = true;
        if (dragged) scroller.scrollLeft = startLeft - dx;
    });
    window.addEventListener('mouseup', () => { down = false; });
    scroller.addEventListener('click', e => {
        if (dragged) { e.stopPropagation(); e.preventDefault(); dragged = false; }
    }, true);
})();

const _0x2b13e7=['>> ACCESS_DENIED','>> ERROR','>> PLEASE STOP','>> STOP !','>> WHY DO YOU RIGHT CLICK ?','>> STOP RIGHT CLICKING !','>> WHY :( ?'];
 let _0x5d225f=0x0;
 document.addEventListener('contextmenu',function(_0x55c54e) {
 _0x55c54e.preventDefault();
 const _0x296f4e=_0x2b13e7[_0x5d225f%_0x2b13e7.length];
 _0x5d225f++;
 const _0x283e1b=document.createElement('div');
 _0x283e1b.innerText=_0x296f4e,Object.assign(_0x283e1b.style, {
 'position':'fixed','top':_0x55c54e.clientY+'px','left':_0x55c54e.clientX+'px','background':'rgba(10, 15, 20, 0.95)','border':'1px solid #E13C4C','color':'#E13C4C','padding':'6px 12px','fontFamily':'monospace','fontSize':'0.85rem','fontWeight':'bold','zIndex':'9999','pointerEvents':'none','borderRadius':'2px','boxShadow':'0 0 15px rgba(225, 60, 76, 0.4)','whiteSpace':'nowrap','animation':'glitchText 0.2s linear'
 }),document.body.appendChild(_0x283e1b),setTimeout(()=> {
 _0x283e1b.style.opacity='0',_0x283e1b.style.transition='opacity 0.3s ease',setTimeout(()=>_0x283e1b.remove(),0x12c);
 
 },0x4b0);
 
 }),document.addEventListener('keydown',function(_0x61cb44) {
 _0x47449a=_0x61cb44.key.toLowerCase();
 if(_0x61cb44.key==='F12'||_0x61cb44.ctrlKey&&_0x61cb44.shiftKey&&_0x47449a==='i'||_0x61cb44.ctrlKey&&_0x61cb44.shiftKey&&_0x47449a==='j'||_0x61cb44.ctrlKey&&_0x61cb44.shiftKey&&_0x47449a==='c'||_0x61cb44.ctrlKey&&_0x47449a==='u'||_0x61cb44.ctrlKey&&_0x47449a==='s'||_0x61cb44.ctrlKey&&_0x47449a==='p') {
 _0x61cb44.preventDefault(),_0x61cb44.stopPropagation(),console.warn('>> ACCESS_DENIED: SHORTCUT_DISABLED');
 const _0x3ad271=document.createElement('div');
 _0x3ad271.innerText='>> COMMAND_BLOCKED: '+_0x61cb44.key.toUpperCase(),Object.assign(_0x3ad271.style, {
 'position':'fixed','top':'50%','left':'50%','transform':'translate(-50%, -50%)','background':'rgba(10, 15, 20, 0.95)','border':'1px solid #E13C4C','color':'#E13C4C','padding':'10px 20px','fontFamily':'monospace','fontWeight':'bold','zIndex':'10000','boxShadow':'0 0 20px rgba(225, 60, 76, 0.6)'
 }),document.body.appendChild(_0x3ad271),setTimeout(()=>_0x3ad271.remove(),0x320);
 
 }
 
 });

const footer = document.querySelector('.cinematic-footer');
let footerLocked = false;

if (footer) {
    const footerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5 && !footerLocked) {
                footerLocked = true;
                document.documentElement.style.overflow = 'hidden';
                setTimeout(() => {
                    document.documentElement.style.overflow = '';
                }, 500);
            } else if (!entry.isIntersecting) {
                footerLocked = false; // on quitte le footer -> rearme le piege
            }
        });
    }, { threshold: 0.5 });

    footerObserver.observe(footer);
}

/* Affiche les "+" fixes seulement après la fin du loader */
document.addEventListener('loaderFinished', () => {
    document.body.classList.add('loader-done');
});