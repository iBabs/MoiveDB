import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      });
  }, [api_url]);
  return (
    <div key={movieData.id}>
      <img
        src={`https://image.tmdb.org/t/p/w400${movieData.poster_path}`}
        alt={movieData.tiltle}
      />

      <h2>{movieData.title}</h2>
      <p>{movieData.tagline}</p>
      <p>Ratings: {movieData.vote_average}</p>
      <div>
        <h3>Summary</h3>
        <p>{movieData.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
