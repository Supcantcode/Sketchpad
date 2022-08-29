function addSquares(size) {
    const display = document.querySelector('.display')
    let squares = display.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    display.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    display.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div')
        square.style.borderColor = 'black'
        square.style.backgroundColor = 'blue'
        display.insertAdjacentElement('beforeend', square)
    }
}