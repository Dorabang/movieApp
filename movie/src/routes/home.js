import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  // const rating = null;

  const getRating = (event) => {
    // setMovies(event.target.value);
    setRating(event.target.value);
    getMovies(event.target.value);
  };
  const getMovies = async (item) => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${item}&sort_by=year`,
      )
    ).json();
    // console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };
  // async await -> 비동기 문법

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className='logo'>
        <h1>Movie List</h1>
      </div>
      <div className='inputRating'>
        <p>Please enter less than 10 point.</p>
        <input
          onChange={getRating}
          value={rating}
          type='number'
          max='10'
          min='0'
        />
      </div>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <div className='movieList'>
          {movies.map((movieList) => (
            <Movie
              key={movieList.id}
              id={movieList.id}
              rating={movieList.rating}
              runtime={movieList.runtime}
              coverImg={movieList.medium_cover_image}
              title={movieList.title}
              summary={movieList.summary}
              genres={movieList.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
