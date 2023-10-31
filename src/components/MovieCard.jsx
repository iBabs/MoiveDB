import { Card } from "react-bootstrap";
const MovieCard = ({id, title, poster_path, release_date, vote_average}) => {
  return (
    <>
      <Card style={{width:'300px'}} key={id}>
        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Rating: {vote_average}</Card.Text>
            <Card.Text>Release Date: {release_date}</Card.Text>
        </Card.Body>
      </Card>
      {/*  */}
    </>
  );
};

export default MovieCard;
