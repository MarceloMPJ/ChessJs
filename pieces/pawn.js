const Piece = require('../piece.js')

class Pawn extends Piece {
  constructor(position, color) {
    if(color == 'white') {
      super(position, [{ column: 0, line: 1 }])
    } else {
      super(position, [{ column: 0, line: -1 }])
    }
  }
}

module.exports = Pawn
