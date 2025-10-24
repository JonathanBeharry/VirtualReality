class Cloud {
    constructor(x,y,z){
        this.cloud = document.createElement("a-entity");
        this.cloud.setAttribute("position",{x:x,y:y,z:z});
        this.cloud.setAttribute("scale",{x:5,y:5,z:5});
        this.createCloud();
        scene.append(this.cloud);
        append( this.cloud );
        let cloud = document.createElement("a-entity");
       this.obj = cloud;
       
    }
   
        }