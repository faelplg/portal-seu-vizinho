import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ btnType, btnSize, children }) => {
  let typeClass = '';
  let sizeClass = '';
  switch (btnType) {
    case 'raised':
      typeClass = 'btnRaised';
      break;
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
  switch (btnSize) {
    case 'sm':
      sizeClass = 'btnSm';
      break;
    case 'lg':
      sizeClass = 'btnLg';
      break;
    default:
      sizeClass = 'btnMd';
      break;
  }
  return (
    <button
      type="button"
      className={[styles.btn, styles[typeClass], styles[sizeClass]].join(' ')}
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
  btnSize: PropTypes.string,
};

Button.defaultProps = {
  btnType: 'btnDefault',
  btnSize: 'btnMd',
};

export default Button;
