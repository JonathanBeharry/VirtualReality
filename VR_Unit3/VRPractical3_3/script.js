let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0, hud = null;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  spawnEnemies();
  spawnAmmoBoxes();

  hud = document.createElement('a-entity');
  hud.setAttribute('text', { value: `Ammo: ${ammo_count}  Kills: ${enemy_killed}`, align: 'left', color: 'white', width: 4 });
  hud.setAttribute('position', { x: -0.6, y: -0.4, z: -1 });
  camera.append(hud);

  window.addEventListener("keydown",function(e){
  
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })
  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function spawnEnemies() {
  
  const enemyPositions = [
    { x: -8, y: 2, z: -5 },
    { x: 8, y: 3, z: -8 },
    { x: 0, y: 2.5, z: -12 },
    { x: -12, y: 4, z: -6 },
    { x: 10, y: 2, z: -10 },
    { x: -5, y: 3.5, z: -15 },
    { x: 5, y: 2.5, z: -7 }
  ];
  
  enemyPositions.forEach(pos => {
    enemies.push(new Enemy(pos.x, pos.y, pos.z));
  });
}

function loop(){
  if(bullet){
    bullet.fire();

    enemies.forEach((enemy) => {
      if (!enemy.isAlive) return;
      
      let d = distance(bullet.obj, enemy.obj);
 
      if (d < 1.5) {
        
        enemy.isAlive = false;
        if (enemy.obj && enemy.obj.parentNode) enemy.obj.parentNode.removeChild(enemy.obj);
        if (enemy.indicator && enemy.indicator.parentNode) enemy.indicator.parentNode.removeChild(enemy.indicator);


        enemy_killed++;
        ammo_count = Math.max(0, ammo_count - 1);

        // remove the bullet after hit
        if (bullet.obj && bullet.obj.parentNode) bullet.obj.parentNode.removeChild(bullet.obj);
        bullet = null;
      }
    });
  }
  
  // Update all enemies
  enemies.forEach(enemy => {
    enemy.update();
  });

  // Check for ammo box pickups (camera near a box)
  ammo_boxes.forEach((box) => {
    if (!box.taken && distance(camera, box.el) < 2) {
      box.taken = true;
      // replenish ammo (give a small pack)
      ammo_count += 3;
      console.log("Picked up ammo. Ammo now:", ammo_count);
      // remove from scene
      box.el.parentNode.removeChild(box.el);
    }
  });

  // update HUD text
  if (hud) {
    hud.setAttribute('text', { value: `Ammo: ${ammo_count}  Kills: ${enemy_killed}`, align: 'left', color: 'white', width: 4 });
  }

  window.requestAnimationFrame(loop);
}

function spawnAmmoBoxes(){
  
  const positions = [
    { x: -6, y: 1, z: -6 },
    { x: 6, y: 1, z: -9 },
    { x: 0, y: 1, z: -14 },
    { x: -10, y: 1, z: -4 },
    { x: 10, y: 1, z: -12 }
  ];

  positions.forEach(pos => {
    let el = document.createElement('a-box');
    el.setAttribute('width', 1);
    el.setAttribute('depth', 1);
    el.setAttribute('height', 1);
    el.setAttribute('color', 'yellow');
    el.setAttribute('position', { x: pos.x, y: pos.y, z: pos.z });
    el.setAttribute('rotation', { x: 0, y: 45, z: 0 });
    scene.append(el);
    ammo_boxes.push({ el: el, taken: false });
  });
}

function countdown(){

  setTimeout(countdown,1000);
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