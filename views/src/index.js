const PLAYER = require('../../models/enums/player.js')
const Pawn = require('../../models/pieces/pawn.js')
const Position = require('../../models/position.js')
const FenParser = require('../../models/fen_parser')

const render = require('./render.js')

const canvas = document.getElementById("board")
const context = canvas.getContext("2d")

// Create Pieces
const fen_parser = new FenParser("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

// let position_1 = new Position(1, 0)
// let pawn_1 = new Pawn(position_1, PLAYER.black)

// let position_2 = new Position(2, 1)
// let pawn_2 = new Pawn(position_2, PLAYER.black)

// Render
console.log(fen_parser.pieces)
render(context, fen_parser.pieces)
