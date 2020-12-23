/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import links from '../constants/navigation.constants';
import styles from '../styles/Landing.module.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Seu Vizinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isLoading && <Navbar navLinks={links} />}

      {!isLoading && (
        <main className={styles.main}>
          <Hero />
          <Section title="Pitch" />
          <Section title="Eixos de Atuação" />
          <Section title="Indicadores" />
          <Section title="Vídeos" />
          <Section title="Depoimentos" />
          <Section title="Parceiros" />
          <Section title="Redes sociais e Contatos" />
        </main>
      )}

      {!isLoading && (
        <footer className={styles.footer}>
          <h2 className="text--title">Mais informações sobre o Seu Vizinho</h2>
        </footer>
      )}
    </>
  );
}
