// import { useState, useEffect } from 'react';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };

//   /*

//     // 위와 같이 response를 생략하여 더 짧게 줄여쓸 수 있음.

//     const getMovies = async () => {
//     const response = await fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
//     );
//     const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };

//   // 요즘엔 then을 잘 사용하지 않는다.

//     useEffect(() => {
//     fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         setMovies(json.data.movies);
//         setLoading(false);
//       });
//   }, []);

//   */

//   useEffect(() => {
//     getMovies();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {movies.map((movieList) => (
//             <div key={movieList.id}>
//               <img src={movieList.medium_cover_image} />
//               <h2>{movieList.title}</h2>
//               <p>{movieList.summary}</p>
//               {
//                 /* <ul>
//                 {movieList.genres.map((g) => (
//                   <li key={g}>{g}</li>
//                 ))}
//               </ul> */
//                 // genres prop이 없는 영화 항목들을 위해 아래와 같은 코드로 변경
//               }
//               {movieList.hasOwnProperty('genres') ? (
//                 <ul>
//                   {movieList.genres.map((g) => (
//                     <li key={g}>{g}</li>
//                   ))}
//                 </ul>
//               ) : null}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
