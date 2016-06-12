var Tank = function(main, _initX, _initY) {
  var area = main.area;
  var bulletService = main.bulletService;
  var ctx = area.context;
  var x = _initX + 16;
  var y = _initY + 16;
  var direction = 0;  //0 - top, 1 - right, 2 - bottom, 3 - left
  var bullets = [];   //{x: 1, y: 1, dir: 0}

  var image = new Image();
  image.src = "images/tank.png";
  addListeners();

  //exports
  this.update = function(){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(90*direction*Math.PI/180);
    ctx.drawImage(image, -(image.width/2), -(image.height/2));
    ctx.restore();
  }

  var disableFire = false;
  function fire() {
    if(disableFire)
      return;

    var bX = x, bY = y;
    if(direction === 0) bY-=15;
    else if(direction === 1) bX+=15;
    else if(direction === 2) bY+=15;
    else if(direction === 3) bX-=15;
    bulletService.addBullet(bX, bY, direction);
    disableFire = true;
    setTimeout(function() {disableFire = false}, 500);
  }

  function addListeners() {
    var pressedKey = null;
    var moveInterval = setInterval(function() {
      if (pressedKey === 37) {x--; direction = 3;}
      else if (pressedKey === 38) {y--; direction = 0;}
      else if (pressedKey === 39) {x++; direction = 1;}
      else if (pressedKey === 40) {y++; direction = 2;}
    }, 20);
    
    $(document).keydown(function(e){
      if(pressedKey === e.keyCode)
        return;
        
      if (e.keyCode === 37) pressedKey = e.keyCode;
      if (e.keyCode === 38) pressedKey = e.keyCode;
      if (e.keyCode === 39) pressedKey = e.keyCode;
      if (e.keyCode === 40) pressedKey = e.keyCode;
      //space
      if (e.keyCode === 32) fire();
    });

    $(document).keyup(function(e){
      if(pressedKey === e.keyCode) {
        pressedKey = null;
      }
    });
  }
}