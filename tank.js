var Tank = function(ctx, x, y) {
  this.strokeColor = 'black';
  this.fillColor = 'white';
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx.scale(2,2);
    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.fillColor;
    drawLeftSlide();
    drawRightSlide();
    drawBody();
    drawGun();
    drawTower();
    ctx.scale(0.5,0.5);
  }
  
  function drawLeftSlide() {
    ctx.sRect(x, y+10, 24, 126);
    ctx.sRect(x, y+20, 24, 0);
    ctx.sRect(x, y+126, 24, 0);
  }
  function drawRightSlide() {
    ctx.sRect(x+76, y+10, 24, 126);
    ctx.sRect(x+76, y+20, 24, 0);
    ctx.sRect(x+76, y+126, 24, 0);
  }
  function drawBody() {
    ctx.sRect(x+24, y+34, 52, 86);
    ctx.sRect(x+30, y+120, 10, 4);
    ctx.sRect(x+60, y+120, 10, 4);
  }
  function drawTower() {
    ctx.beginPath();
    ctx.lineWidth = 2;
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
    ctx.lineWidth = 1;
    ctx.sRect(x+28, y+58, 44, 44);
  }
  function drawGun() {
    ctx.beginPath();
    ctx.dRect(x+46, y-16, 10, 66);
    ctx.dRect(x+38, y-26, 26, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}