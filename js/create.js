'use strict'

function createFlag(elCell,ev) {
    ev.preventDefault()
    console.log(elCell);
    if (!isflag) {
        elCell.innerHTML = RED_FLAG
        isflag=true
        elCell.isMarked=true


    }else if (isflag){
        elCell.innerHTML=''
        isflag=false
    }
    return false
}

function createMine(board){
   var emptyCells=getEmptyCells(board)
    var index = getRandomInt(0,emptyCells.length)
    console.log(emptyCells[index]);
    // model
    board[emptyCells[index].i][emptyCells[index].j].isMine = true
    // dom
    renderCell(emptyCells[index].i,emptyCells[index].j, MINE)
}

function createMines(board){
    for (var i=0;i<gLevel.MINES;i++){
        createMine(board)
    }
}

