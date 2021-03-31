const PLAYER = require('../enums/player')
const RANGE = require('../enums/range')

const Piece = require('../piece')

class Rook extends Piece {
  constructor(position, color) {
    super(position, Rook.generateMoves(), color)
  }

  static generateMoves() {
    const moves = []

    RANGE.forEach(num => {
      moves.push( Rook.convertToMove(0, num) )
      moves.push( Rook.convertToMove(0, -num) )
      moves.push( Rook.convertToMove(num, 0) )
      moves.push( Rook.convertToMove(-num, 0) )
    })

    return moves
  }

  imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wr.png' : './images/pieces/br.png'
  }
}

module.exports = Rook
