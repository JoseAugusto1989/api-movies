import styled from "styled-components";

export const StyledFooter = styled.div`
  .footer {
    background-color: #222;
    color: #fff;
    padding: 3em;
    text-align: center;
  }

  .social_list {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  .social_list li {
    margin: 0 1em;
  }

  .social_list li:hover {
    color: #ffbb33;
  }

  .social_list svg {
    font-size: 1.5em;
    cursor: pointer;
  }

  .copy_right {
    margin-top: 2em;
  }

  .copy_right span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
