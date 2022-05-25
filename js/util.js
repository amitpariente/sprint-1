'use strict'
function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            strHTML += `<td data-i="${i}" data-j="${j}" oncontextmenu="createFlag(this,event)" onclick="cellClicked(this,${i} ,${j})" ></td>`;
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
        for (var j = 0; j <board[0].length; j++) {
            var cell = board[i][j]
            if (cell.isMine===false) {
                embtyCells.push({ i, j })
            }
        }
    }
    return embtyCells
}