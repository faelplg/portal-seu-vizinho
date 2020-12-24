import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import Button from '../Button';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = ({ navLinks }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 128) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // const navButtons = navLinks.map((link) => (
  //   <Button key={link.key} btnType={link.btnType}>
  //     { link.btnText }
  //   </Button>
  // ));

  const navButtons = navLinks.map((link) => (
    <Link key={link.key} href="/about">
      <a href className={[styles.navBtn, styles.navBtnLink, link.btnOutline ? styles.navBtnOutline : ''].join(' ')}>{ link.btnText }</a>
    </Link>
  ));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={[styles.navbar, scrolled ? styles.scrolled : null].join(' ')}>
      <div className={styles.navbarLeft}>
        <Image src="/navbar-logo_100x100.png" alt="Logomarca do Seu Vizinho" width={40} height={40} />
        <p className="text--code">Escola de Artes, Livre e Periférica</p>
      </div>
      <nav className={styles.navbarRight}>
        {navButtons}
      </nav>
      <div className={styles.navbarMenu}>
        <Button btnType="icon">
          <IconContext.Provider value={{ className: 'reactIcons' }}>
            <FiMenu />
          </IconContext.Provider>
        </Button>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
