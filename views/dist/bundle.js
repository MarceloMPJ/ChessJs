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

eval("const PLAYER = __webpack_require__(/*! ./enums/player */ \"../models/enums/player.js\")\n\nconst Pawn = __webpack_require__(/*! ./pieces/pawn */ \"../models/pieces/pawn.js\")\nconst Rook = __webpack_require__(/*! ./pieces/rook */ \"../models/pieces/rook.js\")\nconst Knight = __webpack_require__(/*! ./pieces/knight */ \"../models/pieces/knight.js\")\nconst Bishop = __webpack_require__(/*! ./pieces/bishop */ \"../models/pieces/bishop.js\")\nconst Queen = __webpack_require__(/*! ./pieces/queen */ \"../models/pieces/queen.js\")\nconst King = __webpack_require__(/*! ./pieces/king */ \"../models/pieces/king.js\")\n\nconst Position = __webpack_require__(/*! ../models/position */ \"../models/position.js\")\n\nclass FenParser {\n  constructor(fen) {\n    this.fen = fen\n    this.rows = fen.split(/[\\/ ]/)\n  }\n\n  get pieces() {\n    return this.rows.map((row, line) => {\n      return row.split(\"\").map((pieceStr, column) => {\n        let position = new Position(line, column)\n        return this.createPiece(pieceStr, position)\n      })\n    }).flat().filter(piece => piece != null)\n  }\n\n  createPiece(pieceStr, position) {\n    let piece = null\n\n    switch(pieceStr) {\n      case 'p':\n        piece = new Pawn(position, PLAYER.black)\n        break;\n      case 'P':\n        piece = new Pawn(position, PLAYER.white)\n        break;\n      case 'r':\n        piece = new Rook(position, PLAYER.black)\n        break;\n      case 'R':\n        piece = new Rook(position, PLAYER.white)\n        break;\n      case 'n':\n        piece = new Knight(position, PLAYER.black)\n        break;\n      case 'N':\n        piece = new Knight(position, PLAYER.white)\n        break;\n      case 'b':\n        piece = new Bishop(position, PLAYER.black)\n        break;\n      case 'B':\n        piece = new Bishop(position, PLAYER.white)\n        break;\n      case 'q':\n        piece = new Queen(position, PLAYER.black)\n        break;\n      case 'Q':\n        piece = new Queen(position, PLAYER.white)\n        break;\n      case 'k':\n        piece = new King(position, PLAYER.black)\n        break;\n      case 'K':\n        piece = new King(position, PLAYER.white)\n        break;\n    }\n\n    return piece\n  }\n}\n\nmodule.exports = FenParser\n\n\n//# sourceURL=webpack://views/../models/fen_parser.js?");

/***/ }),

/***/ "../models/piece.js":
/*!**************************!*\
  !*** ../models/piece.js ***!
  \**************************/
/***/ ((module) => {

eval("class Piece {\n  constructor(position, moves, color) {\n    this.position = position\n    this.moves = moves\n    this.color = color\n  }\n\n  static convertToMove(line, column) {\n    return { line: line, column: column }\n  }\n\n  get validPositions() {\n    const positions = this.newPositions()\n    return positions.reduce(position => position.isValid)\n  }\n\n  drawImage(context) {\n    const base_image = new Image()\n    base_image.src = this.imageUrl()\n\n    base_image.onload = () =>\n      context.drawImage(base_image, this.position.column * 100, this.position.line * 100, 100, 100)\n  }\n\n  newPositions() {\n    return this.moves.map(move => this.createNewPosition(move))\n  }\n}\n\nmodule.exports = Piece\n\n\n//# sourceURL=webpack://views/../models/piece.js?");

/***/ }),

/***/ "../models/pieces/bishop.js":
/*!**********************************!*\
  !*** ../models/pieces/bishop.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Bishop extends Piece {\n  constructor(position, color) {\n    super(position, Bishop.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Bishop.convertToMove(num, num) )\n      moves.push( Bishop.convertToMove(num, -num) )\n      moves.push( Bishop.convertToMove(-num, num) )\n      moves.push( Bishop.convertToMove(-num, -num) )\n    })\n\n    return moves\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wb.png' : './images/pieces/bb.png'\n  }\n}\n\nmodule.exports = Bishop\n\n\n//# sourceURL=webpack://views/../models/pieces/bishop.js?");

/***/ }),

/***/ "../models/pieces/king.js":
/*!********************************!*\
  !*** ../models/pieces/king.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass King extends Piece {\n  constructor(position, color) {\n    super(position, King.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    moves.push( King.convertToMove(1, 1) )\n    moves.push( King.convertToMove(1, -1) )\n    moves.push( King.convertToMove(-1, 1) )\n    moves.push( King.convertToMove(-1, -1) )\n\n    moves.push( King.convertToMove(0, 1) )\n    moves.push( King.convertToMove(0, -1) )\n    moves.push( King.convertToMove(1, 0) )\n    moves.push( King.convertToMove(-1, 0) )\n\n    return moves\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wk.png' : './images/pieces/bk.png'\n  }\n}\n\nmodule.exports = King\n\n\n//# sourceURL=webpack://views/../models/pieces/king.js?");

/***/ }),

