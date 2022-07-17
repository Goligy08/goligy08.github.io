document.addEventListener('DOMContentLoaded', () => {



const grid = document.querySelector('.grid')
const scoreBoard = document.getElementById('score')
const width = 28
let score = 0

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

] 

const squares = []
// Key
// 0 = pacdot
// 1 = wall
// 2 = ghostlair
// 3 = power pellet
// 4 = empty

function createGameBoard() {
    for (let i = 0; i < layout.length; i++){

        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if(layout[i] === 0){
            squares[i].classList.add('pacdot')
        } else if(layout[i] === 1){
            squares[i].classList.add('wall')
        } else if(layout[i] === 3){
            squares[i].classList.add('power-pellet')
        }
    }
}

createGameBoard()

let pacmanCurrentPos = 490

squares[pacmanCurrentPos].classList.add('pacman')

function movePacman(e) {

// w = 87
// a = 65
// s = 83
// d= 68
squares[pacmanCurrentPos].classList.remove('pacman')

switch(e.keyCode){
    case 65:
        if (pacmanCurrentPos % width !== 0 && !squares[pacmanCurrentPos - 1].classList.contains('wall')) pacmanCurrentPos -= 1
        console.log('move left')

       if ((pacmanCurrentPos - 1) === 363){
           pacmanCurrentPos = 391
       }
        break
    case 87:
        if (pacmanCurrentPos - width >= 0 && !squares[pacmanCurrentPos - width].classList.contains('wall')) pacmanCurrentPos -= width
        console.log('move up')
        break
    case 68:
        if (pacmanCurrentPos % width < width -1 && !squares[pacmanCurrentPos + 1].classList.contains('wall')) pacmanCurrentPos +=1
        console.log('move right')
        if ((pacmanCurrentPos +1) === 392){
            pacmanCurrentPos = 364
        }
        break
    case 83:
        if (pacmanCurrentPos - width < width * width && !squares[pacmanCurrentPos + width].classList.contains('wall')) pacmanCurrentPos +=width
        console.log('move down')
        break
}

squares[pacmanCurrentPos].classList.add('pacman')


pacmanEatsPacdot()
pacmanEatsPowerPellet()
gameOver()
checkWinner()
}

document.addEventListener('keyup', movePacman)



function pacmanEatsPacdot() {
    if (squares[pacmanCurrentPos].classList.contains('pacdot')){
        score++
        scoreBoard.innerHTML = score
        squares[pacmanCurrentPos].classList.remove('pacdot')
    }
}
function pacmanEatsPowerPellet() {
    if (squares[pacmanCurrentPos].classList.contains('power-pellet')){
        score = score += 10
        scoreBoard.innerHTML = score
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(setScaredTimeOut, 10000)
        squares[pacmanCurrentPos].classList.remove('power-pellet')

    }
}

function setScaredTimeOut() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor(className, startPos, speed){
        this.className = className
        this.startPos = startPos
        this.speed = speed
        this.currentPos = startPos
        this.timer = NaN
        this.isScared = false
    }
}

ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 300),
    new Ghost('inky', 351, 400),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentPos].classList.add(ghost.className)
    squares[ghost.currentPos].classList.add('ghost')
})


ghosts.forEach(ghost => moveGhost(ghost))


function moveGhost(ghost) {
    const directions = [width, -width, -1, +1]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {


        if(!squares[ghost.currentPos + direction].classList.contains('wall') && !squares[ghost.currentPos + direction].classList.contains('ghost')) {

            squares[ghost.currentPos].classList.remove(ghost.className, 'ghost', 'scaredGhost')
            ghost.currentPos += direction

            squares[ghost.currentPos].classList.add(ghost.className, 'ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        if (ghost.isScared){
            squares[ghost.currentPos].classList.add('scaredGhost')
        }

        if (ghost.isScared && squares[ghost.currentPos].classList.contains('pacman')){
            squares[ghost.currentPos].classList.remove(ghost.className, 'ghost', 'scaredGhost')
            ghost.currentPos = ghost.startPos
            score += 100
            squares[ghost.currentPos].classList.add(ghost.className, 'ghost')
        }
        gameOver()
    }, ghost.speed)
}

function gameOver() {
    if (squares[pacmanCurrentPos].classList.contains('ghost') && !squares[pacmanCurrentPos].classList.contains('scaredGhost')){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreBoard.innerHTML = 'GAME OVER!'
    }
}
  
function checkWinner() {
    if (score === 274){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreBoard.innerHTML  = 'YOU WIN!'
    }
}




})

