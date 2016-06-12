var BulletService = function(area) {
  var ctx = area.context;
  var bullets = [];   //{x: 1, y: 1, dir: 0}

  function drawBullet(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  this.moveAndDrawBullets = function() {
    for(var n in bullets) {
      if (bullets[n].dir === 0) bullets[n].y-=2;
      else if (bullets[n].dir === 1) bullets[n].x+=2;
      else if (bullets[n].dir === 2) bullets[n].y+=2;
      else if (bullets[n].dir === 3) bullets[n].x-=2;

      drawBullet(bullets[n].x, bullets[n].y);
      if(!area.canMove(bullets[n].x, bullets[n].y, 2, 2, bullets[n].dir))
        bullets.splice(n, 1);
    }
  }

  this.addBullet = function(x, y, dir) {
    bullets.push({x: x, y: y, dir: dir});
  }
}