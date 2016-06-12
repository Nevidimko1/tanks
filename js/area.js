var Area = function(width, height) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute('id', 'canvas');
  canvas.width = width*32;
  canvas.height = height*32;
  this.context = canvas.getContext("2d");
  this.context.sRect = function(x,y,w,h) {
    x=parseInt(x)+0.50;
    y=parseInt(y)+0.50;
    this.strokeRect(x,y,w,h);
  }
  this.context.fRect=function(x,y,w,h){
    x=parseInt(x);
    y=parseInt(y);
    this.fillRect(x,y,w,h);
  }
  this.context.dRect=function(x,y,w,h){
    x=parseInt(x)+0.50;
    y=parseInt(y)+0.50;
    this.rect(x,y,w,h);
  }
  document.body.insertBefore(canvas, document.body.childNodes[0]);

  this.start = function() {
    this.interval = setInterval(updateGameArea, 20);
  };
  this.clear = function() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
  };

  //check navigation
  this.canMoveUp = function(x, y, width, height) {
    var result = true;
    if(y <= 0)
      result = false;
    return result;
  }
  this.canMoveRight = function(x, y, width, height) {
    var result = true;
    if(x + width >= canvas.width)
      result = false;
    return result;
  }
  this.canMoveDown = function(x, y, width, height) {
    var result = true;
    if(y + height >= canvas.height)
      result = false;
    return result;
  }
  this.canMoveLeft = function(x, y, width, height) {
    var result = true;
    if(x <= 0)
      result = false;
    return result;
  }
}