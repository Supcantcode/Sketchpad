const display = document.querySelector('.display')
display.style.gridTemplateColumns = 'repeat(16, 1fr)'
display.style.gridTemplateRows = 'repeat(16, 1fr)'

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div')
    square.style.borderColor = 'black'
    square.style.backgroundColor = 'blue'
    display.insertAdjacentElement('beforeend', square)
}
