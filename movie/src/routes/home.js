import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import { Link } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
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
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <div className='movieList'>
          <div className='logo'>
            <Link to={`/Home`}>
              <h1>Movie List</h1>
            </Link>
          </div>
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
