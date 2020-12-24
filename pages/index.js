/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import NavBtn from '../components/Navbar/NavBtn';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Pitch from '../components/Section/Pitch';
import Axes from '../components/Section/Axes';
import Results from '../components/Section/Results';
import Videos from '../components/Section/Videos';
import Testimonials from '../components/Section/Testimonials';
import Partners from '../components/Section/Partners';
import { links } from '../constants/navigation.constants';
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
          <Section>
            <Pitch />
            <Results />
          </Section>
          <Section title="Eixos de Atuação" attach>
            <Axes />
          </Section>
          <Section palette="secondary">
            <Videos />
          </Section>
          <Section palette="light" title="Depoimentos">
            <Testimonials />
          </Section>
          <Section palette="medium" title="Parceiros">
            <Partners />
          </Section>
        </main>
      )}

      {!isLoading && (
        <footer className={styles.footer}>
          <div className={styles.footerLogo}>
            <Image src="/logo-white_292x207.png" width="160" height="113" />
          </div>
          <div className={styles.footerHeadline}>
            <code>Escola de Artes, Livre e Periférica</code>
          </div>
          <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
              <NavBtn href="/quem-somos" target="_blank" rel="noreferrer">
                Quem Somos
              </NavBtn>
              <NavBtn href="/eixos-de-atuacao" target="_blank" rel="noreferrer">
                Eixos de Atuação
              </NavBtn>
              <NavBtn href="https://evoe.cc/seuvizinho" target="_blank" rel="noreferrer" outline>
                Quero apoiar
              </NavBtn>
            </div>
            <div className={styles.footerColumn}>
              <NavBtn href="https://www.facebook.com/blocoseuvizinho/">
                facebook.com/blocoseuvizinho
              </NavBtn>
              <NavBtn href="https://www.instagram.com/seuvizinho_/">
                instagram.com/seuvizinho_
              </NavBtn>
              <NavBtn href="https://www.youtube.com/SeuVizinho">youtube.com/SeuVizinho</NavBtn>
            </div>
            <div className={styles.footerColumn}>
              <NavBtn href>31 9 9704-7782</NavBtn>
              <NavBtn href>31 9 9852-0088</NavBtn>
              <NavBtn href="mailto:projetoseuvizinho@gmail.com">projetoseuvizinho@gmail.com</NavBtn>
            </div>
          </div>
          <div className={styles.footerRow}>
            <p className="text--caption">
              <span className={styles.glow}> Copyright © by </span>
              Projeto Seu Vizinho, CNPJ -
              39.344.173/0001-62 &nbsp;|&nbsp; End: Rua Doutor Alípio Goulart, nº 911, Bairro Serra
              (Aglomerado da Serra/Vila Marçola), BH/MG - Todos os direitos reservados
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
