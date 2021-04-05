const FenParser = require('./fen_parser')

class Board {
  constructor(fen, context, renderFunction) {
    const fen_parser = new FenParser(fen)

    this.pieces            = fen_parser.pieces
    this.player            = fen_parser.player
    this.castling          = fen_parser.castling
    this.enPassantPosition = fen_parser.enPassantPosition
    this.halfmove          = fen_parser.halfmove
    this.context           = context
    this.renderFunction    = renderFunction
  }

  render() {
    this.renderFunction(this.context, this.pieces)
  }
}

module.exports = Board
