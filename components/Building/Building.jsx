import React from 'react';
import Link from 'next/link';
import NavBtn from '../Navbar/NavBtn';
import styles from './Building.module.scss';

const Building = () => (
  <div className={styles.building}>
    <h2 className="text--display-2">Página em construção</h2>
    <Link href="/" passHref>
      <NavBtn>Voltar</NavBtn>
    </Link>

  </div>
);

export default Building;
