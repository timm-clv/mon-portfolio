history.scrollRestoration&&(history.scrollRestoration='manual');
window.scrollTo(0,0);
function generateInnerBars() {
  const ___unused=null,_0x3cdd75=document.querySelector('.spinner');
  if(!_0x3cdd75)return;
  const _0xdf34f1=_0x3cdd75.querySelector('.inner-bars');
  if(!_0xdf34f1)return;
  const _0x59fd88=window.innerWidth<0x300,_0x1a524f=50,_0x2f7b5e=50,_0x3a9dbd=42,_0x35c657=40,_0x54dc6b=_0x59fd88?60:150,_0x460ba9=0x168/_0x54dc6b;
  for(let _0x495a11=0;
  _0x495a11<_0x54dc6b;
  _0x495a11++) {
    const _0x29736b=_0x495a11*_0x460ba9,_0x4238c2=_0x29736b*Math.PI/180,_0x24f756=_0x1a524f+_0x3a9dbd*Math.cos(_0x4238c2),_0x384a47=_0x2f7b5e+_0x3a9dbd*Math.sin(_0x4238c2),_0x4e972b=_0x1a524f+_0x35c657*Math.cos(_0x4238c2),_0x25e45a=_0x2f7b5e+_0x35c657*Math.sin(_0x4238c2),_0xca1972=document.createElementNS('http://www.w3.org/2000/svg','line');
    _0xca1972.setAttribute('x1',_0x24f756),_0xca1972.setAttribute('y1',_0x384a47),_0xca1972.setAttribute('x2',_0x4e972b),_0xca1972.setAttribute('y2',_0x25e45a),_0xdf34f1.appendChild(_0xca1972);
    
  }
  
}
function triggerLocalFlash() {
  anime.set('.loader', {
    'backgroundColor':'#111'
  }),anime.remove('.loader'),anime( {
    'targets':'.loader','backgroundColor':'#000','duration':0x12c,'easing':'easeOutQuad'
  });
  
}
function triggerGlobalFade() {
  anime( {
    'targets':'.loader','backgroundColor':['#000000','#1a1a1a'],'duration':0x5dc,'easing':'easeInOutQuad'
  });
  
}
const lineGrid=document.querySelector('.line-grid'),dotPath=document.querySelector('#dot-path'),NUM_LINES=100,NUM_PATH_POINTS=30,functionNames=['sine','pulse','center','linear','square','inverse','exponential','step','osc_exp','flat_exp','maltese_cross','fleur_de_lis'];
let currentFunctionIndex=0;
function generateLines() {
  if(!lineGrid)return;
  const _0x25151e=document.createDocumentFragment();
  for(let _0x291900=0;
  _0x291900<NUM_LINES;
  _0x291900++) {
    const _0x1ba5ea=100/NUM_LINES*(_0x291900+0.5),_0x24e46a=document.createElementNS('http://www.w3.org/2000/svg','line');
    _0x24e46a.setAttribute('x1','0'),_0x24e46a.setAttribute('x2','100'),_0x24e46a.setAttribute('y1',_0x1ba5ea),_0x24e46a.setAttribute('y2',_0x1ba5ea),_0x24e46a.classList.add('grid-line'),_0x24e46a.dataset.baseY=_0x1ba5ea,_0x25151e.appendChild(_0x24e46a);
    
  }
  lineGrid.appendChild(_0x25151e);
  
}
function getShapeValues(_0x4e4c55,_0x46baf5) {
  const ___unused=null,_0x46b39a=[],_0x5257e8=_0x46baf5-1;
  for(let _0x5c1d8a=0;
  _0x5c1d8a<_0x46baf5;
  _0x5c1d8a++) {
    let _0x3ec917=0;
    const _0x3e96cb=_0x5c1d8a/_0x5257e8;
    switch(_0x4e4c55) {
      case 'sine':_0x3ec917=(Math.sin(_0x3e96cb*Math.PI*2)+1)/2;
      break;
      case'pulse':let _0x47d171=Math.abs(_0x3e96cb-0.5)*2;
      _0x3ec917=1-Math.pow(_0x47d171,3);
      break;
      case'center':let _0x2e4e7c=Math.abs(_0x3e96cb-0.5)*2;
      _0x3ec917=Math.pow(_0x2e4e7c,0.5);
      break;
      case 'linear':_0x3ec917=_0x3e96cb;
      break;
      case'square':_0x3ec917=_0x3e96cb<0.33||_0x3e96cb>0.66?0.2:0.8;
      break;
      case'inverse':_0x3ec917=1-_0x3e96cb;
      break;
      case 'exponential':_0x3ec917=Math.pow(_0x3e96cb,3);
      break;
      case'step':if(_0x3e96cb<0.25)_0x3ec917=0.2;
      else {
        if(_0x3e96cb<0.5)_0x3ec917=0.4;
        else {
          if(_0x3e96cb<0.75)_0x3ec917=0.6;
          else _0x3ec917=0.8;
          
        }
        
      }
      break;
      case 'osc_exp':const _0x28c9e5=Math.pow(_0x3e96cb,2)*0.5,_0x1d2ac2=Math.sin(_0x3e96cb*Math.PI*8);
      _0x3ec917=0.5+_0x28c9e5*_0x1d2ac2;
      break;
      case 'flat_exp':if(_0x3e96cb<0.5)_0x3ec917=0.1;
      else {
        const _0x5ee24f=(_0x3e96cb-0.5)*2;
        _0x3ec917=0.1+Math.pow(_0x5ee24f,3)*0.9;
        
      }
      break;
      case 'maltese_cross':const _0x561511=Math.abs(_0x3e96cb-0.5);
      if(_0x561511<0.2)_0x3ec917=1-_0x561511/0.2*0.6;
      else {
        if(_0x561511<0.3) {
          const _0x11dbc2=(_0x561511-0.2)/0.1;
          _0x3ec917=0.4+_0x11dbc2*0.4;
          
        }
        else {
          const _0x42a2db=(_0x561511-0.3)/0.2;
          _0x3ec917=0.8-_0x42a2db*0.8;
          
        }
        
      }
      break;
      case 'fleur_de_lis':if(_0x3e96cb<0.1)_0x3ec917=_0x3e96cb/0.1*0.5;
      else {
        if(_0x3e96cb<0.35) {
          const _0x4f252f=(_0x3e96cb-0.1)/0.25;
          _0x3ec917=0.5+Math.sin(_0x4f252f*Math.PI)*0.3;
          
        }
        else {
          if(_0x3e96cb<0.5) {
            const _0x4809aa=(_0x3e96cb-0.35)/0.15;
            _0x3ec917=0.5-_0x4809aa*0.3;
            
          }
          else {
            if(_0x3e96cb<0.65) {
              const _0x16585c=(_0x3e96cb-0.5)/0.15;
              _0x3ec917=0.2+_0x16585c*0.8;
              
            }
            else {
              if(_0x3e96cb<0.75) {
                const _0x4e1d09=(_0x3e96cb-0.65)/0.1;
                _0x3ec917=1-_0x4e1d09*0.7;
                
              }
              else {
                if(_0x3e96cb<0.9)_0x3ec917=0.3;
                else {
                  const _0x1ca319=(_0x3e96cb-0.9)/0.1;
                  _0x3ec917=0.3-_0x1ca319*0.3;
                  
                }
                
              }
              
            }
            
          }
          
        }
        
      }
      break;
      
    }
    _0x46b39a.push(_0x3ec917);
    
  }
  return _0x46b39a;
  
}
function getPathData(_0x11a032) {
  if(!dotPath)return'M\x200,50\x20L\x20100,50';
  const _0x2e954f=getShapeValues(_0x11a032,NUM_PATH_POINTS),_0x3eb29a=[];
  for(let _0x53ebdd=0;
  _0x53ebdd<_0x2e954f.length;
  _0x53ebdd++) {
    const _0x105376=100/(NUM_PATH_POINTS-1)*_0x53ebdd,_0x43716b=20+_0x2e954f[_0x53ebdd]*60,_0x4f4baf=_0x53ebdd===0?'M':'L';
    _0x3eb29a.push(_0x4f4baf+'\x20'+_0x105376.toFixed(2)+','+_0x43716b.toFixed(2));
    
  }
  return _0x3eb29a.join('\x20');
  
}
let isDotsAnimationRunning=!![];
function runAnimationCycle() {
  if(!document.querySelector('.grid-line')||!document.querySelector('#dot-path'))return;
  if(!isDotsAnimationRunning)return;
  const _0x3993bd=functionNames[currentFunctionIndex],_0xf15f59=getShapeValues(_0x3993bd,NUM_LINES),_0x27ebfd=getPathData(_0x3993bd);
  anime( {
    'targets':'.grid-line','scaleX':(_0x386666,_0x28d228)=>_0xf15f59[_0x28d228],'delay':anime.stagger(5),'duration':0x4b0,'easing':'easeInOutSine'
  }),anime( {
    'targets':'#dot-path','d':_0x27ebfd,'duration':0x4b0,'easing':'easeInOutSine','complete':()=> {
      if(isDotsAnimationRunning)runAnimationCycle();
      
    }
    
  }),currentFunctionIndex=(currentFunctionIndex+1)%functionNames.length;
  
}
function startDotsAnimation() {
  if(lineGrid)lineGrid.innerHTML='';
  generateLines(),runAnimationCycle();
  
}
document.addEventListener('DOMContentLoaded',function() {
  let _0x59288f,_0x2af579;
  const _0x59c7fb=['.spinner-wrapper'];
  generateInnerBars(),generateLines();
  const _0x3c0542=new URLSearchParams(window.location.search),_0x2a7bae=_0x3c0542.get('skip')==='true';
  if(_0x2a7bae) {
    console.log('Mode Skip activé : Retour vers #Projects.');
    const _0xa1cbdc=document.querySelector('.loader');
    _0xa1cbdc&&(_0xa1cbdc.style.backgroundColor='rgba(0,0,0,0)',_0xa1cbdc.style.pointerEvents='none');
    const _0x1d9011=document.querySelector('.text-container'),_0x4d1e76=document.querySelector('.loader-buttons-container'),_0x5991d0=document.querySelector('.btn-next-loader'),_0x26aaa0=document.querySelector('.loader-text'),_0x465943=document.querySelector('.loader-subtext');
    if(_0x1d9011)_0x1d9011.style.display='none';
    if(_0x4d1e76)_0x4d1e76.style.display='none';
    if(_0x5991d0)_0x5991d0.style.display='none';
    if(_0x26aaa0)_0x26aaa0.style.display='none';
    if(_0x465943)_0x465943.style.display='none';
    document.querySelectorAll('.segment').forEach(_0x3dc2d0=>_0x3dc2d0.style.opacity='1'),document.querySelectorAll('.inner-bars line').forEach(_0x202bd5=>_0x202bd5.style.opacity='1');
    const _0x50038b=document.querySelector('.text-container');
    if(_0x50038b)_0x50038b.style.opacity='1';
    const _0x3343c8=document.querySelector('.path');
    if(_0x3343c8)_0x3343c8.style.opacity='1';
    const _0x2af375=document.querySelector('.scope-container');
    _0x2af375&&(_0x2af375.style.display='block',_0x2af375.style.opacity='1',_0x2af375.style.transform='translate(-50%,\x20-50%)\x20scale(1)',setTimeout(()=> {
      try {
        runAnimationCycle();
        
      }
      catch(_0x4f7863) {
        
      }
      
    },100));
    const _0x591a42=document.getElementById('main-nav');
    if(_0x591a42)_0x591a42.style.opacity='1';
    const _0x1ef221=document.getElementById('projects');
    _0x1ef221&&_0x1ef221.scrollIntoView( {
      'behavior':'auto'
    });
    window.skipIntroAnimation=!![],document.dispatchEvent(new CustomEvent('loaderFinished'));
    return;
    
  }
  else document.body.style.overflow='hidden',document.documentElement.style.overflow='hidden';
  const _0x4b189c=document.querySelectorAll('.loader .btn-contact, .loader .btn-resume');
  _0x4b189c.forEach(_0x44edad=> {
    _0x44edad.addEventListener('click',_0x4d32df=> {
      const ___unused=null,_0x21a0e4=_0x44edad.getAttribute('href'),_0x590221=_0x44edad.target==='_blank';
      !_0x590221&&_0x21a0e4&&_0x21a0e4.startsWith('#')?(_0x4d32df.preventDefault(),_0x3cb961(),setTimeout(()=> {
        const ___unused=null,_0x2ecedc=document.querySelector(_0x21a0e4);
        _0x2ecedc&&_0x2ecedc.scrollIntoView( {
          'behavior':'smooth'
        });
        
      },100)):_0x3cb961();
      
    });
    
  });
  const _0x242754=document.querySelector('.btn-next-loader');
  function _0x3cb961(_0x527de5) {
    if(_0x527de5)_0x527de5.preventDefault();
    clearTimeout(_0x59288f);
    if(_0x2af579)_0x2af579.pause();
    if(_0x242754)_0x242754.style.display='none';
    isDotsAnimationRunning=![];
    if(typeof _0x43807e!=='undefined')_0x43807e.pause();
    anime.remove('.spinner'),anime.remove('.inner-bars'),anime.remove('.inner-bars line'),anime.remove('.segment'),anime.remove('.grid-line'),anime.remove('#dot-path'),anime.remove('.spinner-wrapper');
    const _0x4467ae=document.querySelector('.spinner-wrapper');
    _0x4467ae&&(_0x4467ae.setAttribute('style',''),_0x4467ae.style.opacity='1',_0x4467ae.style.display='flex',_0x4467ae.style.filter='none',_0x4467ae.style.clipPath='none',_0x4467ae.style.transform='none');
    const _0x2d7bec=document.querySelector('.central-disk');
    if(_0x2d7bec)_0x2d7bec.style.display='none';
    const _0x26506b=document.querySelector('.scope-container');
    if(_0x26506b) {
      _0x26506b.style.display='block',_0x26506b.style.opacity='1',_0x26506b.style.transform='translate(-50%, -50%) scale(1)';
      const _0xe7722e=document.querySelector('.line-grid');
      if(_0xe7722e)_0xe7722e.innerHTML='';
      setTimeout(()=> {
        isDotsAnimationRunning=!![],generateLines(),runAnimationCycle();
        
      },50);
      
    }
    document.querySelectorAll('.segment').forEach(_0x317f6e=>_0x317f6e.style.opacity='1'),document.querySelectorAll('.inner-bars\x20line').forEach(_0x3159af=>_0x3159af.style.opacity='1');
    const _0x2a12ff=document.querySelector('.path');
    if(_0x2a12ff)_0x2a12ff.style.opacity='1';
    const _0x597dcc=document.querySelector('.text-container');
    if(_0x597dcc)_0x597dcc.style.opacity='1';
    const _0xc2e854=['.loader-text','.loader-subtext','.loader-buttons-container'];
    _0xc2e854.forEach(_0x3f8f3c=> {
      const ___unused=null,_0x3c7cb5=document.querySelector(_0x3f8f3c);
      _0x3c7cb5&&(_0x3c7cb5.style.opacity='1',_0x3c7cb5.style.transform='translateY(0)',_0x3c7cb5.style.display='block');
      
    }),window.skipIntroAnimation=!![],document.dispatchEvent(new CustomEvent('loaderFinished')),anime( {
      'targets':'.loader','backgroundColor':'rgba(0,\x200,\x200,\x200)','duration':0x320,'easing':'easeInOutQuad','complete':()=> {
        anime( {
          'targets':'.spinner','rotate':'+=360deg','duration':0x4e20,'easing':'linear','loop':!![]
        }),anime( {
          'targets':'.inner-bars','rotate':'-=720deg','duration':0x4e20,'easing':'linear','loop':!![]
        });
        
      }
      
    }),anime( {
      'targets':'#main-nav','opacity':1,'duration':0x320
    });
    
  }
  _0x242754&&_0x242754.addEventListener('click',_0x3cb961);
  if(_0x2a7bae) {
    const _0x5f298c=document.querySelector('.spinner-wrapper');
    if(_0x5f298c)_0x5f298c.style.display='none';
    const _0x284e1f=['.loader-text','.loader-subtext','.loader-buttons-container','.btn-next-loader'];
    _0x284e1f.forEach(_0x2fa95c=> {
      const ___unused=null,_0x221268=document.querySelector(_0x2fa95c);
      _0x221268&&(_0x221268.style.opacity=1,_0x221268.style.transform='translateY(0)');
      
    });
    const _0x63e3fb=document.querySelector('.btn-next-loader');
    _0x63e3fb&&(_0x63e3fb.style.opacity=1,_0x63e3fb.style.display='block',_0x63e3fb.classList.remove('is-hidden'),_0x63e3fb.addEventListener('click',_0x249112=> {
      _0x249112.preventDefault(),document.dispatchEvent(new CustomEvent('loaderFinished')),anime( {
        'targets':'.loader','opacity':0,'duration':0x1f4,'easing':'easeInOutQuad','complete':()=> {
          document.querySelector('.loader').style.display='none';
          if(window.location.hash==='#projects') {
            const _0x2867db=document.getElementById('projects');
            if(_0x2867db)_0x2867db.scrollIntoView();
            
          }
          
        }
        
      }),anime( {
        'targets':'#main-nav','opacity':1,'duration':0x1f4
      });
      
    }));
    return;
    
  }
  const _0x43807e=anime.timeline( {
    'easing':'easeOutExpo'
  });
  _0x43807e.add( {
    'targets':'.btn-next-loader','opacity':[0,1],'duration':0x1f4,'offset':'-=600'
  }),_0x43807e.add( {
    'targets':'.inner-bars line','opacity':[0,1],'duration':0x190,'delay':anime.stagger(10),'offset':'-=600'
  }),_0x43807e.add( {
    'targets':'.segment','opacity':[0,1],'duration':0x1f4,'delay':()=>anime.random(0,0x320),'offset':'-=400','begin':triggerLocalFlash,'complete':triggerGlobalFade
  }),_0x43807e.add( {
    'targets':'.central-disk','opacity':[0,1],'scale':[0.8,1],'duration':0x2bc,'offset':'-=900'
  }),_0x43807e.add( {
    'targets':'.text-container','opacity':[0,1],'duration':0x1f4,'easing':'linear','offset':'-=800'
  }),_0x43807e.add( {
    'targets':'.loader-text','opacity':[0,1],'translateY':[20,0],'duration':0x2bc,'offset':'-=600'
  }),_0x43807e.add( {
    'targets':'.loader-subtext','opacity':[0,1],'translateY':[10,0],'duration':0x2bc,'offset':'-=500'
  }),_0x43807e.add( {
    'targets':'.loader-buttons-container','opacity':[0,1],'translateY':[10,0],'duration':0x2bc,'offset':'-=400'
  }),_0x43807e.finished.then(()=> {
    anime( {
      'targets':'.spinner','rotate':0x168,'duration':0x4e20,'easing':'linear','loop':!![]
    }),anime( {
      'targets':'.inner-bars','rotate':-0x2d0,'duration':0x4e20,'easing':'linear','loop':!![]
    }),setTimeout(()=> {
      const ___unused=null,_0x208b6f=document.querySelector('.central-disk');
      if(_0x208b6f)_0x208b6f.style.display='none';
      const _0x2d2013=document.querySelector('.dot-grid-container');
      if(_0x2d2013)_0x2d2013.style.display='none';
      const _0x1569d6=document.querySelector('.scope-container');
      _0x1569d6&&(_0x1569d6.style.display='block',_0x1569d6.style.opacity=1,_0x1569d6.style.transform='translate(-50%, -50%) scale(1)'),startDotsAnimation();
      
    },0x3e8);
    const _0x265d63=['I am an engineering student.','I\'m a developer','A Creative Developer','I study mechatronics <br> and robotics','I work on AI','Neural\x20Networks\x20and\x20<br>\x20Machine\x20Learning','Image\x20processing\x20is\x20brilliant','Like programmation ... ','I\x20love\x20Java\x20Script','I\x20am\x20a\x20hard\x20worker','I\x20am\x20an\x20enthusiastic\x20<br>\x20programmer','Otherwise, <br> I have hobbies','A robotics club <br> and sports'];
    let _0x32fd4e=0;
    const _0x32090a=document.querySelector('.loader-subtext'),_0x226f69=100,_0x4801f3=50,_0x1f8c09=0x7d0,_0x4209cf=0x1f4;
    let _0x5bff4a=0,_0x43e137=![];
    function _0x5f1b8c() {
      if(!_0x32090a)return;
      const _0x2d198f=_0x265d63[_0x32fd4e];
      _0x43e137?(_0x32090a.innerHTML=_0x2d198f.substring(0,_0x5bff4a-1)+'<span class="text-cursor"></span>',_0x5bff4a--,_0x5bff4a===0?(_0x43e137=![],_0x32fd4e=(_0x32fd4e+1)%_0x265d63.length,setTimeout(_0x5f1b8c,_0x4209cf)):setTimeout(_0x5f1b8c,_0x4801f3)):(_0x32090a.innerHTML=_0x2d198f.substring(0,_0x5bff4a+1)+'<span\x20class=\x22text-cursor\x22></span>',_0x5bff4a++,_0x5bff4a===_0x2d198f.length?(_0x43e137=!![],setTimeout(_0x5f1b8c,_0x1f8c09)):setTimeout(_0x5f1b8c,_0x226f69));
      
    }
    setTimeout(_0x5f1b8c,0x9c4);
    let _0x539622=![];
    function _0x461e94(_0x2fe267=![]) {
      if(_0x539622)return;
      _0x539622=!![],clearTimeout(_0x59288f),anime.remove('.spinner'),anime.remove('.inner-bars');
      const _0x524c85=document.querySelector('.btn-next-loader');
      if(_0x524c85)_0x524c85.style.display='none';
      const _0x1e7fea=document.querySelector('.loader'),_0xf16d54=document.getElementById('main-nav'),_0x47924d=()=> {
        _0x2fe267&&(console.log('Skip-flag positionné pour scene3D.'),window.skipIntroAnimation=!![]),console.log('Glitch\x20terminé\x20ou\x20skippé.\x20Lancement\x20de\x20la\x20scène\x203D.'),document.dispatchEvent(new CustomEvent('loaderFinished')),anime( {
          'targets':_0x1e7fea,'backgroundColor':'rgba(0, 0, 0, 0)','duration':_0x2fe267?0x1f4:0x7d0,'easing':'easeInOutQuad'
        }),anime( {
          'targets':_0xf16d54,'opacity':[0,1],'duration':_0x2fe267?0x1f4:0x3e8,'easing':'easeInOutQuad'
        });
        
      };
      if(_0x2fe267) {
        console.log('Skip-to-scene. Lancement instantané.');
        const _0x1fc6c1=document.querySelector('.spinner-wrapper');
        _0x1fc6c1&&(_0x1fc6c1.style.opacity=0,_0x1fc6c1.style.filter='blur(10px)',_0x1fc6c1.style.clipPath='inset(50%\x2050%\x2050%\x2050%)'),_0x47924d();
        
      }
      else _0x2af579=anime.timeline( {
        'duration':0x7d0,'easing':'steps(4)'
      }),_0x2af579.add( {
        'targets':_0x59c7fb,'opacity':[ {
          'value':1,'duration':200
        }, {
          'value':0.3,'duration':100
        }, {
          'value':0.8,'duration':200
        }, {
          'value':0.1,'duration':100
        }, {
          'value':1,'duration':0x12c
        }, {
          'value':0,'duration':0x44c
        }
        ],'filter':[ {
          'value':'blur(0px)','duration':200
        }, {
          'value':'blur(4px)','duration':100
        }, {
          'value':'blur(0px)','duration':200
        }, {
          'value':'blur(2px)','duration':100
        }, {
          'value':'blur(0px)','duration':0x12c
        }, {
          'value':'blur(10px)','duration':0x44c
        }
        ],'clipPath':[ {
          'value':'inset(0% 0% 0% 0%)','duration':200
        }, {
          'value':'inset(20%\x200%\x2060%\x200%)','duration':100
        }, {
          'value':'inset(0% 0% 0% 0%)','duration':200
        }, {
          'value':'inset(50% 0% 30% 0%)','duration':100
        }, {
          'value':'inset(0% 0% 0% 0%)','duration':0x12c
        }, {
          'value':'inset(50% 50% 50% 50%)','duration':0x44c
        }
        ]
      }),_0x2af579.finished.then(()=> {
        const ___unused=null,_0x3572df=document.querySelector('.spinner-wrapper');
        _0x3572df&&_0x3572df.style.setProperty('opacity','0','important'),setTimeout(()=> {
          console.log('Glitch terminé. Nettoyage sécurisé.'),anime.remove(_0x59c7fb),_0x47924d();
          
        },50);
        
      });
      
    }
    _0x59288f=setTimeout(()=>_0x461e94(![]),0x1f40);
    
  });
  
});