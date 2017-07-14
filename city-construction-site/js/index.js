var sun = $("#sun_3_"), 
    cloud1 = $("#cloud1"),
    cloud2 = $("#cloud2"),
    cloud3 = $("#cloud3"),
    gauge = $("#gauge"),
    wheel = $("#wheel"),
    city = $(".city path"),
    tTog = $("#top-toggle"),
    sTog = $("#side-toggle"),
    bkFar = $("#bk-far"),
    bkMid = $("#bk-mid"),
    but1 = $("#button1"),
    but2 = $("#button2"),
    controls = $("#controls path"),
    mult = [controls, bkFar, bkMid, city, extras],
    body = $("body"),
    extras = $(".extras path");

TweenMax.set(wheel, {
  transformOrigin: "50% 50%"
});

TweenMax.set(city, {
  visibility: "visible"
});

//animation that's repeated for all of the sections
function revolve() {
  var tl = new TimelineMax({
    repeat1: -1
  });

  tl.add("begin");
  tl.to(sun, 15, {
      transformOrigin: "50% 50%",
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone
    }, "begin");
  tl.to(cloud1, 10, {
      x: -110,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone
    }, "begin");
  tl.to(cloud2, 10, {
      x: -70,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone
    }, "begin");
  tl.to(cloud3, 10, {
      x: -50,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone
    }, "begin");

  return tl;
}

var repeat = revolve();

//bring it in
function cityIn() {
  var tl = new TimelineMax({
    paused: true
  });

  tl.add("in");
  tl.from(tTog, 3, {
      rotation: -30,
      transformOrigin: "50% 100%",
      ease: Circ.easeInOut
    }, "in");
  tl.staggerFrom(city, 0.75, {
      y: -50,
      scale: 0,
      cycle:{
        x:[300, 100, 200],
        opacity:[0.5, 0.3, 0.2, 0.8],
        rotation:[50, 100, 150],
      }, 
      transformOrigin: "50% 50%",
      ease: Back.easeOut
    }, 0.02, "in");
  tl.staggerFrom(extras, 2.5, {
      x: 300,
      scale: 0,
      transformOrigin: "50% 50%",
      rotation: -30,
      ease: Elastic.easeOut
    }, 0.1, "in");
  tl.from(bkFar, 2.5, {
      scaleY: 0,
      opacity: 0.7,
      transformOrigin: "50% 100%",
      ease: Circ.easeOut
    }, "in");
  tl.from(bkMid, 2.5, {
      scaleY: 0,
      opacity: 0.7,
      transformOrigin: "50% 100%",
      ease: Circ.easeOut
    }, "in+=1");
  tl.from(gauge, 2, {
      rotation: 180,
      transformOrigin: "50% 50%",
      ease: Bounce.easeInOut
    }, "in");
  tl.from(gauge, 1, {
      rotation: 0,
      transformOrigin: "50% 50%",
      ease: Sine.easeIn
    }, "in+=3");

  return tl;
}

var fullIn = cityIn();

//side toggle perspective
function perspective() {
  var tl = new TimelineMax({
    paused: true
  });

  tl.add("per");
  tl.from(sTog, 1, {
      rotation: -30,
      transformOrigin: "100% 50%",
      ease: Circ.easeInOut
    }, "per");
  tl.to(bkFar, 1, {
      y: -30,
      scaleY: 0.8,
      opacity: 0.4,
      transformOrigin: "50% 100%",
      ease: Circ.easeInOut
    }, "per");
  tl.to(bkMid, 1, {
      scaleY: 1.6,
      transformOrigin: "50% 100%",
      ease: Circ.easeInOut
    }, "per");
  tl.from(gauge, 0.5, {
      rotation: 60,
      transformOrigin: "50% 50%",
      ease: Bounce.easeInOut
    }, "per");
  tl.from(gauge, 1, {
      rotation: 0,
      transformOrigin: "50% 50%",
      ease: Sine.easeIn
    }, "per+=0.5");

  return tl;
}

var side = perspective();

//button hue
function hued() {
  var ch1 = "hsl(+=110%, +=0%, +=0%)", 
  tl = new TimelineMax({
    paused: true
  });

  tl.add("hu");
  tl.to(mult, 1.25, {
      fill: ch1
    }, "hu");
  tl.from(gauge, 2, {
      rotation: "-=70",
      transformOrigin: "50% 50%",
      ease: Bounce.easeOut
    }, "hu");
  tl.to(body, 1.25, {
      backgroundColor: ch1
    }, "hu");

  return tl;
}

var hue = hued();

//button saturation
function saturation() {
  var ch2 = "hsl(+=5%, +=2%, -=10%)",
  tl = new TimelineMax({
    paused: true
  });

  tl.add("sated");
  tl.to(body, 1, {
      backgroundColor:ch2
    }, "sated");
  tl.from(gauge, 2, {
      rotation: "-=100",
      transformOrigin: "50% 50%",
      ease: Bounce.easeOut
    }, "sated");
  tl.to(mult, 2, {
      fill:ch2
    }, "sated");

  return tl;
}

var sat = saturation();

$(document).ready(function() {
  Draggable.create(wheel, {
    type: "rotation",
    bounds: {
      minRotation: 0,
      maxRotation: 360
    },
    onDrag: function() {
      fullIn.progress((this.rotation)/360 );
      fullIn.pause();
    }
  });

  $(tTog).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('inTo');
    if ($(this).hasClass('inTo')) {
      fullIn.progress(0);
      fullIn.restart();
    } else {
      fullIn.reverse();
    }
  });

  $(sTog).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('s-pers');
    if ($(this).hasClass('s-pers')) {
      side.restart();
    } else {
      side.reverse();
    }
  });

  $(but1).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('a-s');
    if ($(this).hasClass('a-s')) {
      sat.restart();
    } else {
      sat.reverse();
    }
  });

  $(but2).on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('a-h');
    if ($(this).hasClass('a-h')) {
      hue.restart();
    } else {
      hue.reverse();
    }
  });
});