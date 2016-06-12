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
  this.canMove = function(x, y, w, h, d) {
    if(y < 0) return false;
    else if(x + w > canvas.width) return false;
    else if(y + h > canvas.height) return false;
    else if(x < 0) return false;
    else if(intersectsWithObject(x, y, w, h)) return false;
    return true;
  }
  this.canMoveUp = function(x, y, w, h) {
    var result = true;
    if(y < 0)
      result = false;
    if(intersectsWithObject(x, y, w, h))
      result = false;
    return result;
  }
  this.canMoveRight = function(x, y, w, h) {
    var result = true;
    if(x + w > canvas.width)
      result = false;
    if(intersectsWithObject(x, y, w, h))
      result = false;
    return result;
  }
  this.canMoveDown = function(x, y, w, h) {
    var result = true;
    if(y + h > canvas.height)
      result = false;
    if(intersectsWithObject(x, y, w, h))
      result = false;
    return result;
  }
  this.canMoveLeft = function(x, y, w, h) {
    var result = true;
    if(x < 0)
      result = false;
    if(intersectsWithObject(x, y, w, h))
      result = false;
    return result;
  }

  function intersectsWithObject(x, y, w, h, d) {
    var result = false;
    for(var n in objects) {
      var o = objects[n];
      if (x <= (o.x + o.w - 1) && 
          (x + w) >=  o.x + 1  && 
          y <= (o.y + o.h - 1) &&
          (y + h) >=  o.y + 1)
        return true;
    }
    return false;
  }

  //objects on the map
  var objects = [{x:96, y: 0, w: 32, h: 32}, {x:64, y: 32, w: 32, h: 32}, {x:32, y: 64, w: 32, h: 32}, {x:0, y: 96, w: 32, h: 32}];
  this.drawObjects = function() {
    for(var n in objects) {
      var o = objects[n];
      this.context.sRect(o.x, o.y, o.w, o.h);
    }
  }
}