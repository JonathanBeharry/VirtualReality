let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, potholes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  /* Challenge 1
     Add 10 new PotHole at random locations to the potholes array
  */
  let cones = []
  for(let i=0;i<10;i++){
  x = rnd(-8,8)
  z = rnd(-8,8)
  y = 1;
  cones.push(newCone(x,y,z));
})
function loop(){
  /* Challenge 2
     Go through the potholes array.  If the distance between you and a 
     pothole is less than 1.7, set the camera's drop variable to true. 
  */
if(!camera.drop){
  for(let i=0;i<cones.length;i++){
    let d = distance(camera,cones[i]);
    function checkDistance(d){
      if(d < 1.7){
        cam
  if(camera.drop){
    camera.object3D.position.y -= 0.025;
  }
 
  window.requestAnimationFrame(loop);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}