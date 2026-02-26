import styled, { css } from "styled-components";

const test = css`
  text-align: center;
`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 800;
      font-size: 30px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 800;
      font-size: 23px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 800;
      font-size: 15px;
    `}

  ${test}
`;

export default Heading;
