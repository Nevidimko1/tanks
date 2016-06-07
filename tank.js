var Tank = function(ctx, x, y) {
  this.strokeColor = 'black';
  this.fillColor = 'white';
  this.x = x;
  this.y = y;
  this.update = function(){
    //ctx.scale(0.5,0.5);
    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.fillColor;
    //ctx.lineWidth = 2;
    drawLeftSlide();
    drawRightSlide();
    drawBody();
    drawGun();
    drawTower();
    //ctx.scale(2,2);
  }
  
  function drawLeftSlide() {
    ctx.strokeRect(x, y+10, 24, 126);
    ctx.strokeRect(x, y+20, 24, 0);
    ctx.strokeRect(x, y+126, 24, 0);
  }
  function drawRightSlide() {
    ctx.strokeRect(x+76, y+10, 24, 126);
    ctx.strokeRect(x+76, y+20, 24, 0);
    ctx.strokeRect(x+76, y+126, 24, 0);
  }
  function drawBody() {
    ctx.strokeRect(x+24, y+34, 52, 86);
    ctx.strokeRect(x+30, y+120, 10, 4);
    ctx.strokeRect(x+60, y+120, 10, 4);
  }
  function drawTower() {
    ctx.beginPath();
    ctx.moveTo(x+20,y+66);
    ctx.lineTo(x+36,y+50);
    ctx.lineTo(x+64,y+50);
    ctx.lineTo(x+80,y+66);
    ctx.lineTo(x+80,y+94);
    ctx.lineTo(x+64,y+110);
    ctx.lineTo(x+36,y+110);
    ctx.lineTo(x+20,y+94);
    ctx.lineTo(x+20,y+66);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.strokeRect(x+28, y+58, 44, 44);
  }
  function drawGun() {
    ctx.beginPath();
    ctx.rect(x+46, y-16, 10, 66);
    ctx.rect(x+38, y-26, 26, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}