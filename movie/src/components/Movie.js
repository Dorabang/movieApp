import styles from './Movie.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, rating, runtime, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <div className={styles.imgWrap}>
          <img src={coverImg} alt={title} />
        </div>
        <div className={styles.movieTxt}>
          <h2 className={styles.title}>{title}</h2>
          <span>평점 : {rating}점 / </span>
          <span>{runtime}분</span>
          <ul>
            {genres &&
              genres.map((gen) => (
                <li className={styles.gen} key={gen}>
                  #{gen}
                </li>
              ))}
          </ul>
          <p className={styles.summary}>
            {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
          </p>
        </div>
      </Link>
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
