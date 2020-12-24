import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Partners.module.scss';

const Partner = ({ imgSrc }) => (
  <div className={styles.partnerImg}>
    <Image src={imgSrc} layout="fill" />
  </div>
);

const Partners = () => (
  <div className={styles.partners}>
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
    <Partner imgSrc="/cadence.png" />
  </div>
);

Partner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Partners;
