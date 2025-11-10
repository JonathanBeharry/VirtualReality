class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = Math.random() * 0.2 + 0.05;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", "2");
    body.setAttribute("height", "0.5");
    body.setAttribute("color", "gray");
    this.obj.append(body);
  
    let dome = document.createElement("a-sphere");
    dome.setAttribute("position", "0 0.5 0");
    dome.setAttribute("radius", "1");
    dome.setAttribute("color", "lightblue");
    this.obj.append(dome);

    let ring = document.createElement("a-torus");
    ring.setAttribute("rotation", "90 0 0"); 
    ring.setAttribute("radius", "2.3");
    ring.setAttribute("radius-tubular", "0.1");
    ring.setAttribute("color", "purple");
    ring.setAttribute("opacity", "0.8");
    this.obj.append(ring);
    scene.append(this.obj);
   let taken = document.createElement("a-cone");
  taken.setAttribute("position", "0 -3 0");
  taken.setAttribute("radius-bottom", "0.5");
  taken.setAttribute("radius-top", "0");
  taken.setAttribute("height", "1");
  taken.setAttribute("color", "red");
  taken.setAttribute("rotation", "0 180 0");
taken.setAttribute("position", "0 0.5 0"); 
}
  invade(){
    if(this.y > 0){
      this.y -= this.speed;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}
}