var readlineSync = require('readline-sync');

var Game = function() {
  this.board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];
  this.gameOver = false;
};

Game.prototype = {
  printBoard: function() {
    this.board.forEach(function(row) {
      console.log(row);
    });
  },

  checkWinHorizontal: function() {
    for (var idx = 0; idx <= 2; idx++) {
      var row = this.board[idx];
      if (row[0] === row[1] && row[1] === row[2]) {
        return row[0] === '-' ? null :
          row[0] === 'X' ? 'X wins' :
          'O wins';
      }
    }
  },

  checkWinVertical: function() {
    for (var idx = 0; idx <= 2; idx++) {
      if (this.board[0][idx] === this.board[1][idx] && 
        this.board[1][idx] === this.board[2][idx]) {
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
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
    this.gameOver = false;

    while (!this.gameOver) {
      if (this.checkWin()) {
        this.gameOver = true;
        break;
      } else {
        this.printBoard();
        this.promptPlayer1();
        if (this.checkWin()) { 
          console.log('X wins!');
          console.log('Final game board');
          console.log(this.printBoard());
          this.gameOver = true;
          break;
        }
        this.printBoard();
        this.promptPlayer2();
        if (this.checkWin()) { 
          console.log('O wins!');
          console.log('Final game board');
          console.log(this.printBoard());
          this.gameOver = true;
          break;
        }
      }
    }
  },

  promptPlayer1: function() {
    var pos = readlineSync.question('Player 1: You are [X], where would you like to place your piece? Input accepted: row, col');

    if (pos.split(',').length !== 2) {
      console.log('Please enter input "row, col"!');
      this.promptPlayer1();
    }

    var row = pos.split(',')[0];
    var col = pos.split(',')[1];

    if (row >= 3 || row < 0 || col >= 3 || col < 0) {
      console.log('Invalid input, please specify a row/col between 0 and 2');
      this.promptPlayer1();
    } else {
      this.board[row][col] = 'X';
      console.log('Successfully placed your piece!');
    }
  },

  promptPlayer2: function() {
    var pos = readlineSync.question('Player 2: You are [O], where would you like to place your piece? Input accepted: row, col');

    if (pos.split(',').length !== 2) {
      console.log('Please enter input "row, col"!');
      this.promptPlayer2();
    }

    var row = pos.split(',')[0];
    var col = pos.split(',')[1];

    if (row >= 3 || row < 0 || col >= 3 || col < 0) {
      console.log('Invalid input, please specify a row/col between 0 and 2');
      this.promptPlayer2();
    } else {
      this.board[row][col] = 'O';
      console.log('Successfully placed your piece!');
    }
  }
};

module.exports = Game;
