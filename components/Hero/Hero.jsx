import Image from 'next/image';
import Button from '../Button';
import styles from './Hero.module.scss';

const Hero = () => {
  console.log('[Hero]: component rendered');

  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <div className={styles.heroMain__logo}>
          <Image src="/logo-text_green-orange_444x256.png" layout="fill" />
        </div>
        <Button btnType="raised" btnSize="lg">Saiba mais</Button>
      </div>
      <div className={styles.heroArt}>
        <div className={styles.heroArt__photo}>
          <Image
            src="/img-hero-bordered-01_421x421.png"
            alt="Foto do Bloco Seu Vizinho."
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
