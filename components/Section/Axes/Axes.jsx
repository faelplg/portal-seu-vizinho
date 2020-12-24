import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Axes.module.scss';

const Axis = ({ imgSrc, title }) => (
  <div className={styles.Axis}>
    <Image
      src={imgSrc}
      alt="Foto do Bloco Seu Vizinho."
      width="160"
      height="160"
    />
    <h3 className="text--subhead">{title}</h3>
  </div>
);

const Axes = () => (
  <div className={styles.Axes}>
    <Axis imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
    <Axis imgSrc="/img-hero-bordered-01_421x421.png" title="Produção Cultural" />
    <Axis imgSrc="/img-hero-bordered-01_421x421.png" title="Apoio Socioassistencial" />
    <Axis imgSrc="/img-hero-bordered-01_421x421.png" title="Produtos" />
    <Axis imgSrc="/img-hero-bordered-01_421x421.png" title="Serviços" />
  </div>
);

Axis.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Axes;
