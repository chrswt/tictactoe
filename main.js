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
  },

  checkWinHorizontal: function() {
    this.board.forEach(function(row) {
      if (row[0] === row[1] === row[2]) {
        return row[0] === '-' ? null :
          row[0] === 'X' ? 'X wins' :
          'O wins';
      }
    })
  },

  
};

