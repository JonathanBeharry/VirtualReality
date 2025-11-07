class Car {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = 0.1;

    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });

    let body = document.createElement("a-box");
    body.setAttribute("wireframe", "true");
    body.setAttribute("depth", "6");
    body.setAttribute("height", "5.5");
    body.setAttribute("width", "5");
    body.setAttribute("color", "darkblue");
    this.obj.append(body);

    let top = document.createElement("a-box");
    top.setAttribute("color", "#0047AB");
    top.setAttribute("depth", "5");
    top.setAttribute("height", "1.5");
    top.setAttribute("width", "2.5");
    top.setAttribute("position", "0 1 0");
    this.obj.append(top);

    let wheel1 = document.createElement("a-cylinder");
    wheel1.setAttribute("color", "black");
    wheel1.setAttribute("radius", ".8");
    wheel1.setAttribute("height", ".5");
    wheel1.setAttribute("rotation", "90 90 0");
    wheel1.setAttribute("position", "-1.25 0.5 -1");
    this.obj.append(wheel1);

    let wheel2 = document.createElement("a-cylinder");
    wheel2.setAttribute("color", "black");
    wheel2.setAttribute("radius", ".8");
    wheel2.setAttribute("height", ".5");
    wheel2.setAttribute("rotation", "90 90 0");
    wheel2.setAttribute("position", "-1.25 0.5 1");
    this.obj.append(wheel2);

    let wheel3 = document.createElement("a-cylinder");
    wheel3.setAttribute("color", "black");
    wheel3.setAttribute("radius", ".8");
    wheel3.setAttribute("height", ".5");
    wheel3.setAttribute("rotation", "90 90 0");
    wheel3.setAttribute("position", "1.25 0.5 -1");
    this.obj.append(wheel3);

    let wheel4 = document.createElement("a-cylinder");
    wheel4.setAttribute("color", "black");
    wheel4.setAttribute("radius", ".8");
    wheel4.setAttribute("height", ".5");
    wheel4.setAttribute("rotation", "90 90 0");
    wheel4.setAttribute("position", "1.25 0.5 1");
    this.obj.append(wheel4);

    let hub1 = document.createElement("a-sphere");
    hub1.setAttribute("color", "#d9d9d9");
    hub1.setAttribute("radius", ".5");
    hub1.setAttribute("position", "-1.25 0.5 -1");
    this.obj.append(hub1);

    let hub2 = document.createElement("a-sphere");
    hub2.setAttribute("color", "#d9d9d9");
    hub2.setAttribute("radius", ".5");
    hub2.setAttribute("position", "-1.25 0.5 1");
    this.obj.append(hub2);

    let hub3 = document.createElement("a-sphere");
    hub3.setAttribute("color", "#d9d9d9");
    hub3.setAttribute("radius", ".5");
    hub3.setAttribute("position", "1.25 0.5 -1");
    this.obj.append(hub3);

    let hub4 = document.createElement("a-sphere");
    hub4.setAttribute("color", "#d9d9d9");
    hub4.setAttribute("radius", ".5");
    hub4.setAttribute("position", "1.25 0.5 1");
    this.obj.append(hub4);

    let windshield = document.createElement("a-plane");
    windshield.setAttribute("color", "skyblue");
    windshield.setAttribute("opacity", ".6");
    windshield.setAttribute("width", "2");
    windshield.setAttribute("height", "1");
    windshield.setAttribute("position", "0 2 2");
    windshield.setAttribute("rotation", "-60 0 0");
    this.obj.append(windshield);

    let backglass = document.createElement("a-plane");
    backglass.setAttribute("color", "skyblue");
    backglass.setAttribute("opacity", ".6");
    backglass.setAttribute("width", "2");
    backglass.setAttribute("height", "1");
    backglass.setAttribute("position", "0 2 -2.10");
    backglass.setAttribute("rotation", "60 0 0");
    this.obj.append(backglass);

    let light1 = document.createElement("a-sphere");
    light1.setAttribute("color", "yellow");
    light1.setAttribute("radius", ".4");
    light1.setAttribute("position", ".5 .95 2.50");
    this.obj.append(light1);

    let light2 = document.createElement("a-sphere");
    light2.setAttribute("color", "yellow");
    light2.setAttribute("radius", ".4");
    light2.setAttribute("position", "-.5 .95 2.50");
    this.obj.append(light2);

    scene.append(this.obj);
  }
  move(){
    this.z -= this.speed;
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}