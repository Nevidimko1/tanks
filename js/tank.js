var Tank = function(main, _initX, _initY) {
  var area = main.area;
  var bulletService = main.bulletService;
  var ctx = area.context;
  var x = _initX
  var y = _initY;
  var direction = 0;  //0 - top, 1 - right, 2 - bottom, 3 - left
  var bullets = [];   //{x: 1, y: 1, dir: 0}

  var image = new Image();
  image.src = "images/tank.png";
  addListeners();

  //exports
  this.update = function(){
    ctx.save();
    ctx.translate(x+image.width/2, y+image.height/2);
    ctx.rotate(90*direction*Math.PI/180);
    ctx.drawImage(image, -(image.width/2), -(image.height/2));
    ctx.restore();
  }

  var disableFire = false;
  function fire() {
    if(disableFire)
      return;

    var bX = x, bY = y;
    if(direction === 0) bX+=image.width/2;
    else if(direction === 1) {bX+=image.width; bY+=image.height/2;}
    else if(direction === 2) {bX+=image.width/2; bY+=image.height;}
    else if(direction === 3) bY+=image.height/2;
    bulletService.addBullet(bX, bY, direction);
    disableFire = true;
    setTimeout(function() {disableFire = false}, 500);
  }

  function addListeners() {
    var pressedKey = null;
    var moveInterval = setInterval(function() {
      if (pressedKey === 37) {
        if(area.canMove(x-1, y, image.width, image.height, 3)) x--; 
        direction = 3;
      } else if (pressedKey === 38) {
        if(area.canMove(x, y-1, image.width, image.height, 0)) y--; 
        direction = 0;
      } else if (pressedKey === 39) {
        if(area.canMove(x+1, y, image.width, image.height, 1)) x++; 
        direction = 1;
      } else if (pressedKey === 40) {
        if(area.canMove(x, y+1, image.width, image.height, 2)) y++; 
        direction = 2;
      }
    }, 20);
    
    $(document).keydown(function(e){
      if(pressedKey === e.keyCode)
        return;
      
      if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40)
        pressedKey = e.keyCode;
      
      if (e.keyCode === 32) fire();
    });

    $(document).keyup(function(e){
      if(pressedKey === e.keyCode) {
        pressedKey = null;
      }
    });
  }
}