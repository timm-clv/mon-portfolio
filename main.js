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

    // Préchargement fantôme après 20s
    setTimeout(() => {
        console.log(">> 20s écoulées : Lancement du préchargement des vidéos en arrière-plan.");
        videoCards.forEach(card => {
            if (!videoCache[card.dataset.src]) {
                loadVideoBlob(card.dataset.src);
            }
        });
    }, 20000);

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
const certTrigger=document.getElementById('cert-trigger'),certLinks=document.getElementById('cert-links'),certHead=document.querySelector('.cert-terminal-head'),statusText=document.querySelector('.term-status'),btnText=document.querySelector('.cert-trigger-btn .btn-text');
certTrigger&&certLinks&&certTrigger.addEventListener('click',()=> {
 certLinks.classList.toggle('open'),certHead.classList.toggle('unlocked'),certLinks.classList.contains('open')?(statusText.innerText='OPENED',btnText.innerText='HIDE',certTrigger.style.borderColor='var(--neon-red)',certTrigger.style.color='var(--neon-red)'):(statusText.innerText='CLOSED',btnText.innerText='CERTIFICATES_LIST',certTrigger.style.borderColor='',certTrigger.style.color='');
 
});
const navLinks=document.querySelectorAll('#main-nav a'),loaderElement=document.querySelector('.loader'),textContainer=document.querySelector('.text-container');
navLinks.forEach(_0x3c5db2=> {
 _0x3c5db2.addEventListener('click',()=> {
 textContainer&&(textContainer.style.display='none',textContainer.style.opacity='0'),loaderElement&&(loaderElement.style.display='none'),document.body.style.overflow='auto';
 
 });
 const _0x1a7d6d=document.querySelectorAll('.skill-card'),_0x28b399=document.getElementById('skill-modal-overlay'),_0x45ee4e=document.getElementById('close-skill-modal'),_0x9a575a=document.getElementById('modal-title'),_0x4baadb=document.getElementById('modal-desc'),_0x29a5ca=document.getElementById('modal-img'),_0x3585d6=document.getElementById('modal-link'),_0x18e910=document.querySelector('.modal-footer');
 function _0x5eab0e(_0x56fd93) {
 _0x5aa007=_0x56fd93.getAttribute('data-title'),_0x453a80=_0x56fd93.getAttribute('data-desc'),_0x3fe772=_0x56fd93.getAttribute('data-project'),_0x4418cd=_0x56fd93.getAttribute('data-link'),_0x4fa06c=_0x56fd93.querySelector('img'),_0x38b99a=_0x4fa06c?_0x4fa06c.src:'';
 if(_0x9a575a)_0x9a575a.innerText=_0x5aa007;
 if(_0x4baadb)_0x4baadb.innerHTML=_0x453a80;
 if(_0x29a5ca)_0x29a5ca.src=_0x38b99a;
 if(_0x3fe772&&_0x3fe772.trim()!=='') {
 _0x3585d6&&(_0x3585d6.innerText=_0x3fe772,_0x3585d6.href=_0x4418cd||'#',!_0x4418cd||_0x4418cd==='#'?(_0x3585d6.style.pointerEvents='none',_0x3585d6.style.opacity='0.5',_0x3585d6.style.textDecoration='none'):(_0x3585d6.style.pointerEvents='auto',_0x3585d6.style.opacity='1',_0x3585d6.style.textDecoration='underline'));
 if(_0x18e910)_0x18e910.style.display='flex';
 
 }
 else {
 if(_0x18e910)_0x18e910.style.display='none';
 
 }
 _0x28b399&&(_0x28b399.classList.add('active'),document.body.style.overflow='hidden');
 
 }
 function _0x3af3e9() {
 _0x28b399&&(_0x28b399.classList.remove('active'),document.body.style.overflow='auto');
 
 }
 _0x1a7d6d.forEach(_0x201272=> {
 _0x201272.addEventListener('click',()=>_0x5eab0e(_0x201272));
 
 });
 _0x45ee4e&&_0x45ee4e.addEventListener('click',_0x3af3e9);
 _0x28b399&&_0x28b399.addEventListener('click',_0x5bbb58=> {
 _0x5bbb58.target===_0x28b399&&_0x3af3e9();
 
 });
 document.addEventListener('keydown',_0x1d075a=> {
 _0x1d075a.key==='Escape'&&_0x28b399&&_0x28b399.classList.contains('active')&&_0x3af3e9();
 
 });
 const _0x41eef9=document.querySelectorAll('.neural-node, '+'.mission-file, '+'.cert-node-container, '+'.skill-card, '+'.domain-card, '+'.ref-card, '+'.contact-terminal');
 if(_0x41eef9.length>0x0) {
 const _0x659fc0= {
 'threshold':0.3
 },_0x37fda4=new IntersectionObserver((_0x178a36,_0x59fde1)=> {
 _0x178a36.forEach((_0x1ccf9f,_0x369dae)=> {
 _0x1ccf9f.isIntersecting&&(setTimeout(()=> {
 _0x1ccf9f.target.style.opacity='1',_0x1ccf9f.target.style.transform='translateY(0)';
 
 },_0x369dae*0x96),_0x59fde1.unobserve(_0x1ccf9f.target));
 
 });
 
 },_0x659fc0);
 _0x41eef9.forEach(_0x323909=> {
 _0x323909.style.opacity='0',_0x323909.style.transform='translateY(30px)',_0x323909.style.transition='opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',_0x37fda4.observe(_0x323909);
 
 });
 
 }
 const _0x2422d3=document.getElementById('bg-video-z1'),_0x17dfba=document.getElementById('zone-1');
 if(_0x2422d3&&_0x17dfba) {
 const _0x10298f=new IntersectionObserver(_0x25d656=> {
 _0x25d656.forEach(_0x9cb217=> {
 !_0x9cb217.isIntersecting?_0x2422d3.pause():_0x2422d3.play().catch(_0x24540e=>console.log('Lecture auto bloquée par le navigateur'));
 
 });
 
 }, {
 'threshold':0x0
 });
 _0x10298f.observe(_0x17dfba);
 
 }
 const _0x4d5e91=document.querySelector('.contact-terminal');
 if(_0x4d5e91) {
 const _0x567afa=0x5;
 _0x4d5e91.addEventListener('mousemove',_0x542198=> {
 _0x216c9d=_0x4d5e91.getBoundingClientRect(),_0x44bae7=_0x216c9d.width,_0x4a4219=_0x216c9d.height,_0xa5dca0=(_0x542198.clientX-_0x216c9d.left)/_0x44bae7-0.5,_0x5f860b=(_0x542198.clientY-_0x216c9d.top)/_0x4a4219-0.5,_0x19e085=_0xa5dca0*_0x567afa*0x2,_0x18fa9d=_0x5f860b*_0x567afa*-0x2;
 _0x4d5e91.style.transform='\x0a perspective(1000px) \x0a rotateX('+_0x18fa9d+'deg) \x0a rotateY('+_0x19e085+'deg) scale(1.02) ';
 
 }),_0x4d5e91.addEventListener('mouseleave',()=> {
 _0x4d5e91.style.transform=' perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) ';
 
 }),_0x4d5e91.addEventListener('mouseenter',()=> {
 _0x4d5e91.style.transition='none';
 
 }),_0x4d5e91.addEventListener('mouseleave',()=> {
 _0x4d5e91.style.transition='transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
 
 });
 
 }
 const _0x1733ea=document.getElementById('loop-buffer');
 if(_0x1733ea) {
 const _0xbaf2e5=new IntersectionObserver(_0x11afc1=> {
 _0x11afc1.forEach(_0x57d69e=> {
 _0x57d69e.isIntersecting&&_0x57d69e.intersectionRatio>0.5&&(console.log('Boucle atteinte : Téléportation vers le haut !'),document.documentElement.style.scrollSnapType='none',window.scrollTo(0x0,0x0),setTimeout(()=> {
 document.documentElement.style.scrollSnapType='y mandatory';
 
 },0x32));
 
 });
 
 }, {
 'threshold':0.6
 });
 _0xbaf2e5.observe(_0x1733ea);
 
 }
 const _0x2744bc=document.querySelectorAll('section'),_0x3c4701=document.querySelectorAll('#main-nav ul li a'),_0x19dd83= {
 'root':null,'rootMargin':'0px','threshold':0.3
 },_0x1a6246=new IntersectionObserver(_0x48ad1d=> {
 _0x48ad1d.forEach(_0xfa17b=> {
 if(_0xfa17b.isIntersecting) {
 const _0x6e451a=_0xfa17b.target.getAttribute('id');
 _0x6e451a&&_0x3c4701.forEach(_0x3eb26f=> {
 _0x3eb26f.classList.remove('active-link'),_0x3eb26f.getAttribute('href')==='#'+_0x6e451a&&_0x3eb26f.classList.add('active-link');
 
 });
 
 }
 
 });
 
 },_0x19dd83);
 _0x2744bc.forEach(_0x6ca62c=> {
 _0x6ca62c.id&&_0x1a6246.observe(_0x6ca62c);
 
 });
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
 
});