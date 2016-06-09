var Tank = function(area, _initX, _initY) {
  var ctx = area.context;
  var x = _initX;
  var y = _initY;
  var images = {};
  var direction = 0; //0 - top, 1 - right, 2 - bottom, 3 - left

  //animation
  var neutral = 0;
  var slides = 0;
  var neutralInterval = setInterval(function() {
    neutral = (neutral > 0) ? 0 : 2;
    if(slides >= 20)
      slides = 0
    else
      slides+=5;
  }, 100);

  loadImage("lslide");
  loadImage("rslide");
  loadImage("body");
  loadImage("gun");
  addListeners();

  //exports
  this.update = function(){
    ctx.save();
    ctx.lineWidth = 2;
    ctx.scale(0.2,0.2);
    ctx.translate(x, y);
    ctx.translate(200, 250);
    ctx.rotate(90*direction*Math.PI/180);
    drawLeftSlide();
    drawRightSlide();
    drawBody();
    drawGun()
    ctx.restore();
  }

  //methods
  function loadImage(name) {
    images[name] = new Image();
    images[name].src = "images/" + name + ".png";
  }
  function drawLeftSlide() {
    ctx.drawImage(images["lslide"], -x-200, -y-250);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(-x+78-200, -y+170+n*20-slides-250, 48, 1);
    }
  }
  function drawRightSlide() {
    ctx.drawImage(images["rslide"], -x-200-6, -y-250);
    for(var n = 0; n < 17; n++) {
      ctx.sRect(-x+280-200, -y+170+n*20-slides-250, 48, 1);
    }
  }
  function drawBody() {
    ctx.drawImage(images["body"], -x-200, -y-250+neutral);
  }
  function drawGun() {
    ctx.drawImage(images["gun"], -x-200, -y-250);
  }
  function addListeners() {
    $(document).keydown(function(e){
      if (e.keyCode == 37) { 
        direction = 3;
        //y-=10;
      }
      if (e.keyCode == 38) { 
        direction = 0;
        //y-=10;
      }
      if (e.keyCode == 39) { 
        direction = 1;
        x+=10;
      }
      if (e.keyCode == 40) { 
        direction = 2;
        //y-=10;
      }
    });
  }
}