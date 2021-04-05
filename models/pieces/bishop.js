const PLAYER = require('../enums/player')
const RANGE = require('../enums/range')

const Piece = require('../piece')

class Bishop extends Piece {
  constructor(position, color) {
    super(position, Bishop.generateMoves(), color)
  }

  static generateMoves() {
    const moves = []

    RANGE.forEach(num => {
      moves.push( Bishop.convertToMove(num, num) )
      moves.push( Bishop.convertToMove(num, -num) )
      moves.push( Bishop.convertToMove(-num, num) )
      moves.push( Bishop.convertToMove(-num, -num) )
    })

    return moves
  }

  get imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wb.png' : './images/pieces/bb.png'
  }
}

module.exports = Bishop
