import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import './About.css'
import { useEffect, useState } from "react";




const Latest = () => {

    

    const api_url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=8b73a9dd93575808c1a0a84676cf060d';
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
       {movieData && movieData.map(mov=>( <MovieCard {...mov}/>))}
      </div>
    </Container>
  );
};

export default Latest;
