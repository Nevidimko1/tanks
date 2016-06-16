var Enemy = function(main, _initX, _initY) {
  var area = main.area;
  var bulletService = main.bulletService;
  var ctx = area.context;
  var x = _initX
  var y = _initY;
  var direction = 2;  //0 - top, 1 - right, 2 - bottom, 3 - left
  var bullets = [];   //{x: 1, y: 1, dir: 0}

  this.getX = function() {return x;};
  this.getY = function() {return y;};

  var image = new Image();
  image.src = "images/enemy.png";
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
  
  function round(n) {
    var diff = n % area.cellSize;
    var result = n - diff;
    if(diff >= area.cellSize/2)
      result+=area.cellSize;
    return result;
  }

  function changeDirection() {
    direction = Math.floor(Math.random() * 4);
  }

  function addListeners() {
    var moveInterval = setInterval(function() {
      if (direction === 3) {
        if(area.canMove(x-1, y+4, image.width, image.height-8, direction)) x--; 
        else {x = round(x); changeDirection();}
      } else if (direction === 0) {
        if(area.canMove(x+4, y-1, image.width-8, image.height, direction)) y--; 
        else {y = round(y); changeDirection();}
      } else if (direction === 1) {
        if(area.canMove(x+1, y+4, image.width, image.height-8, direction)) x++; 
        else {x = round(x); changeDirection();}
      } else if (direction === 2) {
        if(area.canMove(x+4, y+1, image.width-8, image.height, direction)) y++; 
        else {y = round(y); changeDirection();}
      }
    }, 10);
  }
}