var area, tank, enemies = [], bulletService;

function startGame() {
  area = new Area(this, 20, 15);
  bulletService = new BulletService(area);

  tank = new Tank(this, area.playerPosition.x, area.playerPosition.y);

  for(var n in area.enemySpawners)
    enemies.push(new Enemy(this, area.enemySpawners[n].x, area.enemySpawners[n].y));

  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
  for(var n in enemies) {
    if(bulletService.intersectsWithObject(enemies[n].getX(), enemies[n].getY(), 32, 32))
      enemies.splice(n, 1);
    else
      enemies[n].update();
  }
  area.drawObjects();
  bulletService.moveAndDrawBullets();
}