/***/ "../models/pieces/knight.js":
/*!**********************************!*\
  !*** ../models/pieces/knight.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Knight extends Piece {\n  constructor(position, color) {\n    super(position, Knight.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    moves.push( Knight.convertToMove(2, 1) )\n    moves.push( Knight.convertToMove(2, -1) )\n    moves.push( Knight.convertToMove(-2, 1) )\n    moves.push( Knight.convertToMove(-2, -1) )\n\n    moves.push( Knight.convertToMove(1, 2) )\n    moves.push( Knight.convertToMove(-1, 2) )\n    moves.push( Knight.convertToMove(1, -2) )\n    moves.push( Knight.convertToMove(-1, -2) )\n\n    return moves\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wn.png' : './images/pieces/bn.png'\n  }\n}\n\nmodule.exports = Knight\n\n\n//# sourceURL=webpack://views/../models/pieces/knight.js?");

/***/ }),

/***/ "../models/pieces/pawn.js":
/*!********************************!*\
  !*** ../models/pieces/pawn.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Pawn extends Piece {\n  constructor(position, color) {\n    const moves = color == PLAYER.white ? [{ column: 0, line: -1 }] : [{ column: 0, line: 1 }]\n\n    super(position, moves, color)\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wp.png' : './images/pieces/bp.png'\n  }\n}\n\nmodule.exports = Pawn\n\n\n//# sourceURL=webpack://views/../models/pieces/pawn.js?");

/***/ }),

/***/ "../models/pieces/queen.js":
/*!*********************************!*\
  !*** ../models/pieces/queen.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Queen extends Piece {\n  constructor(position, color) {\n    super(position, Queen.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Queen.convertToMove(num, num) )\n      moves.push( Queen.convertToMove(num, -num) )\n      moves.push( Queen.convertToMove(-num, num) )\n      moves.push( Queen.convertToMove(-num, -num) )\n\n      moves.push( Queen.convertToMove(0, num) )\n      moves.push( Queen.convertToMove(0, -num) )\n      moves.push( Queen.convertToMove(num, 0) )\n      moves.push( Queen.convertToMove(-num, 0) )\n    })\n\n    return moves\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wq.png' : './images/pieces/bq.png'\n  }\n}\n\nmodule.exports = Queen\n\n\n//# sourceURL=webpack://views/../models/pieces/queen.js?");

/***/ }),

/***/ "../models/pieces/rook.js":
/*!********************************!*\
  !*** ../models/pieces/rook.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../enums/player */ \"../models/enums/player.js\")\nconst RANGE = __webpack_require__(/*! ../enums/range */ \"../models/enums/range.js\")\n\nconst Piece = __webpack_require__(/*! ../piece */ \"../models/piece.js\")\n\nclass Rook extends Piece {\n  constructor(position, color) {\n    super(position, Rook.generateMoves(), color)\n  }\n\n  static generateMoves() {\n    const moves = []\n\n    RANGE.forEach(num => {\n      moves.push( Rook.convertToMove(0, num) )\n      moves.push( Rook.convertToMove(0, -num) )\n      moves.push( Rook.convertToMove(num, 0) )\n      moves.push( Rook.convertToMove(-num, 0) )\n    })\n\n    return moves\n  }\n\n  imageUrl() {\n    return this.color == PLAYER.white ? './images/pieces/wr.png' : './images/pieces/br.png'\n  }\n}\n\nmodule.exports = Rook\n\n\n//# sourceURL=webpack://views/../models/pieces/rook.js?");

/***/ }),

/***/ "../models/position.js":
/*!*****************************!*\
  !*** ../models/position.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Position {\n  constructor(line, column) {\n    this.line = line\n    this.column = column\n  }\n\n  createNewPosition(move) {\n    new Position(line + move.line, column + move.column)\n  }\n\n  get isValid() {\n    (line >= 0 && line < 8) && (column >= 0 && column < 8)\n  }\n}\n\nmodule.exports = Position\n\n\n//# sourceURL=webpack://views/../models/position.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const PLAYER = __webpack_require__(/*! ../../models/enums/player.js */ \"../models/enums/player.js\")\nconst Pawn = __webpack_require__(/*! ../../models/pieces/pawn.js */ \"../models/pieces/pawn.js\")\nconst Position = __webpack_require__(/*! ../../models/position.js */ \"../models/position.js\")\nconst FenParser = __webpack_require__(/*! ../../models/fen_parser */ \"../models/fen_parser.js\")\n\nconst render = __webpack_require__(/*! ./render.js */ \"./src/render.js\")\n\nconst canvas = document.getElementById(\"board\")\nconst context = canvas.getContext(\"2d\")\n\n// Create Pieces\nconst fen_parser = new FenParser(\"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1\")\n\n// let position_1 = new Position(1, 0)\n// let pawn_1 = new Pawn(position_1, PLAYER.black)\n\n// let position_2 = new Position(2, 1)\n// let pawn_2 = new Pawn(position_2, PLAYER.black)\n\n// Render\nconsole.log(fen_parser.pieces)\nrender(context, fen_parser.pieces)\n\n\n//# sourceURL=webpack://views/./src/index.js?");

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