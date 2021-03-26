const Piece = require('../piece.js')

class King extends Piece {
  constructor(position) {
    super(position, King.#generateMoves())
  }

  static #generateMoves() {
    const moves = []

    moves.push( King.#convertToMove(1, 1) )
    moves.push( King.#convertToMove(1, -1) )
    moves.push( King.#convertToMove(-1, 1) )
    moves.push( King.#convertToMove(-1, -1) )

    moves.push( King.#convertToMove(0, 1) )
    moves.push( King.#convertToMove(0, -1) )
    moves.push( King.#convertToMove(1, 0) )
    moves.push( King.#convertToMove(-1, 0) )

    return moves
  }

  static #convertToMove(line, column) {
    return { line: line, column: column }
  }
}

module.exports = King
