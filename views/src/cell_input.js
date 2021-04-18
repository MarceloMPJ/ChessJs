module.exports = (callback, context) => {
  const cells = Array.prototype.slice.call( document.getElementsByTagName('td') )

  cells.forEach(cell =>
    cell.onclick = ev => callback.bind(context)(ev.target.dataset.cell))
}
