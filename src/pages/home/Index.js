import spiderMan from "../../assets/spider-man.jpg";
import thor from "../../assets/thor.jpg";
import drStrange from "../../assets/dr-estranho.jpg";

import { Container, MovieList, Movie } from "./styles";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Spider Man",
      image_url: "spiderMan",
    },
    {
      id: 2,
      title: "Thor",
      image_url: "thor",
    },
    {
      id: 3,
      title: "Dr. Strange",
      image_url: "drStrange",
    },
  ];
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="http://google.com.br">
                <img src={movie.image_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;
