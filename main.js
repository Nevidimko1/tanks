var tank;

var area = {
  canvas : document.createElement("canvas"),
  create : function() {
    this.canvas.setAttribute('id', 'canvas');
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  start : function() {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function startGame() {
  area.create();
  tank = new Tank(area.context, 10, 50);
  area.start();
}

function updateGameArea() {
  area.clear();       
  tank.update();
}