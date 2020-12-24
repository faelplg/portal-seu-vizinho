import Image from 'next/image';
import NavBtn from '../Navbar/NavBtn';
import styles from './Hero.module.scss';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroMain}>
      <div className={styles.heroMain__logo}>
        <Image src="/logo-text_green-orange_444x256.png" layout="fill" />
      </div>
      <NavBtn href="#pitch" raised>Saiba mais</NavBtn>
    </div>
    <div className={styles.heroArt}>
      <div className={styles.heroArt__img}>
        <Image src="/img-hero_758x482.png" layout="responsive" width="758" height="482" />
      </div>
    </div>
  </section>
);

export default Hero;
