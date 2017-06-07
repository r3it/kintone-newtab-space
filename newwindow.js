/**
 * Open geust space as new window.
 * 
 * After page loaded, MutationObserver observes the SpaceList.
 * When changes are deteced it will modify <a> tag to add "target" attribute.
 */
(function(){
  "use strict";

  if( document.readyState !== 'loading'){
    setListener();
  } else {
    document.addEventListener('DOMContentLoaded', setListener);
  }

  function setListener(){
    var id = setInterval(function(){
      var el = document.querySelector('.gaia-argoui-spacescrollinglist-list');
      if( el ){
        var observer = new MutationObserver(function(mutationRecords, mutationObserver){
          modifySpaceList();
        });
        modifySpaceList();
        observer.observe(el, {childList: true});
        clearInterval(id);
      }
    }, 100);
  }

  function modifySpaceList(){
    var els = document.querySelectorAll('.gaia-argoui-spacescrollinglist-item');
    if( els.length > 0 ){
      els.forEach(function(el){
        var children = el.querySelectorAll('span.gaia-argoui-spacescrollinglist-guest');
        if( children && children.length > 0 ){
          el.removeAttribute('target');
          el.setAttribute('target', '_blank');
        }
      });
    }
  }
})();