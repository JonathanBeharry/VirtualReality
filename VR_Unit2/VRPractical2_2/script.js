let scene;
let rocket;
let pokeball;
let dude;
let car;

window.addEventListener("DOMContentLoaded",function() {
scene = document.querySelector("a-scene"); //CSS Selector
  rocket = document.querySelector("#rocket");
  rocket.a = 0;
  rocket.da = 0.01;

  pokeball = document.querySelector("#pokemonball");
  pokeball.a = 0;
  pokeball.da = 3;

  dude = document.querySelector("#dude");
  dude.a = 0;
  dude.da = 0.01;

  car = document.querySelector("#car");
  car.a = 0;
  car.da = -0.01;

  sun = document.querySelector("#sun");
  sun.opacity = 0;
  sun.fadeSpeed = 0.005;
  
  loop();
  loop2();
  loop3();
  loop4();
  fadeInSun();
    
})

// rocket loop
function loop (){
  rocket.a += rocket.da;
  rocket.setAttribute("position", {x:3 , y:rocket.a , z:-4});
  window.requestAnimationFrame(loop);
}

// pokeball loop
function loop2 (){
  pokeball.a += pokeball.da;
  pokeball.setAttribute("rotation", {x:0, y:pokeball.a, z:0});
  window.requestAnimationFrame(loop2);
}

// dude loop
function loop3 (){
  dude.a += dude.da;
  dude.setAttribute("scale", {x:dude.a , y:dude.a , z:dude.a});
  window.requestAnimationFrame(loop3);
}

// car loop
function loop4 (){
  car.a += car.da;
  car.setAttribute("position", {x:car.a , y:0 , z:-8});
  window.requestAnimationFrame(loop4);
}

// sun function

function fadeInSun() {
  if (sun.opacity < 1) {
    sun.opacity += sun.fadeSpeed;
    sun.setAttribute("material", "opacity", sun.opacity);
    requestAnimationFrame(fadeInSun);
  }
}