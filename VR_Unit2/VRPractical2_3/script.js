let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }
for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let  = new Flower(x, 0 , z);
  }   
  cloud = new Cloud(0,20,0);
let cloud = new Cloud(0,20,0);
})
