import React from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import Building from '../../components/Building';
import styles from './AxesPage.module.scss';

const AxesPage = () => (
  <>
    <Head>
      <title>Eixos de Atuação | Seu Vizinho</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Building />
    </main>
  </>
);

// AxesPage.propTypes = {};

export default AxesPage;
