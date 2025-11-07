let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];
let cars = [];

  window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < 100; i++){
    let x = rnd(-50, 50);
    let y = rnd(-100, -50); 
    let z = rnd(-50, 50);
    let newRocket = new Rocket(x, y, z);
    rockets.push(newRocket);
  }

  for(let i = 0; i < 10; i++){
  let x = rnd(-40, 40);
  let z = rnd(-40, 40);
  let y = rnd(20, 50);
  let ufo = new UFO(x, y, z);
  ufos.push(ufo);
}

for (let i = 0; i < 20; i++) {
  let x = rnd(-40, 40);
  let z = rnd(-40, 40);
  let y = 0;
  let car = new Car(x, y, z);
  cars.push(car);
}
  loop();
})
  

function loop(){
  for(let i = 0; i < rockets.length; i++){
    rockets[i].launch();
  }

  for (let i = 0; i < ufos.length; i++) {
    ufos[i].invade();
  }
  for (let i = 0; i < cars.length; i++) {
    cars[i].move();
  }
  window.requestAnimationFrame( loop );
}