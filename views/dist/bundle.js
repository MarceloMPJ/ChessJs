/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../models/board.js":
/*!**************************!*\
  !*** ../models/board.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const FenParser = __webpack_require__(/*! ./fen_parser */ \"../models/fen_parser.js\")\nconst Position = __webpack_require__(/*! ./position */ \"../models/position.js\")\n\nclass Board {\n  constructor(fen, context, renderFunction, cellInputFunction) {\n    const fen_parser = new FenParser(fen)\n\n    this.pieceSelected    = null\n    this.pieces            = fen_parser.pieces\n    this.player            = fen_parser.player\n    this.castling          = fen_parser.castling\n    this.enPassantPosition = fen_parser.enPassantPosition\n    this.halfmove          = fen_parser.halfmove\n    this.context           = context\n    this.renderFunction    = renderFunction\n\n    cellInputFunction(this.input, this)\n  }\n\n  render() {\n    this.renderFunction(this.context, this.pieces)\n  }\n\n  input(coord) {\n    let position = Position.createByCoord(coord)\n\n    if(this.pieceSelected) {\n      this.pieceSelected.movesTo(position)\n      this.pieceSelected.selected = false\n      this.pieceSelected = null\n    } else {\n      this.setPieceSelected(position)\n    }\n\n    this.render()\n  }\n\n  setPieceSelected(position) {\n    this.pieceSelected = this.pieces.find(piece => piece.color == this.player && piece.hasSamePosition(position))\n\n    if(this.pieceSelected)\n      this.pieceSelected.selected = true\n  }\n}\n\nmodule.exports = Board\n\n\n//# sourceURL=webpack://views/../models/board.js?");

/***/ }),

/***/ "../models/enums/player.js":
/*!*********************************!*\
  !*** ../models/enums/player.js ***!
  \*********************************/
/***/ ((module) => {

eval("const PLAYER = { white : 1, black : 2 }\nObject.freeze(PLAYER)\n\nmodule.exports = PLAYER\n\n\n//# sourceURL=webpack://views/../models/enums/player.js?");

/***/ }),

/***/ "../models/enums/range.js":
/*!********************************!*\
  !*** ../models/enums/range.js ***!
  \********************************/
/***/ ((module) => {

eval("const RANGE = [1, 2, 3, 4, 5, 6, 7]\nObject.freeze(RANGE)\n\nmodule.exports = RANGE\n\n\n//# sourceURL=webpack://views/../models/enums/range.js?");

/***/ }),

