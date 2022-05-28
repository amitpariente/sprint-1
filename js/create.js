'use strict'

function createFlag(elCell, i, j, ev) {
    ev.preventDefault()
    console.log(elCell);
    var isflag = gBoard[i][j].isMarked
    if (!isflag) {
        elCell.innerHTML = RED_FLAG
        gBoard[i][j].isMarked = true
        checkWin()


    } else if (isflag) {
        elCell.innerHTML = ''
        gBoard[i][j].isMarked = false
    }
    return false
}

function createMine(board) {
    var emptyCells = getEmptyCells(board)
    var index = getRandomInt(0, emptyCells.length)
    console.log(emptyCells[index]);
    // model
    board[emptyCells[index].i][emptyCells[index].j].isMine = true

    // dom
    // renderCell(emptyCells[index].i,emptyCells[index].j, MINE)
}

function createMines(board) {
    for (var i = 0; i < gLevel.MINES; i++) {
        createMine(board)
    }
}

function updateLives() {
    var strLives=''
    for (var i = 0; i < gLives; i++) {
        strLives += LIVE
    }
    var elLives = document.querySelector('.lives')
    elLives.innerText = strLives
}

