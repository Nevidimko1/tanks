var area, tank, bulletService;

function startGame() {
  area = new Area(20, 15);
  bulletService = new BulletService(area);

  tank = new Tank(this, area.playerPosition.x, area.playerPosition.y);
  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
  area.drawObjects();
  bulletService.moveAndDrawBullets();
}