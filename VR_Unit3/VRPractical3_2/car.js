class Car{
  constructor(x,z,speed){
    this.x = x;
    this.y = 1.3;
    this.z = z;
    this.speed = speed;
    this.flag1 = false;
    
    this.obj = carTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  
    this.obj.addEventListener("mouseenter",()=>{
        this.flag1 = true;
    })
    scene.append(this.obj);
  }
  
  
  drive(){
    if(this.flag1){
        this.x += this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
    }
    if(this.flag1 && this.x > 20){
        this.speed = - this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:(this.z)});
        this.obj.setAttribute("rotation", "0 270 0");
    }
     if(this.flag1 && this.x < -20){
        this.speed = - this.speed;
        this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
        this.obj.setAttribute("rotation", "0 90 0");
    }
  }


}