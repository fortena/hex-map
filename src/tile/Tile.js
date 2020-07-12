import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './tile.module.css';

const Tile = ({ children, className, onClick, x, y, terrain }) => (
  // <div className={classnames(styles.hex, className, { [styles['hex-gap']]: shiftLeft })}>
  <div className={classnames(styles.hex, className, styles[terrain])} onClick={onClick}>
    {children}
    <div className={styles['corner-1']}></div>
    <div className={styles['corner-2']}></div>
  </div>
);

Tile.displayName = 'Tile';

Tile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Tile;
