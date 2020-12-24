import React from 'react';
// import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
import styles from './Videos.module.scss';

const Videos = () => (
  <div className={styles.videos}>
    <div className={styles.videoRow}>
      <div className={styles.videoPlayer}>
        <ReactPlayer className={styles.reactPlayer} url="https://www.youtube.com/watch?v=-of9da8ykLM" width="100%" height="100%" />
      </div>
      <div className={styles.videoText}>
        <p className="text--subhead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nemo iste harum magni
          perspiciatis, obcaecati vero quibusdam vel doloremque laboriosam nisi eligendi quas quam
          soluta excepturi! Reprehenderit repellat voluptates pariatur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Inventore sed at blanditiis corporis vel numquam!
        </p>
      </div>
    </div>
    <div className={styles.videoRow__reverse}>
      <div className={styles.videoText}>
        <p className="text--subhead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nemo iste harum magni
          perspiciatis, obcaecati vero quibusdam vel doloremque laboriosam nisi eligendi quas quam
          soluta excepturi! Reprehenderit repellat voluptates pariatur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Inventore sed at blanditiis corporis vel numquam!
        </p>
      </div>
      <div className={styles.videoPlayer}>
        <ReactPlayer className={styles.reactPlayer} url="https://www.youtube.com/watch?v=-of9da8ykLM" width="100%" height="100%" />
      </div>
    </div>
  </div>
);

// Videos.propTypes = {};

export default Videos;
