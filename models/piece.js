class Piece {
  constructor(position, moves, color) {
    this.position = position
    this.moves = moves
    this.color = color
  }

  static convertToMove(line, column) {
    return { line: line, column: column }
  }

  get validPositions() {
    const positions = this.newPositions()
    return positions.reduce(position => position.isValid)
  }

  drawImage(context) {
    const base_image = new Image()
    base_image.src = this.imageUrl

    base_image.onload = () =>
      context.drawImage(base_image, this.position.column * 100, this.position.line * 100, 100, 100)
  }

  newPositions() {
    return this.moves.map(move => this.createNewPosition(move))
  }
}

module.exports = Piece