/***/ "../models/fen_parser.js":
/*!*******************************!*\
  !*** ../models/fen_parser.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ./enums/player */ \"../models/enums/player.js\")\n\nconst InitialPawn = __webpack_require__(/*! ./pieces/initial_pawn */ \"../models/pieces/initial_pawn.js\")\nconst Rook = __webpack_require__(/*! ./pieces/rook */ \"../models/pieces/rook.js\")\nconst Knight = __webpack_require__(/*! ./pieces/knight */ \"../models/pieces/knight.js\")\nconst Bishop = __webpack_require__(/*! ./pieces/bishop */ \"../models/pieces/bishop.js\")\nconst Queen = __webpack_require__(/*! ./pieces/queen */ \"../models/pieces/queen.js\")\nconst King = __webpack_require__(/*! ./pieces/king */ \"../models/pieces/king.js\")\n\nconst Position = __webpack_require__(/*! ../models/position */ \"../models/position.js\")\n\nclass FenParser {\n  constructor(fen) {\n    this.fen = fen\n    this.rows = fen.split(/[\\/ ]/)\n  }\n\n  get pieces() {\n    return this.rows.map((row, line) => {\n      return this.convertRow(row).split(\"\").map((pieceStr, column) => {\n        let position = new Position(line, column)\n        return this.createPiece(pieceStr, position)\n      })\n    })\n    .flat()\n    .filter(piece => piece != null)\n  }\n\n  get player() {\n    return this.rows[8] == 'w' ? PLAYER.white : PLAYER.black\n  }\n\n  get castling() {\n    return {\n      black: {\n        king: this.hasCastlingByPiece('k'),\n        queen: this.hasCastlingByPiece('q')\n      },\n      white: {\n        king: this.hasCastlingByPiece('K'),\n        queen: this.hasCastlingByPiece('Q')\n      }\n    }\n  }\n\n  get enPassantPosition() {\n    return Position.createByCoord(this.rows[10])\n  }\n\n  get halfmove() {\n    return parseInt(this.rows[11])\n  }\n\n  get fullmove() {\n    return parseInt(this.rows[12])\n  }\n\n  hasCastlingByPiece(piece) {\n    return !!this.rows[9].match(piece)\n  }\n\n  createPiece(pieceStr, position) {\n    let piece = null\n\n    switch(pieceStr) {\n      case 'p':\n        piece = new InitialPawn(position, PLAYER.black)\n        break;\n      case 'P':\n        piece = new InitialPawn(position, PLAYER.white)\n        break;\n      case 'r':\n        piece = new Rook(position, PLAYER.black)\n        break;\n      case 'R':\n        piece = new Rook(position, PLAYER.white)\n        break;\n      case 'n':\n        piece = new Knight(position, PLAYER.black)\n        break;\n      case 'N':\n        piece = new Knight(position, PLAYER.white)\n        break;\n      case 'b':\n        piece = new Bishop(position, PLAYER.black)\n        break;\n      case 'B':\n        piece = new Bishop(position, PLAYER.white)\n        break;\n      case 'q':\n        piece = new Queen(position, PLAYER.black)\n        break;\n      case 'Q':\n        piece = new Queen(position, PLAYER.white)\n        break;\n      case 'k':\n        piece = new King(position, PLAYER.black)\n        break;\n      case 'K':\n        piece = new King(position, PLAYER.white)\n        break;\n    }\n\n    return piece\n  }\n\n  convertRow(row) {\n    const numbers = row.match(/\\d/g)\n\n    if(numbers) {\n      numbers.forEach(numberStr =>\n        row = row.replace(numberStr, \" \".repeat(parseInt(numberStr)))\n      )\n    }\n\n    return row\n  }\n}\n\nmodule.exports = FenParser\n\n\n//# sourceURL=webpack://views/../models/fen_parser.js?");

/***/ }),

/***/ "../models/piece.js":
/*!**************************!*\
  !*** ../models/piece.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Position = __webpack_require__(/*! ./position */ \"../models/position.js\")\n\nclass Piece {\n  constructor(position, moves, color) {\n    this.selected = false\n    this.position = position\n    this.moves = moves\n    this.color = color\n  }\n\n  static convertToMove(line, column) {\n    return { line: line, column: column }\n  }\n\n  get validPositions() {\n    const positions = this.newPositions()\n    return positions.reduce(position => position.isValid)\n  }\n\n  drawImage(context) {\n    const base_image = new Image()\n    base_image.src = this.imageUrl\n\n    base_image.onload = () => {\n      if(this.selected) {\n        context.fillStyle = \"rgba(0, 0, 0, 0.5)\"\n        context.fillRect(this.position.column * 100, this.position.line * 100, 100, 100)\n      }\n\n      context.drawImage(base_image, this.position.column * 100, this.position.line * 100, 100, 100)\n    }\n  }\n\n  newPositions() {\n    return this.moves.map(move => this.position.createNewPosition(move))\n  }\n\n  hasSamePosition(position) {\n    return this.position.isEqual(position)\n  }\n\n  movesTo(position) {\n    if(this.isValidPosition(position))\n      this.position = position\n  }\n\n  isValidPosition(position) {\n    console.log(this.validPositions)\n    this.validPositions.includes(position)\n  }\n}\n\nmodule.exports = Piece\n\n\n//# sourceURL=webpack://views/../models/piece.js?");

