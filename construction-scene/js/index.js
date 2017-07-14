var tl = new TimelineMax({
  repeat: 0
});

tl.fromTo("#greentruck", 13, {x:-280, repeat:0, transformOrigin:"50% 50%"}, {x:470, transformOrigin:"50% 50%", delay:0, ease: Expo.easeInOut})
.to("#greentruck", 2.3, {delay:2, x:450, ease:Elastic.easeInOut, yoyo:true, repeat:-1, repeatDelay:4})

TweenMax.fromTo(".load", 2, {y:-8, scaleX: 1, rotation:0, repeat:-1, transformOrigin:"50% 0%", yoyo:true}, {y:-8, rotation:-6, scaleX:1, transformOrigin:"50% 0%", repeat:-1, delay:0, yoyo:true, ease: Power2.easeInOut});

var tl2 = new TimelineMax({
  repeat: -1,
  yoyo:true
});

tl2.fromTo(".lifter", 8, {delay:0, x:0, repeat:0, transformOrigin:"50% 50%"}, {x:-110, transformOrigin:"50% 50%", delay:0, ease: Sine.easeInOut, repeatDelay:1})
.to(".lifter", 2.3, {delay:2, x:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:4})



var tl3 = new TimelineMax({
  repeat: -1,
  yoyo:true
});

tl3.fromTo(".ropegroup", 8, {delay:2, y:0, repeat:0, transformOrigin:"50% 50%"}, {y:110, transformOrigin:"50% 50%", delay:2, ease: Sine.easeInOut, repeatDelay:1})
.to(".ropegroup", 2.3, {delay:2, y:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:4})

var tl4 = new TimelineMax({
  repeat: -1,
  yoyo:true
});

tl4.fromTo(".rope", 8, {delay:2, scaleY:1, repeat:0, transformOrigin:"50% 0%"}, { scaleY:9, transformOrigin:"50% 0%", delay:2, ease: Sine.easeInOut, repeatDelay:1})
.to(".rope", 2.3, {scaleY:0,delay:2, x:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:4})

TweenMax.fromTo("#Mixer", 12, {delay:3, x:710, repeat:0, transformOrigin:"50% 50%", repeat:-1, yoyo:true}, {x:0, transformOrigin:"50% 50%", delay:0, ease: Sine.easeInOut, repeat:-1, yoyo:true, delay:2, repeatDelay:9});

TweenMax.fromTo("#Bulldozer", 0.05, {delay:0, x:0, y:0, repeat:0, transformOrigin:"50% 50%", repeat:-1, yoyo:true}, {x:-0.2, y:0.4, rotate:1, transformOrigin:"50% 50%", delay:0, ease: Elastic.easeInOut, repeat:-1, yoyo:true});