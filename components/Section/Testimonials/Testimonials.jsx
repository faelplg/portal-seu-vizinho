import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.scss';

const Testimonial = ({ imgSrc, name }) => (
  <div className={styles.testimonial}>
    <div className={styles.testimonialImg}>
      <Image src={imgSrc} width="160px" height="160px" />
    </div>
    <div className={styles.testimonialText}>
      <h3 className="text--title">{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat, eius autem non
        expedita voluptates assumenda debitis, vel similique esse quas repellat soluta nobis dolores
        officiis, molestiae modi impedit optio?
      </p>
    </div>
  </div>
);

const Testimonials = () => (
  <div className={styles.testimonials}>
    <Testimonial imgSrc="/babi-ribeiro.png" name="Babi Ribeiro" />
    <Testimonial imgSrc="/pv.png" name="Paulo Vitor" />
    <Testimonial imgSrc="/matheus-lobo.png" name="Matheus Lobo" />
  </div>
);

Testimonial.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Testimonials;
