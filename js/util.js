'use strict'
function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            strHTML += `<td data-i="${i}" data-j="${j}" oncontextmenu="createFlag(this,${i},${j},event)" onclick="cellClicked(this,${i} ,${j})" ></td>`;
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


function renderCell(i, j, value) {
    var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    elCell.innerText = value;
    return elCell;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)

}

function getEmptyCells(board) {
    var embtyCells = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j]
            if (cell.isMine === false) {
                embtyCells.push({ i, j })
            }
        }
    }
    return embtyCells
}

function checkWin() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            if (cell.isMine === true && cell.isShown === true) continue
            if (cell.isMine === false && cell.isShown === false) return
            if (cell.isMine === true && cell.isMarked === false) return
            if (cell.isMine === false && cell.isMarked === true) return

        }
    }
    winner()
}

function setTimer(time) {
    var timeFixed = Math.floor(time)
    var timeStr = timeFixed + ''
    for (var i = 0; i < timeStr.length; i++) {
        if (timeStr.length === 1) {
            var timer = '00' + timeStr
        }
        if (timeStr.length === 2) {
            var timer = '0' + timeStr
        }
        if (timeStr.length >= 3) {
            var timer = timeStr
        }
    }
    return timer
}