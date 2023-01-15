import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail({}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
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
        <p>Loading...</p>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <div>
            <span>{movie.year}년도 &middot; </span>
            <span>{movie.runtime}분 &middot; </span>
            <span>{movie.rating}점</span>
          </div>
          <ul>{genres && genres.map((gen) => <li key={gen}>{gen}</li>)}</ul>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
