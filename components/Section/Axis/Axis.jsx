import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Axis.module.scss';

const Act = ({ imgSrc, title, children }) => (
  <div className={styles.Act}>
    <Image
      src={imgSrc}
      alt="Foto do Bloco Seu Vizinho."
      width="160"
      height="160"
    />
    <h3 className="text--subhead">{title}</h3>
  </div>
);

const Axis = () => {
  console.log('[Axis]: component rendered');
  return (
    <div className={styles.Axis}>
      <Act imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
      <Act imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
      <Act imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
      <Act imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
      <Act imgSrc="/img-hero-bordered-01_421x421.png" title="Arte, Cultura e Educação" />
    </div>
  );
};

Act.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Axis;
