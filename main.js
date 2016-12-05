var Game = function() {
  this.board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];
};

Game.prototype = {
  printBoard: function() {
    this.board.forEach(function(row) {
      console.log(row);
    });
  }
};