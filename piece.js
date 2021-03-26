class Piece {
  constructor(position, moves) {
    this.position = position
    this.moves = moves
  }

  get validPositions() {
    const positions = this.#newPositions()
    return positions.reduce(position => position.isValid)
  }

  #newPositions() {
    return this.moves.map(move => this.createNewPosition(move))
  }
}

module.exports = Piece
