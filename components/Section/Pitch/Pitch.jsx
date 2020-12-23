import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Pitch.module.scss';

const Pitch = () => (
  <div className={styles.Pitch}>
    <h1 className="text--display-1">O Seu Vizinho</h1>
    <p className="text--subhead">
      O Seu Vizinho é uma Escola de artes, livre e periférica de formação,
      socialização e geração de renda, no Aglomerado da Serra, que combina arte,
      produção cultural e apoio socioassistencial para valorização da cultura
      preta e favelada e o combate das desigualdades territoriais, de classe, raça e gênero.
    </p>
  </div>
);

// Pitch.propTypes = {};

export default Pitch;
