import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { log } from 'console';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Search.scss';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  const searchMovie = () => {
    axios
      .get(`https://yts.mx/api/v2/list_movies.json?query_term=${movieName}`)
      .then((res) => {
        console.log(res);
        setMovies(res.data.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //handleSubmit();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovie();
    setMovieName('');
  };

  return (
    <div className="box">
      <form name="search" onSubmit={handleSubmit}>
        <input
          id="movieName"
          name="movieName"
          value={movieName}
          type="text"
          className="input"
          onChange={(event) => setMovieName(event.target.value)}
          //onmouseout="this.value = ''; this.blur();"
        ></input>
      </form>
      {movies.map((movie) => (
        <img key={movie.id} src={movie.medium_cover_image}></img>
      ))}
    </div>
  );
};

export default Search;
