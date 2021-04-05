class Position {
  constructor(line, column) {
    this.line = line
    this.column = column
  }

  createNewPosition(move) {
    new Position(line + move.line, column + move.column)
  }

  static createByCoord(coord) {
    if(coord == '-')
      return null

    const coords = coord.split('')

    const column = coords[0].charCodeAt() - 'a'.charCodeAt()
    const line = 8 - parseInt(coords[1])

    return new Position(line, column)
  }

  get isValid() {
    (line >= 0 && line < 8) && (column >= 0 && column < 8)
  }
}

module.exports = Position
