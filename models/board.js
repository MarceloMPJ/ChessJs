const PLAYER = require('./enums/player.js')

class Board {
  constructor(fen) {
    this.pieces = []
    this.player = PLAYER.white
    this.castling_black = { queen: true, king: true }
    this.castling_white = { queen: true, king: true }
    this.en_passant = null
    this.halfmove_clock = 0
    this.fullmove_number = 0

    this.initialize_board_by_fen(fen)
  }

  initialize_board_by_fen(fen) {

  }
}

module.exports = Board
