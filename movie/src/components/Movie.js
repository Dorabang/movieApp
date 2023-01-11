import styles from './Movie.module.css';
import PropTypes from 'prop-types';

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div id={styles.section}>
      <img src={coverImg} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <ul>
        {genres &&
          genres.map((g) => (
            <li className={styles.gen} key={g}>
              {g}
            </li>
          ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
