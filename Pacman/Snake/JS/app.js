document.addEventListener('DOMContentLoaded', ()  => {

    const squares = document.querySelectorAll('.grid div')
    const scoreBoard = document.querySelector('span')
    const startBtn = document.querySelector('.start')


    const width = 10
    let currentPos = 0 
    let applePos = 0 
    let currentSnake = [2,1,0]
    let direction =  1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0 



    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[applePos].classList.remove('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreBoard.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currenPos = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveResult, intervalTime)
    }


    function moveResult() {
        if( (currentSnake[0] + width >= (width * width) && direction === width) ||
        (currentSnake[0] % width === width -1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
        ) {
            return clearInterval(interval)
        }

        const tail = currentSnake.pop()
        squares[tail].classList.remove('snake')
        currentSnake.unshift(currentSnake[0] + direction)


        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score++
            scoreBaord.innerHTML = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveResult, intervalTime)
        }

        squares[currentSnake[0]].classList.add('snake')
    }


    function randomApple() {
        do{
            applePos = Math.floor(Math.random() * squares.length)
        } while (squares[applePos].classList.contains('snake'))
        squares[applePos].classList.add('apple')
    }
    function moveSnake(e) {
         squares[currentPos].classList.remove('snake')

         if(e.keyCode === 39){
             direction = 1
         } else if (e.keyCode === 38){
            direction = -width
         } else if (e.keyCode === 37) {
             direction = -1 
         } else if(e.keyCode === 40){
             direction = +width
         }
    }

    document.addEventListener('keyup', moveSnake)
    startBtn.addEventListener('click', startGame)

})