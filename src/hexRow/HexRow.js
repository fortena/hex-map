import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './hex-row.module.css';

const HexRow = ({ children, shiftLeft }) => (
  <div className={classnames({ [styles['shift-left']]: shiftLeft })}>{children}</div>
);

HexRow.displayName = 'HexRow';

HexRow.propTypes = {
  children: PropTypes.node,
  shiftLeft: PropTypes.bool,
};

export default HexRow;
