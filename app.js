const board = document.querySelector('#board')
const colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#FF00FF', '#FF00FF', '#8A2BE2','#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#800080', '#FF00FF', '#fff']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRamdomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRamdomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}