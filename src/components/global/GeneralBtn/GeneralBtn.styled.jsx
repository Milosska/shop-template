import styled from "styled-components";

export const StyledBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 10px;
  border-radius: 8px;

  background-color: var(--accent-bg-color, lightblue);
  color: var(--accent-text-color, black);

  font-weight: 700;

  > svg {
    width: 22px;
    height: 22px;
  }
`;
