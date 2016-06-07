var Tank = function(ctx, _x, _y) {
  var strokeColor = 'black';
  var fillColor = 'white';
  var x = _x;
  var y = _y;
  var images = {};

  var neutral = 0;
  var slides = 0;
  var neutralInterval = setInterval(function() {
    neutral = (neutral > 0) ? 0 : 2;
    if(slides > 20)
      slides = 0
    else
      slides+=5;
  }, 100);

  this.update = function(){
    ctx.save();
    ctx.lineWidth = 2;
    ctx.scale(0.5,0.5);
    drawLeftSlide();
    drawRightSlide();
    ctx.drawImage(images["body"], x, y-neutral);
    ctx.drawImage(images["gun2"], x, y);
    ctx.restore();
  }
  
  function loadImage(name) {
    images[name] = new Image();
    images[name].src = "images/" + name + ".png";
  }

  loadImage("lslide");
  loadImage("rslide");
  loadImage("body");
  loadImage("gun2");

  
  function drawLeftSlide() {
    ctx.drawImage(images["lslide"], x, y);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(88, 180+n*20-slides, 48, 1);
    }
  }

  function drawRightSlide() {
    ctx.drawImage(images["rslide"], x, y);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(294, 180+n*20-slides, 48, 1);
    }
  }
}