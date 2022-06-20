import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, MovieList, Movie, Pagination, Button } from "./styles";
import { APIKey } from "../../config/key";
import Footer from "../footer/footer";

const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=${page}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.results);
      })
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) {
    <div>Loading</div>;
  }

  return (
    <Container>
      <h1>Movies</h1>
      <Pagination>
        {pagination.map((num, i) => (
          <Button key={num + i} onClick={() => setPage(num)}>
            {num}
          </Button>
        ))}
      </Pagination>
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                src={`${image_path}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
      <Footer />
    </Container>
  );
};

export default Home;
