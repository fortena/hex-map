export const matrix = ({ numRows, numCols }) => {
  const rows = [];
  for (let y = 0; y < numRows; y++) {
    const column = [];
    for (let x = 0; x < numCols; x++) {
      column.push({ key: `${x},${y}`, x, y, type: 'ocean' });
    }
    rows.push(column);
  }
  return rows;
};
