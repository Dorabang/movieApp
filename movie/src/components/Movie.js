import styles from './Movie.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div id={styles.section}>
      <img src={coverImg} alt={title} />
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres &&
          genres.map((gen) => (
            <li className={styles.gen} key={gen}>
              #{gen}
            </li>
          ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
