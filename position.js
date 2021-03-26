class Position {
  constructor(line, column) {
    this.line = line
    this.column = column
  }

  createNewPosition(move) {
    new Position(line + move.line, column + move.column)
  }

  get isValid() {
    (line >= 0 && line < 8) && (column >= 0 && column < 8)
  }
}

module.exports = Position
