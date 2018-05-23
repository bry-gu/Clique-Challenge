document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger();
});

document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'visibleClass',
      hidden: 'hiddenClass'
    },
    offset: {
      x: 0,
      y: 20
    },
    addHeight: true,
    once: true
  }, document.body, window);
});