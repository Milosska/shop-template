import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;

  background-color: var(--accent-bg-color, lightblue);
  color: var(--accent-text-color, black);

  font-weight: 700;
`;
