import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <Container>
      <h1>Home </h1>
      <h2>We have your top movies here</h2>
      <img src="/pexels-clem-onojeghuo-375885.jpg" alt="movie" width={'100%'}/>
      <p>
        Click <Link to='/latest'>here</Link> to see the latestmovies and their ratings
      </p>
    </Container>
  );
};

export default HomePage;
