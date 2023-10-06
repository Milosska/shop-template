import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;

  background-color: var(--accent-bg-color, lightblue);
  color: var(--accent-text-color, black);

  font-weight: 700;

  > svg {
    width: 22px;
    height: 22px;
  }
`;
