var Tank = function(ctx, _x, _y) {
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
    ctx.scale(0.2,0.2);
    drawLeftSlide();
    drawRightSlide();
    drawBody();
    ctx.drawImage(images["gun"], x, y);
    ctx.restore();
  }
  
  function loadImage(name) {
    images[name] = new Image();
    images[name].src = "images/" + name + ".png";
  }

  loadImage("lslide");
  loadImage("rslide");
  loadImage("body");
  loadImage("gun");

  
  function drawLeftSlide() {
    ctx.drawImage(images["lslide"], x, y);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(88, 180+n*20-slides, 48, 1);
    }
  }

  function drawRightSlide() {
    ctx.drawImage(images["rslide"], x+6, y);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(300, 180+n*20-slides, 48, 1);
    }
  }

  function drawBody() {
    ctx.drawImage(images["body"], x, y-neutral);
  }
}