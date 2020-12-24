import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.module.scss';

const Result = ({ resultValue, description }) => (
  <div className={styles.Result}>
    <h2 className="text--display-2">
      +
      {resultValue}
    </h2>
    <p>{description}</p>
  </div>
);

const Results = () => (
  <div className={styles.Results}>
    <Result resultValue="80" description="crianças e jovens participantes" />
    <Result resultValue="20" description="idosas beneficiadas pelos projetos" />
    <Result resultValue="08" description="turmas de oficinas artístico-culturais" />
    <Result resultValue="07" description="aprovações em editais públicos" />
  </div>
);

Result.propTypes = {
  resultValue: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Results;
