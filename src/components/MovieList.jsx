import React, {useEffect, useState} from "react";
import axios from 'axios';


function MovieList () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //adding the api
        axios.get('http://127.0.0.1:5000/api/movies')
             .then(response => setMovies(response.data))
             .catch(error => console.error(error));

  }, []);

  return (
    <div>
         <h1>Movies</h1>
         <ul>
            {movies.map(movie =>(
              <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
    </div>
  )

};



export default MovieList;