var Tank = function(area, _initX, _initY) {
  var ctx = area.context;
  var x = _initX;
  var y = _initY;
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

    moveAndDrawBullets();
  }

  function moveAndDrawBullets() {
    for(var n in bullets) {
      if (bullets[n].dir === 0) bullets[n].y-=2;
      else if (bullets[n].dir === 1) bullets[n].x+=2;
      else if (bullets[n].dir === 2) bullets[n].y+=2;
      else if (bullets[n].dir === 3) bullets[n].x-=2;
      ctx.beginPath();
      ctx.arc(bullets[n].x, bullets[n].y, 2, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
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
    bullets.push({x: bX, y: bY, dir: direction});
    disableFire = true;
    setTimeout(function() {disableFire = false}, 500);
  }

  function addListeners() {
    var pressedKeys = [];
    var moveInterval = setInterval(function() {
      if (pressedKeys[0] === 37) {x--; direction = 3;}
      else if (pressedKeys[0] === 38) {y--; direction = 0;}
      else if (pressedKeys[0] === 39) {x++; direction = 1;}
      else if (pressedKeys[0] === 40) {y++; direction = 2;}
    }, 20);
    function pressedId(key) {
      for(var n in pressedKeys) {
        if(key === pressedKeys[n])
          return n;
      }
      return null;
    }
    function add(key) {
      pressedKeys[0] = key;
    }
    
    $(document).keydown(function(e){
      if(pressedId(e.keyCode))
        return;
        
      if (e.keyCode === 37) add(e.keyCode);
      if (e.keyCode === 38) add(e.keyCode);
      if (e.keyCode === 39) add(e.keyCode);
      if (e.keyCode === 40) add(e.keyCode);
      //space
      if (e.keyCode === 32) fire();
    });

    $(document).keyup(function(e){
      var pressed = pressedId(e.keyCode);
      if(pressed && pressed > -1)
        pressedKeys.splice(pressed, 1);
    });
  }
}