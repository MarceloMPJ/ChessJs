const PLAYER = require('../enums/player')

const Piece = require('../piece')

class InitialPawn extends Piece {
  constructor(position, color) {
    let moves = null
    if(color == PLAYER.white) {
      moves = [{ column: 0, line: -1 }, { column: 0, line: -2 }]
    } else {
      moves = [{ column: 0, line: 1 }, { column: 0, line: 2 }]
    }
    super(position, moves, color)
  }

  get imageUrl() {
    return this.color == PLAYER.white ? './images/pieces/wp.png' : './images/pieces/bp.png'
  }
}

module.exports = InitialPawn
