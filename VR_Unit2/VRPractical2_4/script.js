let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let car;

window.addEventListener("DOMContentLoaded",function() {let scene;
let rocket;
scene = document.querySelector("a-scene"); //CSS Selector
  rocket = document.querySelector("#rocket");
  rocket.a = 0;
  rocket.da = 0.01;
  loop();

function loop (){
  rocket.a += rocket.da;
  rocket.setAttribute("position", {x:3 , y:rocket.a , z:-4});
  window.requestAnimationFrame(loop);
 
  car = document.querySelector("#car");
  car.a = 0;
  car.da = -0.01;

  // car loop
function loop (){
  car.a += car.da;
  car.setAttribute("position", {x:car.a , y:0 , z:-8});
  window.requestAnimationFrame(loop4);
}
}}// car loop
function loop (){
  car.a += car.da;
  car.setAttribute("position", {x:car.a , y:0 , z:-8});
  window.requestAnimationFrame(loop);
for(let i = 0; i < 20; i++){
    let rocket = new rocket(rnd(-20,20), 0 , rnd(-20,20));
    rocket.scale(rnd(1,4));
}

