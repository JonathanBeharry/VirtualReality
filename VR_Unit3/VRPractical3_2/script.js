let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  carTemplate = document.querySelector("#carTemplate");
  
      
this.rotate=true;
this.obj.addEventListener("mouseenter",()=>{
    this.rotate=true;
    this.obj.addEventListener("mouseleave",()=>{
        this.rotate=false;
    }


  loop();
})

function loop(){
for(let car of cars){
    car.drive();
    
  window.requestAnimationFrame(loop);
}
