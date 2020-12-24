import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({
  title, palette, attach, children,
}) => {
  const attachClass = attach ? 'sectionAttached' : '';
  let paletteClass = '';
  switch (palette) {
    case 'secondary':
      paletteClass = 'sectionPalette__secondary';
      break;
    case 'light':
      paletteClass = 'sectionPalette__light';
      break;
    case 'medium':
      paletteClass = 'sectionPalette__medium';
      break;
    case 'dark':
      paletteClass = 'sectionPalette__dark';
      break;
    default:
      paletteClass = 'sectionPalette__default';
      break;
  }
  return (
    <section className={[styles.section, styles[paletteClass], styles[attachClass]].join(' ')}>
      <div className={styles.sectionHeadline}>
        <h1 className="text--headline">
          { title }
        </h1>
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  palette: PropTypes.string,
  attach: PropTypes.bool,
  children: PropTypes.node,
};

Section.defaultProps = {
  title: '',
  palette: '',
  attach: false,
  children: null,
};

export default Section;
