import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { APIKey } from "../../config/key";
import {
  Container,
  Button,
  Overview,
  Movie,
  Title,
  DetailsMovie,
  Image,
} from "./styles";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const { title, poster_path, overview, release_date, vote_average } =
          data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          note: vote_average,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <Movie>
        <Image src={movie.image} alt={movie.sinopse} />
        <DetailsMovie>
          <Title>Note: {movie.note}</Title>
          <Title>{movie.title}</Title>
          <Overview>
            Sinopse: {movie.sinopse}
            <span> Release date: {movie.releaseDate}</span>
          </Overview>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </DetailsMovie>
      </Movie>
    </Container>
  );
};

export default Details;
