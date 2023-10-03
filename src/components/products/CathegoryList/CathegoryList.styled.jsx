import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.li`
  padding: 10px 20px;
  border: 1px solid var(--decorative-elems-color, blue);

  > h3 {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  position: relative;
  left: 95%;

  color: var(--decorative-elems-color, blue);
  text-decoration: none;
  transition: text-decoration var(--animation);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
