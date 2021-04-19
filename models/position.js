class Position {
  constructor(line, column) {
    this.line = line
    this.column = column
  }

  createNewPosition(move) {
    return new Position(this.line + move.line, this.column + move.column)
  }

  static createByCoord(coord) {
    if(coord == '-')
      return null

    coord = coord.toLowerCase()

    const coords = coord.split('')

    const column = coords[0].charCodeAt() - 'a'.charCodeAt()
    const line = 8 - parseInt(coords[1])

    return new Position(line, column)
  }

  get isValid() {
    return (this.line >= 0 && this.line < 8) && (this.column >= 0 && this.column < 8)
  }

  isEqual(position) {
    return position.line == this.line && position.column == this.column
  }
}

module.exports = Position
