const PLAYER = require('../enums/player')

const Piece = require('../piece')

class Pawn extends Piece {
  constructor(position, color) {
    const moves = color == PLAYER.white ? [{ column: 0, line: -1 }] : [{ column: 0, line: 1 }]

    super(position, moves, color)
  }

  get imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wp.png' : './images/pieces/bp.png'
  }
}

module.exports = Pawn
