let maze = [
  "----T----------xxxxxx---",
  "-o------o------x-----x----",
  "------------x-----x-----",
  "-----o------x-----x-----T-",
  "-o-------o--x-----x-------",
  "---ooooo------x-----x-----T---",
  "--------x-----x---------",
  "-------x-----x----------",
  "----T--x-----x------T-----",
  "-----x-----x------------",
  "----x-----x-----------T--",
  "---xxxxxxx------TT--------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})