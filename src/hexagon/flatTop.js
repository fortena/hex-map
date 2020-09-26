const THETAS = [0, 1, 2, 3, 4, 5].map((i) => (Math.PI / 3) * i);
const SQRT3 = Math.sqrt(3);

export const corners = (x, y, size) =>
  THETAS.map((theta) => theta).map((theta) => [
    x + size * Math.cos(theta),
    y + size * Math.sin(theta),
  ]);

export const gridPoint = ({ oX, oY, height, width, size, gridX, gridY }) => {
  const offsetX = (gridY % 2) * width * 0.75;
  const gridPointX = gridX * width * 1.5 + offsetX;
  const gridPointY = (gridY * height) / 2;

  const x = gridPointX + oX;
  const y = gridPointY + oY;

  return {
    x,
    y,
    points: corners(x, y, size)
      .map((p) => p.join(','))
      .join(' '),
  };
};

const range = (n) => Array.from(Array(n).keys());
const product = (p, q) => {
  const l = [];
  range(p).forEach((i) => {
    range(q).forEach((j) => {
      l.push([i, j]);
    });
  });
  return l;
};

export const gridPoints = ({ oX, oY, size, columns, rows }) => {
  const prod = product(rows, columns);
  const height = size * Math.sqrt(3);
  const width = size * 2;
  return prod.map(([gridY, gridX]) =>
    gridPoint({
      oX: oX || size,
      oY: oY || (size * SQRT3) / 2,
      size,
      height,
      width,
      gridX,
      gridY,
    })
  );
};
