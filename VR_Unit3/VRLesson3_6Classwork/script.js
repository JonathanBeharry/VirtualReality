let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, balls = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  gem = document.getElementById("gem");


  /*
    Challenge 1
    Add an eventlistener that associates user pressing the keys with the following actions.
    1) Rotate the gem in the positively on the z-axis
    2) Rotate the gem in the negatively on the z-axis
    3) Rotate the gem in the positively on the x-axis
    4) Rotate the gem in the negatively on the x-axis
    5) Rotate the gem in the positively on the y-axis
    6) Rotate the gem in the negatively on the y-axis
    Note: Copy and paste!
  */
  window.addEventListener("keydown", function(e) {
    let rotation = gem.getAttribute("rotation");
    switch(e.key) {
      case "q":
        gem.setAttribute("rotation", {x: rotation.x, y: rotation.y, z: rotation.z + 10});
        break;
      case "a":
        gem.setAttribute("rotation", {x: rotation.x, y: rotation.y, z: rotation.z - 10});
        break;
      case "w":
        gem.setAttribute("rotation", {x: rotation.x + 10, y: rotation.y, z: rotation.z});
        break;
      
  /*  Challenge 2
     When the user clicks in the window, resets the gem rotation to (0,0,0)
  */ 
})
