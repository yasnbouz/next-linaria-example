import { styled } from "linaria/react";

const Heading = styled.h1`
  color: ${(props) => (props.primary ? `var(--primary-color)` : `var(--text-color)`)};
  text-align: center;
  letter-spacing: 1px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: background-color 0.25s linear, color 0.25s linear;
`;
export default Heading;
