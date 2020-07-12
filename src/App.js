import React, { useState } from 'react';
import HexMap from './hexMap/HexMap';
import HexRow from './hexRow/HexRow';
import Tile from './tile/Tile';
import { matrix } from './utils';

const localMap = JSON.parse(localStorage.getItem('hex-map'));
const initMapMatrix = localMap || matrix({ numRows: 7, numCols: 10 });

const updateTerrain = (currentTerrain) => {
  switch (currentTerrain) {
    case 'ocean':
      return 'grass';
    case 'grass':
      return 'ocean';
    default:
      return 'ocean';
  }
};

const App = () => {
  const [mapMatrix, setMapMatrix] = useState(initMapMatrix);
  return (
    <HexMap>
      {mapMatrix.map((rows, i) => (
        <HexRow key={i} shiftLeft={i % 2 === 1}>
          {rows.map(({ key, terrain, x, y }) => (
            <Tile
              key={key}
              x={x}
              y={y}
              terrain={terrain}
              onClick={() => {
                const updatedMap = [...mapMatrix];
                updatedMap[y][x].terrain = updateTerrain(terrain);
                setMapMatrix(updatedMap);
                localStorage.setItem('hex-map', JSON.stringify(updatedMap));
              }}
            />
          ))}
        </HexRow>
      ))}
    </HexMap>
  );
};

export default App;
