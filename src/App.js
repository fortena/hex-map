import React from 'react';
// import { gridPoints } from './hex/utils';
import { gridPoints } from './hexagon/flatTop';
import Hexagon from './hexagon/Hexagon';

const TILE_SIZE = 10;
const COLUMNS = 100;
const ROWS = 100;

const SQRT3 = Math.sqrt(3);
const shortDiagonal = SQRT3 * TILE_SIZE;
const rowHeight = shortDiagonal / 2;
const HEIGHT_MARGIN = 1;
const height = HEIGHT_MARGIN + rowHeight + rowHeight * ROWS;

const columnWidth = 3 * TILE_SIZE;
const WIDTH_MARGIN = 2;
const width = WIDTH_MARGIN + TILE_SIZE / 2 + columnWidth * COLUMNS;

const App = () => {
  const grid = gridPoints({ size: TILE_SIZE, columns: COLUMNS, rows: ROWS });
  const hexes = grid.map(({ x, y, points }) => (
    <Hexagon key={`${x},${y}`} x={x} y={y} points={points} fill="white" stroke="black" />
  ));

  return (
    <svg width={`${width}`} height={`${height}`}>
      {hexes}
    </svg>
  );
};

export default App;
