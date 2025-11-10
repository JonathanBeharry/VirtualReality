
class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = Math.random() * 0.2 + 0.05;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius","1");
    body.setAttribute("height","4.5");
    body.setAttribute("color", "red");
    this.obj.append( body );
  
    let head = document.createElement("a-cone");
    head.setAttribute("position","0 3.25 0");
    head.setAttribute("color", "gray");
    head.setAttribute("radius-bottom","1");
    head.setAttribute("radius-top","0.1");
    head.setAttribute("height","2");
    this.obj.append( head );

 let flame = document.createElement("a-cone");
  flame.setAttribute("position", "0 -3 0");
  flame.setAttribute("radius-bottom", "0.5");
  flame.setAttribute("radius-top", "0");
  flame.setAttribute("height", "1");
  flame.setAttribute("color", "orange");
  flame.setAttribute("rotation", "0 180 0");
  this.obj.append(flame);
    
    scene.append(this.obj);
  
  }

  launch(){
    this.y += this.speed;
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }

}
