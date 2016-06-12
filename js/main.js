var area, tank;

function startGame() {
  area = new Area(20, 15);
  area.create();
  tank = new Tank(area, 100, 100);
  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
}