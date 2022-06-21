import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 1rem;
`;

export const DetailsMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  max-width: 50%;
`;

export const Title = styled.h1`
  margin: 2rem 0;
  padding: 1px;
`;

export const Movie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: #6654da;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;

  &:hover {
    background: #5848c2;
  }
`;

export const Overview = styled.span`
  line-height: 130%;
  margin-bottom: 1rem;
  font-size: 110%;

  & span {
    opacity: 0.5;
  }
`;
