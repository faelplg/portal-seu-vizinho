/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import styles from '../styles/Landing.module.scss';

export default function Home() {
  const navLinks = [
    {
      key: 1,
      btnType: 'link',
      btnText: 'Quem somos',
    },
    {
      key: 2,
      btnType: 'link',
      btnText: 'Eixos de atuação',
    },
    {
      key: 3,
      btnType: 'link',
      btnText: 'Nossa história',
    },
    {
      key: 4,
      btnType: 'link',
      btnText: 'Contato',
    },
    {
      key: 5,
      btnType: 'outline',
      btnText: 'Quero apoiar',
    },
  ];
  return (
    <>
      <Head>
        <title>Home | Seu Vizinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navLinks={navLinks} />

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          Fael.Tech
        </a>
      </footer>
    </>
  );
}
