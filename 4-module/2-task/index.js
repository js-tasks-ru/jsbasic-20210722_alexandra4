function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.cssText= `background-color: red`;
  }
  return table;
  // let cell = table.rows[0].cells[0];
}