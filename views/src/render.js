const renderBoard = require('./render_board.js')

module.exports = (context, pieces) => {
  renderBoard(context)

  pieces.forEach(piece => piece.drawImage(context))
}
