import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ btnType, children }) => {
  let typeClass = '';
  switch (btnType) {
    case 'link':
      typeClass = 'btnLink';
      break;
    case 'outline':
      typeClass = 'btnOutline';
      break;
    case 'icon':
      typeClass = 'btnIcon';
      break;
    default:
      typeClass = 'btnDefault';
      break;
  }
  return (
    <button
      type="button"
      className={[styles.btn, styles[typeClass]].join(' ')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  btnType: PropTypes.string,
};

Button.defaultProps = {
  btnType: 'buttonDefault',
};

export default Button;
