const board = document.querySelector('#board')
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square)
        // console.log('aheajkl'
    )

    square.addEventListener('mouseover', () =>
        setColor(square)
    )

    board.append(square)
}

function setColor(element){
    element.style.backgroundColor = 'red'
}



