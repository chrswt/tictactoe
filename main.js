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
  },

  checkWinDiagonal: function() {
    if (this.board[0][0] === this.board[1][1] === this.board[2][2]) {
      return this.board[0][0] === '-' ? null :
        this.board[0][0] === 'X' ? 'X wins' :
        'O wins';
    } else if (this.board[0][2] === this.board[1][1] === this.board[2][0]) {
      return this.board[0][2] === '-' ? null :
        this.board[0][2] === 'X' ? 'X wins' :
        'O wins';
    }
  },
};

