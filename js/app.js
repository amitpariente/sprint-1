'use strict'

var gBoard
const MINE = '💣'
const RED_FLAG = '🚩'
var isflag = false
var gStartTime
var gIntervalId
var gLevel = {
    SIZE: 4,
    MINES: 2
}


function init() {

    gBoard = buildBoard()
    renderBoard(gBoard)
    createMines(gBoard)
    console.table(gBoard);
    updateSetMinesNegsCount()


}

function buildBoard() {
    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board[i] = []
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = { minesAroundCount: setMinesNegsCount(i, j, board), isShown: false, isMine: false, isMarked: false }

        }
    }
    return board
}


function setMinesNegsCount(cellI, cellJ, board) {
    var minesAroundCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= board[i].length) continue;
            if (board[i][j].isMine === true) minesAroundCount++;
        }
    }
    return minesAroundCount
}


// CELL
// { minesAroundCount: setMinesNegsCount(i,j,board),
//      isShown: true,
//       isMine: false, 
//       isMarked: true }

function cellClicked(elCell, cellI, cellJ) {
    // startTimer()
    console.log(elCell);
    var cell = gBoard[cellI][cellJ]
    if (cell.isMine) {
        gameOver()
        return
    } else if (!cell.isShown) {
        cell.isShown = true
        elCell.classList = 'clicked'
        if (cell.minesAroundCount === 0) {
            var neighbors= findAllNeighbors(cellI,cellJ,gBoard)
            for(var i=0;i<neighbors.length;i++){
                var neighbor= neighbors[i]
                neighbor.classList =  'clicked'
                neighbor.isShown=true
                console.log(neighbor);
            }
            
            return
        }
        renderCell(cellI, cellJ, cell.minesAroundCount)
    }
}




function gameOver() {
    var elButn = document.querySelector('.fill')
    elButn.innerText = '😫'

}

function restart() {
    var elButn = document.querySelector('.fill')
    elButn.innerText = '😃'
    init()
}

function winner() {
    var elButn = document.querySelector('.fill')
    elButn.innerText = '😎'

}

function easy() {
    gLevel.SIZE = 4
    gLevel.MINES = 2
    init()

}

function medium() {
    gLevel.SIZE = 8
    gLevel.MINES = 12
    init()
}

function hard() {
    gLevel.SIZE = 12
    gLevel.MINES = 30
    init()
}

function startTimer() {
    gStartTime = Date.now()
    gIntervalId = setInterval(updateTime, 1000)
}

function updateTime() {
    var now = Date.now()
    var diff = now - gStartTime
    var secPast = diff / 1000
    var elTimer = document.querySelector('.timer')
    console.log(elTimer)
    elTimer.innerText = secPast


}


function updateSetMinesNegsCount() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j]
            cell.minesAroundCount = setMinesNegsCount(i, j, gBoard)
        }
    }
}

function findAllNeighbors(cellI,cellJ,board) {
    var neighbors=[]
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= board[i].length) continue;
            var cell = board[i][j]
            neighbors.push(cell)
        }
    }
    return neighbors
}