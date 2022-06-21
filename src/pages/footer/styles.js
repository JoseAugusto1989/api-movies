import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: black;
  color: #fff;
  padding: 3em;
  text-align: center;
`;
export const StyledSocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;

  li {
    margin: 0 1em;
  }

  li:hover {
    color: #ffbb33;
  }

  svg {
    font-size: 1.5em;
    cursor: pointer;
  }
`;

export const StyledCopyRight = styled.p`
  margin-top: 2em;
  font-size: 1.5em;
  display: flex;
  justify-content: center;

  span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
