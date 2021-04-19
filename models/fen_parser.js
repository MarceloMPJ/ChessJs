const PLAYER = require("./enums/player")

const InitialPawn = require("./pieces/initial_pawn")
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
      return this.convertRow(row).split("").map((pieceStr, column) => {
        let position = new Position(line, column)
        return this.createPiece(pieceStr, position)
      })
    })
    .flat()
    .filter(piece => piece != null)
  }

  get player() {
    return this.rows[8] == 'w' ? PLAYER.white : PLAYER.black
  }

  get castling() {
    return {
      black: {
        king: this.hasCastlingByPiece('k'),
        queen: this.hasCastlingByPiece('q')
      },
      white: {
        king: this.hasCastlingByPiece('K'),
        queen: this.hasCastlingByPiece('Q')
      }
    }
  }

  get enPassantPosition() {
    return Position.createByCoord(this.rows[10])
  }

  get halfmove() {
    return parseInt(this.rows[11])
  }

  get fullmove() {
    return parseInt(this.rows[12])
  }

  hasCastlingByPiece(piece) {
    return !!this.rows[9].match(piece)
  }

  createPiece(pieceStr, position) {
    let piece = null

    switch(pieceStr) {
      case 'p':
        piece = new InitialPawn(position, PLAYER.black)
        break;
      case 'P':
        piece = new InitialPawn(position, PLAYER.white)
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

  convertRow(row) {
    const numbers = row.match(/\d/g)

    if(numbers) {
      numbers.forEach(numberStr =>
        row = row.replace(numberStr, " ".repeat(parseInt(numberStr)))
      )
    }

    return row
  }
}

module.exports = FenParser
