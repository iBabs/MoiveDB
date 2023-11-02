import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import './About.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Latest = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const api_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const [movieData, setMovieData] = useState([])

    useEffect(()=>{
      fetch(api_url)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setMovieData(data.results)
      })
    },[api_url])



  return (
    <Container>
      <h2>Latest</h2>
      <div className="layout">
       {movieData && movieData.map(mov=>( <Link to={`${mov.id}`}> <MovieCard {...mov}/></Link>))}
      </div>
    </Container>
  );
};

export default Latest;
