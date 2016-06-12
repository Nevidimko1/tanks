var area, tank, bulletService;

function startGame() {
  area = new Area(20, 15);
  bulletService = new BulletService(area);

  tank = new Tank(this, 0, 0);
  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
  area.drawObjects();
  bulletService.moveAndDrawBullets();
}