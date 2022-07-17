
const grid = document.querySelector('.grid')
const scoreBoard = document.querySelector('.score')
let score = 0
let timerID
const boardWidth = 670
const boardHeight = 400
const blockWidth = 100
const blockHeight = 20
const ballDiam = 20
let xDirection = -2
let yDirection = 2


const userStart = [230, 10]
let userCurrentPos = userStart

const ballStart = [270, 40]
let ballCurrentPos = ballStart

class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 360),
    new Block(120, 360),
    new Block(230, 360),
    new Block(340, 360),
    new Block(450, 360),
    new Block(560, 360),
    new Block(10, 330),
    new Block(120, 330),
    new Block(230, 330),
    new Block(340, 330),
    new Block(450, 330),
    new Block(560, 330),
    new Block(10, 300),
    new Block(120, 300),
    new Block(230, 300),
    new Block(340, 300),
    new Block(450, 300),
    new Block(560, 300),
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(560, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(560, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
    new Block(560, 210)
]


function drawBlocks() {
    for (let i = 0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
        console.log(blocks[i].bottomLeft)
    }
}

drawBlocks()

// Initiate user block
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

// Initiate Ball block
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()


function moveUserBlock(e) {
    switch(e.key){
        case 'ArrowLeft':
            if (userCurrentPos[0] > 0) {
                userCurrentPos[0] -= 20
                drawUser()
            }
             break
        case 'ArrowRight':
            if (userCurrentPos[0] < (boardWidth - blockWidth)){
                userCurrentPos[0] += 20
                drawUser()
            }
             break
    }
}
document.addEventListener('keydown', moveUserBlock)


function moveBall() {
    ballCurrentPos[0]  += xDirection
    ballCurrentPos[1]  += yDirection
    drawBall()
    checkCollisions()
}

timerID = setInterval(moveBall, 20)

// check for ball collisions

function checkCollisions() {

    for (let i = 0; i < blocks.length; i++){

        if (
            (ballCurrentPos[0] > blocks[i].bottomLeft[0] && ballCurrentPos[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPos[1] + ballDiam) > blocks[i].bottomLeft[1] && ballCurrentPos[1] < blocks[i].topLeft[1])
        ) {
            const totalBlocks = Array.from(document.querySelectorAll('.block'))
            totalBlocks[i].classList.remove('block')
            blocks.splice(i,1)
            changeDirection()
            score += 5
            scoreBoard.innerHTML = score
            if (blocks.length == 0){
                scoreBoard.style.marginLeft = "10%"
                scoreBoard.innerHTML = "Game Over! You Win!!"
                clearInterval(timerID)
                document.removeEventListener('keydown', moveUserBlock)
            }
           
        }

        

    }


    if(ballCurrentPos[0] >= (boardWidth - ballDiam) ||
       ballCurrentPos[0] <= 0 ||
       ballCurrentPos[1] >= (boardHeight - ballDiam))
       {
           changeDirection()
       }

    // check for user collision 
  
    if 
       ((ballCurrentPos[0] > userCurrentPos[0] && ballCurrentPos[0] < userCurrentPos[0] + blockWidth) &&
       (ballCurrentPos[1] > userCurrentPos[1] && ballCurrentPos[1] < userCurrentPos[1] + blockHeight)){
           changeDirection()
       }
   
    //check for game over
    if (ballCurrentPos[1] <= 0) {
        clearInterval(timerID)
        scoreBoard.innerHTML = 'Game Over! You Lose!'
      

    }
}


function changeDirection() {

    if(xDirection === 2 && yDirection === 2){
        yDirection = -2
        return
    }
    if(xDirection === 2 && yDirection === -2){
     xDirection = -2
     return
    }
    if(xDirection === -2 && yDirection === -2){
     yDirection = 2
     return
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2
        return
    }
}

// draw user block to board
function drawUser() {
    user.style.left = userCurrentPos[0] + 'px'
    user.style.bottom = userCurrentPos[1] + 'px'
}

// draw ball bock to board
function drawBall() {
    ball.style.left = ballCurrentPos[0] + 'px'
    ball.style.bottom = ballCurrentPos[1] + 'px'
}