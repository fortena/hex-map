import React from 'react';
import PropTypes from 'prop-types';
import styles from './hex-map.module.css';

const HexMap = ({ children }) => <div className={styles['hex-map']}>{children}</div>;

HexMap.displayName = 'HexMap';

HexMap.propTypes = {
  children: PropTypes.node,
};

export default HexMap;
