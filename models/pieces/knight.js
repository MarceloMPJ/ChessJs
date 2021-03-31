const PLAYER = require('../enums/player')

const Piece = require('../piece')

class Knight extends Piece {
  constructor(position, color) {
    super(position, Knight.generateMoves(), color)
  }

  static generateMoves() {
    const moves = []

    moves.push( Knight.convertToMove(2, 1) )
    moves.push( Knight.convertToMove(2, -1) )
    moves.push( Knight.convertToMove(-2, 1) )
    moves.push( Knight.convertToMove(-2, -1) )

    moves.push( Knight.convertToMove(1, 2) )
    moves.push( Knight.convertToMove(-1, 2) )
    moves.push( Knight.convertToMove(1, -2) )
    moves.push( Knight.convertToMove(-1, -2) )

    return moves
  }

  imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wn.png' : './images/pieces/bn.png'
  }
}

module.exports = Knight
