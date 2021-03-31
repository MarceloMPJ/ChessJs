const PLAYER = require("./enums/player")

const Pawn = require("./pieces/pawn")
const Rook = require("./pieces/rook")
const Knight = require("./pieces/knight")
const Bishop = require("./pieces/bishop")
const Queen = require("./pieces/queen")
const King = require("./pieces/king")

const Position = require("../models/position")

class FenParser {
  constructor(fen) {
    this.fen = fen
    this.rows = fen.split(/[\/ ]/)
  }

  get pieces() {
    return this.rows.map((row, line) => {
      return row.split("").map((pieceStr, column) => {
        let position = new Position(line, column)
        return this.createPiece(pieceStr, position)
      })
    }).flat().filter(piece => piece != null)
  }

  createPiece(pieceStr, position) {
    let piece = null

    switch(pieceStr) {
      case 'p':
        piece = new Pawn(position, PLAYER.black)
        break;
      case 'P':
        piece = new Pawn(position, PLAYER.white)
        break;
      case 'r':
        piece = new Rook(position, PLAYER.black)
        break;
      case 'R':
        piece = new Rook(position, PLAYER.white)
        break;
      case 'n':
        piece = new Knight(position, PLAYER.black)
        break;
      case 'N':
        piece = new Knight(position, PLAYER.white)
        break;
      case 'b':
        piece = new Bishop(position, PLAYER.black)
        break;
      case 'B':
        piece = new Bishop(position, PLAYER.white)
        break;
      case 'q':
        piece = new Queen(position, PLAYER.black)
        break;
      case 'Q':
        piece = new Queen(position, PLAYER.white)
        break;
      case 'k':
        piece = new King(position, PLAYER.black)
        break;
      case 'K':
        piece = new King(position, PLAYER.white)
        break;
    }

    return piece
  }
}

module.exports = FenParser