/***/ }),

/***/ "../models/pieces/bishop.js":
/*!**********************************!*\
  !*** ../models/pieces/bishop.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Bishop extends Piece {\n  constructor(position, color) {\n    super(position, Bishop.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Bishop.convertToMove(num, num) )\n      moves.push( Bishop.convertToMove(num, -num) )\n      moves.push( Bishop.convertToMove(-num, num) )\n      moves.push( Bishop.convertToMove(-num, -num) )\n    })\n\n    return moves\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wb.png' : './images/pieces/bb.png'\n  }\n}\n\nmodule.exports = Bishop\n\n\n//# sourceURL=webpack://views/../models/pieces/bishop.js?");

/***/ }),

/***/ "../models/pieces/initial_pawn.js":
/*!****************************************!*\
  !*** ../models/pieces/initial_pawn.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass InitialPawn extends Piece {\n  constructor(position, color) {\n    let moves = null\n    if(color == PLAYER.white) {\n      moves = [{ column: 0, line: -1 }, { column: 0, line: -2 }]\n    } else {\n      moves = [{ column: 0, line: 1 }, { column: 0, line: 2 }]\n    }\n    super(position, moves, color)\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wp.png' : './images/pieces/bp.png'\n  }\n}\n\nmodule.exports = InitialPawn\n\n\n//# sourceURL=webpack://views/../models/pieces/initial_pawn.js?");

/***/ }),

/***/ "../models/pieces/king.js":
/*!********************************!*\
  !*** ../models/pieces/king.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass King extends Piece {\n  constructor(position, color) {\n    super(position, King.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    moves.push( King.convertToMove(1, 1) )\n    moves.push( King.convertToMove(1, -1) )\n    moves.push( King.convertToMove(-1, 1) )\n    moves.push( King.convertToMove(-1, -1) )\n\n    moves.push( King.convertToMove(0, 1) )\n    moves.push( King.convertToMove(0, -1) )\n    moves.push( King.convertToMove(1, 0) )\n    moves.push( King.convertToMove(-1, 0) )\n\n    return moves\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wk.png' : './images/pieces/bk.png'\n  }\n}\n\nmodule.exports = King\n\n\n//# sourceURL=webpack://views/../models/pieces/king.js?");

/***/ }),

/***/ "../models/pieces/knight.js":
/*!**********************************!*\
  !*** ../models/pieces/knight.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Knight extends Piece {\n  constructor(position, color) {\n    super(position, Knight.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    moves.push( Knight.convertToMove(2, 1) )\n    moves.push( Knight.convertToMove(2, -1) )\n    moves.push( Knight.convertToMove(-2, 1) )\n    moves.push( Knight.convertToMove(-2, -1) )\n\n    moves.push( Knight.convertToMove(1, 2) )\n    moves.push( Knight.convertToMove(-1, 2) )\n    moves.push( Knight.convertToMove(1, -2) )\n    moves.push( Knight.convertToMove(-1, -2) )\n\n    return moves\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wn.png' : './images/pieces/bn.png'\n  }\n}\n\nmodule.exports = Knight\n\n\n//# sourceURL=webpack://views/../models/pieces/knight.js?");

/***/ }),

/***/ "../models/pieces/queen.js":
/*!*********************************!*\
  !*** ../models/pieces/queen.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Queen extends Piece {\n  constructor(position, color) {\n    super(position, Queen.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Queen.convertToMove(num, num) )\n      moves.push( Queen.convertToMove(num, -num) )\n      moves.push( Queen.convertToMove(-num, num) )\n      moves.push( Queen.convertToMove(-num, -num) )\n\n      moves.push( Queen.convertToMove(0, num) )\n      moves.push( Queen.convertToMove(0, -num) )\n      moves.push( Queen.convertToMove(num, 0) )\n      moves.push( Queen.convertToMove(-num, 0) )\n    })\n\n    return moves\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wq.png' : './images/pieces/bq.png'\n  }\n}\n\nmodule.exports = Queen\n\n\n//# sourceURL=webpack://views/../models/pieces/queen.js?");

/***/ }),

