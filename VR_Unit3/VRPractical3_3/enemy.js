class Enemy {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.dx = rnd(-0.04, 0.04);
    this.dy = rnd(-0.02, 0.02);
    this.dz = rnd(-0.04, 0.04);
    
   
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 1);
    this.obj.setAttribute("color", "red");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);
    
    
    this.indicator = document.createElement("a-sphere");
    
    
    this.isAlive = true;
  }
  
  update() {
    if (!this.isAlive) return;
    
    
    this.x += this.dx;
    this.y += this.dy;
    this.z += this.dz;
    
    if (this.x < -15 || this.x > 15) {
      this.dx = -this.dx;
      this.x = Math.max(-15, Math.min(15, this.x));
    }
    if (this.y < 1 || this.y > 8) {
      this.dy = -this.dy;
      this.y = Math.max(1, Math.min(8, this.y));
    }
    if (this.z < -15 || this.z > 5) {
      this.dz = -this.dz;
      this.z = Math.max(-15, Math.min(5, this.z));
    }
    
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.indicator.setAttribute("position", { x: this.x, y: this.y + 0.7, z: this.z });
  }
}
