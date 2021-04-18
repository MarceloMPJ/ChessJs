const FenParser = require('./fen_parser')
const Position = require('./position')

class Board {
  constructor(fen, context, renderFunction, cellInputFunction) {
    const fen_parser = new FenParser(fen)

    this.pieceSelected    = null
    this.pieces            = fen_parser.pieces
    this.player            = fen_parser.player
    this.castling          = fen_parser.castling
    this.enPassantPosition = fen_parser.enPassantPosition
    this.halfmove          = fen_parser.halfmove
    this.context           = context
    this.renderFunction    = renderFunction

    cellInputFunction(this.input, this)
  }

  render() {
    this.renderFunction(this.context, this.pieces)
  }

  input(coord) {
    let position = Position.createByCoord(coord)

    if(this.pieceSelected) {
      console.log(this.pieceSelected)
      this.pieceSelected = null
    } else {
      this.setPieceSelected(position)
      console.log(this.pieceSelected)
    }
  }

  setPieceSelected(position) {
    this.pieceSelected = this.pieces.find(piece => piece.hasSamePosition(position))
  }
}

module.exports = Board
