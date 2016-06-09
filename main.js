var area, tank;

function startGame() {
  area = new Area();
  area.create();
  tank = new Tank(area, 10, 10);
  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
}