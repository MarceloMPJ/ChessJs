module.exports = (context) => {
  const COLOR_1 = '#fcd8dd'
  const COLOR_2 = '#ffffff'

  let color = COLOR_1

  for(let line = 0; line < 9; line++) {
    for(let column = 0; column < 9; column++) {
      color = (color == COLOR_2) ? COLOR_1 : COLOR_2
      context.fillStyle = color
      context.fillRect(100*line, 100*column, 100, 100)
    }
  }
}
