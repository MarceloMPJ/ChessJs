const renderFunc = require('./render.js')
const Board = require('../../models/board.js')

const canvas = document.getElementById("board")
const context = canvas.getContext("2d")

// Build Board
const board = new Board("1r3k2/3b2pp/2p1p3/r2pPpN1/1q1P1Q2/p6P/BnP2PP1/1R2R1K1 b - - 1 26", context, renderFunc)

// Render
board.render()
