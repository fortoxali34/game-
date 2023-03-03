var board = ['','','','','','','','',''];
var turn = 'X';
var message = document.getElementById('message');

function markSquare(square) {
  if (board[square.id] == '') {
    square.innerHTML = turn;
    board[square.id] = turn;
    if (checkWin()) {
      message.innerHTML = turn + " wins!";
      disableBoard();
    } else if (checkTie()) {
      message.innerHTML = "It's a tie!";
      disableBoard();
    } else {
      turn = turn == 'X' ? 'O' : 'X';
      message.innerHTML = "It's " + turn + "'s turn";
    }
  }
}

function checkWin() {
  return checkRows() || checkColumns() || checkDiagonals();
}

function checkRows() {
  for (var i = 0; i < 9; i += 3) {
    if (board[i] != '' && board[i] == board[i+1] && board[i+1] == board[i+2]) {
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (var i = 0; i < 3; i++) {
    if (board[i] != '' && board[i] == board[i+3] && board[i+3] == board[i+6]) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  return (board[0] != '' && board[0] == board[4] && board[4] == board[8]) ||
         (board[2] != '' && board[2] == board[4] && board[4] == board[6]);
}


