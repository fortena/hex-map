export const pointyToppedGrid = (oX, oY, size, gridX, gridY) => {
  const height = size * 2;
  const width = size * SQRT3;
  const diffXFromY = (gridY * width) / 2;
  const gridPointX = gridX * width + diffXFromY;
  const gridPointY = gridY * height * 0.75;

  const x = gridPointX + oX;
  const y = gridPointY + oY;

  return {
    props: {
      type: POINTY,
      x,
      y,
      size,
    },
    gridX,
    gridY,
    corners: hexCorners(POINTY, x, y, size),
  };
};
