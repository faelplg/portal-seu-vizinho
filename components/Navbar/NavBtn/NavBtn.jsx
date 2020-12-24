import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBtn.module.scss';

const NavBtn = React.forwardRef(({
  onClick, href, target, rel, outline, raised, children,
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
      raised ? styles.navBtnRaised : '',
      raised ? styles.navBtnLg : '',
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
  raised: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
NavBtn.defaultProps = {
  onClick: null,
  href: '',
  target: '_self',
  rel: '',
  outline: false,
  raised: false,
};

export default NavBtn;
