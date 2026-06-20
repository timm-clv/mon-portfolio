// projects.js - deobfuscated

document.addEventListener('DOMContentLoaded',()=> {
  _0x2d47ab=document.querySelectorAll('.btn-filter'),_0x2433a9=document.querySelectorAll('.project-card');
  _0x2d47ab.forEach(_0xf19f1c=> {
    _0xf19f1c.addEventListener('click',()=> {
      _0x2d47ab.forEach(_0x2fa7df=>_0x2fa7df.classList.remove('active')),_0xf19f1c.classList.add('active');
      const _0x2da926=_0xf19f1c.dataset.filter;
      _0x2433a9.forEach(_0x1fd42d=> {
        _0x593534=_0x1fd42d.dataset.category||'',_0x3a4509=_0x593534.split(' ');
        _0x2da926==='all'||_0x3a4509.includes(_0x2da926)?(_0x1fd42d.style.display='flex',_0x1fd42d.style.animation='none',_0x1fd42d.offsetHeight,_0x1fd42d.style.animation='fadeIn 0.5s ease-out forwards'):_0x1fd42d.style.display='none';
        
      });
      
    });
    
  });
  const _0x462d4d=['>> ACCESS_DENIED','>> ERROR','>> PLEASE STOP','>> STOP !','>> WHY DO YOU RIGHT CLICK ?','>> STOP RIGHT CLICKING !','>> WHY :( ?'];
  let _0x1c67d1=0x0;
  document.addEventListener('contextmenu',function(_0x1e20a7) {
    _0x1e20a7.preventDefault();
    const _0x2f72f2=_0x462d4d[_0x1c67d1%_0x462d4d.length];
    _0x1c67d1++;
    const _0x24da26=document.createElement('div');
    _0x24da26.innerText=_0x2f72f2,Object.assign(_0x24da26.style, {
      'position':'fixed','top':_0x1e20a7.clientY+'px','left':_0x1e20a7.clientX+'px','background':'rgba(10, 15, 20, 0.95)','border':'1px solid #E13C4C','color':'#E13C4C','padding':'6px 12px','fontFamily':'monospace','fontSize':'0.85rem','fontWeight':'bold','zIndex':'9999','pointerEvents':'none','borderRadius':'2px','boxShadow':'0 0 15px rgba(225, 60, 76, 0.4)','whiteSpace':'nowrap','animation':'glitchText 0.2s linear'
    }),document.body.appendChild(_0x24da26),setTimeout(()=> {
      _0x24da26.style.opacity='0',_0x24da26.style.transition='opacity 0.3s ease',setTimeout(()=>_0x24da26.remove(),0x12c);
      
    },0x4b0);
    
  }),document.addEventListener('keydown',function(_0x58b0ad) {
    _0x3a82b3=_0x58b0ad.key.toLowerCase();
    if(_0x58b0ad.key==='F12'||_0x58b0ad.ctrlKey&&_0x58b0ad.shiftKey&&_0x3a82b3==='i'||_0x58b0ad.ctrlKey&&_0x58b0ad.shiftKey&&_0x3a82b3==='j'||_0x58b0ad.ctrlKey&&_0x58b0ad.shiftKey&&_0x3a82b3==='c'||_0x58b0ad.ctrlKey&&_0x3a82b3==='u'||_0x58b0ad.ctrlKey&&_0x3a82b3==='s'||_0x58b0ad.ctrlKey&&_0x3a82b3==='p') {
      _0x58b0ad.preventDefault(),_0x58b0ad.stopPropagation(),console.warn('>> ACCESS_DENIED: SHORTCUT_DISABLED');
      const _0x48ffc8=document.createElement('div');
      _0x48ffc8.innerText='>> COMMAND_BLOCKED: '+_0x58b0ad.key.toUpperCase(),Object.assign(_0x48ffc8.style, {
        'position':'fixed','top':'50%','left':'50%','transform':'translate(-50%, -50%)','background':'rgba(10, 15, 20, 0.95)','border':'1px solid #E13C4C','color':'#E13C4C','padding':'10px 20px','fontFamily':'monospace','fontWeight':'bold','zIndex':'10000','boxShadow':'0 0 20px rgba(225, 60, 76, 0.6)'
      }),document.body.appendChild(_0x48ffc8),setTimeout(()=>_0x48ffc8.remove(),0x320);
      
    }
    
  });
  
});