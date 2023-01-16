import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail({}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    setLoading((current) => !current);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <div>
          <div className='goback'>
            <Link to={`/Home`}>
              <p>←</p>
            </Link>
          </div>
          <div className={styles.detail}>
            <div className={styles.imgWrap}>
              <img src={movie.large_cover_image} alt={movie.title} />
            </div>
            <h2 className={styles.title}>{movie.title}</h2>
            <div>
              <span>{movie.year}년도 &middot; </span>
              <span>{movie.runtime}분 &middot; </span>
              <span>{movie.rating}점</span>
            </div>
            <ul>
              {genres &&
                genres.map((gen) => (
                  <li className={styles.gen} key={gen}>
                    {gen}
                  </li>
                ))}
            </ul>
            <p className={styles.summary}>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
