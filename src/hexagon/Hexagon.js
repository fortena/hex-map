import React from 'react';
import PropTypes from 'prop-types';

const Hexagon = ({ x, y, points, fill, stroke }) => (
  <polygon
    x={x}
    y={y}
    fill={fill}
    stroke={stroke}
    points={points}
    onClick={() => {
      console.log(`${x},${y}`);
    }}
  />
);

Hexagon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

export default Hexagon;
