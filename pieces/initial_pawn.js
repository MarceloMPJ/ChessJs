const Piece = require('../piece.js')

class InitialPawn extends Piece {
  constructor(position, color) {
    if(color == 'white') {
      super(position, [{ column: 0, line: 1 }, { column: 0, line: 2 }])
    } else {
      super(position, [{ column: 0, line: -1 }, { column: 0, line: -2 }])
    }
  }
}

module.exports = InitialPawn
