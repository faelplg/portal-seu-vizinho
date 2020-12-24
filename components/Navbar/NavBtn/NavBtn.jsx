import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBtn.module.scss';

const NavBtn = React.forwardRef(({
  onClick, href, target, rel, outline, children,
}, ref) => (
  <a
    href={href}
    onClick={onClick}
    ref={ref}
    target={target}
    rel={rel}
    className={[
      styles.navBtn,
      styles.navBtnLink,
      outline ? styles.navBtnOutline : '',
    ].join(' ')}
  >
    {children}
  </a>
));

NavBtn.displayName = 'NavBtn';
NavBtn.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
NavBtn.defaultProps = {
  onClick: null,
  href: '',
  target: '_self',
  rel: '',
  outline: false,
};

export default NavBtn;
