class Piece {
  constructor(position, moves, color) {
    this.selected = false
    this.position = position
    this.moves = moves
    this.color = color
  }

  static convertToMove(line, column) {
    return { line: line, column: column }
  }

  get validPositions() {
    const positions = this.newPositions()
    return positions.filter(position => position.isValid)
  }

  drawImage(context) {
    const base_image = new Image()
    base_image.src = this.imageUrl

    base_image.onload = () => {
      if(this.selected) {
        context.fillStyle = "rgba(0, 0, 0, 0.5)"
        context.fillRect(this.position.column * 100, this.position.line * 100, 100, 100)
      }

      context.drawImage(base_image, this.position.column * 100, this.position.line * 100, 100, 100)
    }
  }

  newPositions() {
    return this.moves.map(move => this.position.createNewPosition(move))
  }

  hasSamePosition(position) {
    return this.position.isEqual(position)
  }

  movesTo(position) {
    if(!this.isValidPosition(position))
      return false

    this.position = position
    return true
  }

  isValidPosition(position) {
    return !!this.validPositions.filter(validPosition => validPosition.isEqual(position)).length
  }
}

module.exports = Piece
