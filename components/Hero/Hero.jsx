import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  console.log('[Hero]');
  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <Image src="/logo-text_green-orange_444x256.png" width="444" height="256" />
      </div>
      <div className={styles.heroArt}>
        <Image src="/img-hero-01_421x421.png" className={styles.pictureArt} width="421" height="421" />
      </div>
    </section>
  );
};

export default Hero;
