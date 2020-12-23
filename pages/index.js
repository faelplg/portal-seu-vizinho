/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Pitch from '../components/Section/Pitch';
import Axes from '../components/Section/Axis';
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
          <Section palette="default">
            <Pitch />
          </Section>
          <Section title="Eixos de Atuação" attach>
            <Axes />
          </Section>
          <Section palette="light" title="Indicadores"></Section>
          <Section palette="light" title="Vídeos" />
          <Section palette="light" title="Depoimentos" />
          <Section palette="light" title="Parceiros" />
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
