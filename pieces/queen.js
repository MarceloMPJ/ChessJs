const Piece = require('../piece.js')

class Queen extends Piece {
  static #RANGE = [1, 2, 3, 4, 5, 6, 7]

  constructor(position) {
    super(position, Queen.#generateMoves())
  }

  static #generateMoves() {
    const moves = []

    this.#RANGE.forEach(num => {
      moves.push( Queen.#convertToMove(num, num) )
      moves.push( Queen.#convertToMove(num, -num) )
      moves.push( Queen.#convertToMove(-num, num) )
      moves.push( Queen.#convertToMove(-num, -num) )

      moves.push( Queen.#convertToMove(0, num) )
      moves.push( Queen.#convertToMove(0, -num) )
      moves.push( Queen.#convertToMove(num, 0) )
      moves.push( Queen.#convertToMove(-num, 0) )
    })

    return moves
  }

  static #convertToMove(line, column) {
    return { line: line, column: column }
  }
}

module.exports = Queen