/***/ "../models/pieces/rook.js":
/*!********************************!*\
  !*** ../models/pieces/rook.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Rook extends Piece {\n  constructor(position, color) {\n    super(position, Rook.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Rook.convertToMove(0, num) )\n      moves.push( Rook.convertToMove(0, -num) )\n      moves.push( Rook.convertToMove(num, 0) )\n      moves.push( Rook.convertToMove(-num, 0) )\n    })\n\n    return moves\n  }\n\n  get imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wr.png' : './images/pieces/br.png'\n  }\n}\n\nmodule.exports = Rook\n\n\n//# sourceURL=webpack://views/../models/pieces/rook.js?");

/***/ }),

/***/ "../models/position.js":
/*!*****************************!*\
  !*** ../models/position.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Position {\n  constructor(line, column) {\n    this.line = line\n    this.column = column\n  }\n\n  createNewPosition(move) {\n    return new Position(this.line + move.line, this.column + move.column)\n  }\n\n  static createByCoord(coord) {\n    if(coord == '-')\n      return null\n\n    coord = coord.toLowerCase()\n\n    const coords = coord.split('')\n\n    const column = coords[0].charCodeAt() - 'a'.charCodeAt()\n    const line = 8 - parseInt(coords[1])\n\n    return new Position(line, column)\n  }\n\n  get isValid() {\n    (this.line >= 0 && this.line < 8) && (this.column >= 0 && this.column < 8)\n  }\n\n  isEqual(position) {\n    return position.line == this.line && position.column == this.column\n  }\n}\n\nmodule.exports = Position\n\n\n//# sourceURL=webpack://views/../models/position.js?");

/***/ }),

/***/ "./src/cell_input.js":
/*!***************************!*\
  !*** ./src/cell_input.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = (callback, context) => {\n  const cells = Array.prototype.slice.call( document.getElementsByTagName('td') )\n\n  cells.forEach(cell =>\n    cell.onclick = ev => callback.bind(context)(ev.target.dataset.cell))\n}\n\n\n//# sourceURL=webpack://views/./src/cell_input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderFunc = __webpack_require__(/*! ./render */ \"./src/render.js\")\nconst cellInputFunc = __webpack_require__(/*! ./cell_input */ \"./src/cell_input.js\")\nconst Board = __webpack_require__(/*! ../../models/board */ \"../models/board.js\")\n\nconst canvas = document.getElementById(\"board\")\nconst context = canvas.getContext(\"2d\")\n\n// Build Board\nconst board = new Board(\"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1\", context, renderFunc, cellInputFunc)\n\n// Render\nboard.render()\n\n\n//# sourceURL=webpack://views/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderBoard = __webpack_require__(/*! ./render_board.js */ \"./src/render_board.js\")\n\nmodule.exports = (context, pieces) => {\n  renderBoard(context)\n\n  pieces.forEach(piece => piece.drawImage(context))\n}\n\n\n//# sourceURL=webpack://views/./src/render.js?");

/***/ }),

/***/ "./src/render_board.js":
/*!*****************************!*\
  !*** ./src/render_board.js ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = (context) => {\n  const COLOR_1 = '#fcd8dd'\n  const COLOR_2 = '#ffffff'\n\n  let color = COLOR_1\n\n  for(let line = 0; line < 9; line++) {\n    for(let column = 0; column < 9; column++) {\n      color = (color == COLOR_2) ? COLOR_1 : COLOR_2\n      context.fillStyle = color\n      context.fillRect(100*line, 100*column, 100, 100)\n    }\n  }\n}\n\n\n//# sourceURL=webpack://views/./src/render_board.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;