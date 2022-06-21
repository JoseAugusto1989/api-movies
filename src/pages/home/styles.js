import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;

  &:hover {
    color: #ffbb33;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 180%;
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s;
  font-weight: bold;
  font-size: 120%;
  text-align: center;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Image = styled.img`
  width: 180px;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;
