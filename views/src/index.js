const renderFunc = require('./render')
const cellInputFunc = require('./cell_input')
const Board = require('../../models/board')

const canvas = document.getElementById("board")
const context = canvas.getContext("2d")

// Build Board
const board = new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", context, renderFunc, cellInputFunc)

// Render
board.render()
