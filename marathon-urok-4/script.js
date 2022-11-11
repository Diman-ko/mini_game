const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'pink',  'purple']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square)
        // console.log('aheajkl'
    )

    square.addEventListener('mouseleave', () =>
        removeColor(square)
    )

    board.append(square)
}

function setColor(element){
    element.style.backgroundColor = 'red'
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
}
function getRandomColor() {
 const index = Math.floor(Math.random()*colors.length)
     return colors[index]
}


