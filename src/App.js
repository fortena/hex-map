import React from 'react';
import './App.css';
import HexMap from './hexMap/HexMap';
import HexRow from './hexRow/HexRow';
import Tile from './tile/Tile';
import { matrix } from './utils';

const App = () => (
  <HexMap>
    {matrix({ numRows: 7, numCols: 10 }).map((row, y) => (
      <HexRow key={y} shiftLeft={y % 2 === 1}>
        {row.map(({ key }) => (
          <Tile key={key} />
        ))}
      </HexRow>
    ))}
  </HexMap>
);

export default App;
