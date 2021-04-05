const PLAYER = require('../enums/player')
const RANGE = require('../enums/range')

const Piece = require('../piece')

class Queen extends Piece {
  constructor(position, color) {
    super(position, Queen.generateMoves(), color)
  }

  static generateMoves() {
    const moves = []

    RANGE.forEach(num => {
      moves.push( Queen.convertToMove(num, num) )
      moves.push( Queen.convertToMove(num, -num) )
      moves.push( Queen.convertToMove(-num, num) )
      moves.push( Queen.convertToMove(-num, -num) )

      moves.push( Queen.convertToMove(0, num) )
      moves.push( Queen.convertToMove(0, -num) )
      moves.push( Queen.convertToMove(num, 0) )
      moves.push( Queen.convertToMove(-num, 0) )
    })

    return moves
  }

  get imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wq.png' : './images/pieces/bq.png'
  }
}

module.exports = Queen
