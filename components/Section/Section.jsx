import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title }) => (
  <section className={styles.section}>
    <div className={styles.sectionHeadline}>
      <h1 className="text--headline">
        { title }
      </h1>
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
