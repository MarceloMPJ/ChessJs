const Piece = require('../piece.js')

class Bishop extends Piece {
  static #RANGE = [1, 2, 3, 4, 5, 6, 7]

  constructor(position) {
    super(position, Bishop.#generateMoves())
  }

  static #generateMoves() {
    const moves = []

    this.#RANGE.forEach(num => {
      moves.push( Bishop.#convertToMove(num, num) )
      moves.push( Bishop.#convertToMove(num, -num) )
      moves.push( Bishop.#convertToMove(-num, num) )
      moves.push( Bishop.#convertToMove(-num, -num) )
    })

    return moves
  }

  static #convertToMove(line, column) {
    return { line: line, column: column }
  }
}

module.exports = Bishop
