var assert = require('assert');
var app = require('../main');
console.log(app);

describe('Tic Tac Toe', function() {
  describe('Game Logic ', function() {
    it('Should detect horizontal wins', function() {
      var game = new app();
      game.board[0][0] = 'X';
      game.board[0][1] = 'X';
      game.board[0][2] = 'X';
      assert.equal('X wins', game.checkWin());
    });

    it('Should detect vertical wins', function() {
      var game = new app();
      game.board[0][0] = 'X';
      game.board[1][0] = 'X';
      game.board[2][0] = 'X';
      assert.equal('X wins', game.checkWin());
    });

    it('Should detect diagonal wins', function() {
      var game = new app();
      game.board[0][0] = 'X';
      game.board[1][1] = 'X';
      game.board[2][2] = 'X';
      assert.equal('X wins', game.checkWin());
    })
  });
});