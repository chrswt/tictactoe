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

  checkWinVertical: function() {
    this.board.forEach(function(col, idx) {
      if (this.board[idx][0] === this.board[idx][1] === this.board[idx][2]) {
        return this.board[idx][0] === '-' ? null :
          this.board[idx][0] === 'X' ? 'X wins' :
          'O wins';
      }
    });
  }
};

