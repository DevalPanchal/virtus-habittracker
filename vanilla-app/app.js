/* ============================================================
   VIRTUS landing — interactions
   Entrance reveals are CSS-driven (see styles.css). JS here only
   enriches: nav blur, the live heatmap, count-up, animated bars,
   and gallery parallax. All "must-be-final" state is set on
   DOMContentLoaded so it's correct even if rAF/timers are throttled.
   ============================================================ */
(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var heat;

  function vh(){ return window.innerHeight || document.documentElement.clientHeight || 800; }

  /* ---- nav blur ---- */
  function navState(){
    var nav = document.getElementById('nav');
    if(!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  /* ---- live heatmap ---- */
  function buildHeatmap(){
    heat = document.getElementById('heatmap');
    if(!heat) return;
    var ROWS=7, COLS=26, total=COLS*ROWS;
    var palette=['rgba(240,86,78,.28)','rgba(240,86,78,.55)','rgba(240,86,78,.82)','#F0564E'];
    var cells=[];
    for(var i=0;i<total;i++){ var c=document.createElement('div'); c.className='hc'; heat.appendChild(c); cells.push(c); }
    heat._paint=function(animate){
      cells.forEach(function(c, idx){
        var col=Math.floor(idx/ROWS), recency=col/COLS;
        var lit=Math.random() < (0.32 + recency*0.55);
        var lvl=lit ? Math.min(3, Math.floor(Math.random()*(1+recency*3.5))) : -1;
        var apply=function(){ c.style.background = lvl<0 ? 'rgba(255,255,255,.05)' : palette[lvl]; };
        if(animate && !reduce){ c.style.transitionDelay=(col*16+(idx%ROWS)*6)+'ms'; setTimeout(apply,0); }
        else { c.style.transitionDelay='0ms'; apply(); }
      });
    };
    heat._paint(false); // final-state fill immediately
  }

  /* ---- count-up (base HTML already shows the number, so safe) ---- */
  function countUp(el){
    if(el._c) return; el._c=true;
    var target=parseInt(el.getAttribute('data-count'),10);
    if(isNaN(target) || reduce || el.textContent.trim()==='∞') return;
    var dur=1100, start=null;
    function tick(now){
      if(start===null) start=now;
      var p=Math.min(1,(now-start)/dur), e=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*e).toLocaleString();
      if(p<1) requestAnimationFrame(tick); else el.textContent=target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }

  /* ---- gallery parallax (cosmetic) ---- */
  var parItems=[];
  function parallax(){
    if(reduce) return;
    var h=vh();
    parItems.forEach(function(el){
      var r=el.getBoundingClientRect();
      var off=((r.top+r.height/2)-h/2)/h;
      el.style.transform='translateY('+(off*parseFloat(el.getAttribute('data-par'))*100)+'px)';
    });
  }

  /* ---- scroll loop ---- */
  var ticking=false;
  function onScroll(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){ navState(); parallax(); ticking=false; });
  }

  function init(){
    buildHeatmap();
    parItems=[].slice.call(document.querySelectorAll('[data-par]'));

    // set final state for bars (reliable — animates via CSS transition from 0)
    document.querySelectorAll('.attr-fill').forEach(function(f){ f.style.width=f.getAttribute('data-val')+'%'; });
    document.querySelectorAll('.ifill').forEach(function(f){ f.style.width=f.getAttribute('data-fill')+'%'; });

    // count-up the strip numbers
    document.querySelectorAll('[data-count]').forEach(countUp);

    navState(); parallax();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);

    // re-paint heatmap periodically for a "live" feel (foreground only)
    if(heat && heat._paint && !reduce){
      setInterval(function(){
        var r=heat.getBoundingClientRect();
        if(r.top < vh() && r.bottom > 0) heat._paint(true);
      }, 4200);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
