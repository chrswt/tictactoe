var rl = require('readline');

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
      if (row[0] === row[1] && row[1] === row[2]) {
        return row[0] === '-' ? null :
          row[0] === 'X' ? 'X wins' :
          'O wins';
      }
    })
  },

  checkWinVertical: function() {
    for (var idx = 0; idx <= 2; idx++) {
      if (this.board[idx][0] === this.board[idx][1] && 
        this.board[idx][1] === this.board[idx][2]) {
        return this.board[idx][0] === '-' ? null :
          this.board[idx][0] === 'X' ? 'X wins' :
          'O wins';
      }
    }
  },

  checkWinDiagonal: function() {
    if (this.board[0][0] === this.board[1][1] && 
      this.board[1][1] === this.board[2][2]) {
      return this.board[0][0] === '-' ? null :
        this.board[0][0] === 'X' ? 'X wins' :
        'O wins';
    } else if (this.board[0][2] === this.board[1][1] 
      && this.board[1][1]=== this.board[2][0]) {
      return this.board[0][2] === '-' ? null :
        this.board[0][2] === 'X' ? 'X wins' :
        'O wins';
    }
  },

  checkWin: function() {
    return this.checkWinHorizontal() || this.checkWinVertical() || this.checkWinDiagonal();
  },

  placePiece: function(row, col, piece) {
    if (this.board[row][col] !== '-') {
      return false;
    } else {
      this.board[row][col] = piece;
      return true;
    }
  },

  start: function() {

  },

  promptPlayer1: function() {
    var read = rl.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    read.question('Player 1: You are [X], where would you like to place your piece? Input accepted: row, col', function(rowCol) {
      var row = rowCol.split(',')[0];
      var col = rowCol.split(',')[1];

      if (row >= 3 || row < 0 || col >= 3 || col < 0) {
        console.log('Invalid input, please specify a row/col between 0 and 2');
      } else {
        read.close();
        console.log('Successfully placed your piece!');
      }
    })
  },

  promptPlayer2: function() {

  }
};

var game = new Game();
game.start();
