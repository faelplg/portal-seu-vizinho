import React from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import Building from '../../components/Building';
import styles from './AboutPage.module.scss';

const AboutPage = () => (
  <>
    <Head>
      <title>Quem somos | Seu Vizinho</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Building />
    </main>
  </>
);

// AboutPage.propTypes = {};

export default AboutPage;
