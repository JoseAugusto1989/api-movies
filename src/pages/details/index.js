import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKey } from "../../config/key";
import { Container } from "./styles";

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
        const { title, poster_path, overwiew, release_date, vote_average } = data;
        const movie = {
          id,
          title,
          sinopse: overwiew,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          note: vote_average,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
        <h2>Nota: {movie.note}</h2>
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
