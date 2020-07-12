import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './tile.module.css';

const Tile = ({ className }) => (
  // <div className={classnames(styles.hex, className, { [styles['hex-gap']]: shiftLeft })}>
  <div className={classnames(styles.hex, className)}>
    {/* <div className="inner">
      <h4>HOME</h4>
      <hr />
      <p>Home Sweet Home</p>
    </div> */}
    {/* <a href="#"></a> */}
    <div className={styles['corner-1']}></div>
    <div className={styles['corner-2']}></div>
  </div>
);

Tile.displayName = 'Tile';

Tile.propTypes = {
  // shiftLeft: PropTypes.bool,
  className: PropTypes.string,
};

export default Tile;
