const PLAYER = require('../enums/player')

const Piece = require('../piece')

class King extends Piece {
  constructor(position, color) {
    super(position, King.generateMoves(), color)
  }

  static generateMoves() {
    const moves = []

    moves.push( King.convertToMove(1, 1) )
    moves.push( King.convertToMove(1, -1) )
    moves.push( King.convertToMove(-1, 1) )
    moves.push( King.convertToMove(-1, -1) )

    moves.push( King.convertToMove(0, 1) )
    moves.push( King.convertToMove(0, -1) )
    moves.push( King.convertToMove(1, 0) )
    moves.push( King.convertToMove(-1, 0) )

    return moves
  }

  imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wk.png' : './images/pieces/bk.png'
  }
}

module.exports = King
