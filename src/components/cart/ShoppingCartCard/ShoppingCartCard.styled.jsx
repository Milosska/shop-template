import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 100px;
  grid-template-rows: repeat(5, 1fr);
  justify-items: end;

  width: 100%;
  height: 180px;
  padding: 5px 10px;
  border: 1px solid var(--decorative-elems-color, blue);

  transition: border var(--animation);

  &:hover,
  &:focus {
    box-shadow: 0px 5px 10px rgba(93, 101, 167, 0.26),
      0px 10px 20px rgba(49, 40, 124, 0.29);
  }
`;

export const StyledLinkTitle = styled(Link)`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: start;

  display: inline-block;
  margin-bottom: 5px;

  font-size: 18px;
  font-weight: 700;
  text-decoration: none;

  transition: text-decoration var(--animation);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledImg = styled.img`
  grid-column: 1/2;
  grid-row: 2/6;
  justify-self: start;
`;

export const QuantityThumb = styled.div`
  grid-column: 2/4;
  grid-row: 1/3;
  justify-self: end;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledQuantityInput = styled.input`
  width: 50px;
  padding: 10px;

  border: 2px solid var(--decorative-elems-color, blue);
  border-radius: 5px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & {
    -moz-appearance: textfield;
  }
`;

export const StyledPrice = styled.p`
  grid-column: 2/4;
  grid-row: 3/4;
  justify-self: end;

  font-size: 18px;
`;

export const StyledDeletBtn = styled.button`
  grid-column: 3/4;
  grid-row: 5/6;
  justify-self: end;

  display: inline-flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  height: 30px;
  padding: 5px 10px;
  border-radius: 8px;

  background-color: var(--alert-color, red);
  color: var(--accent-text-color, white);

  font-weight: 700;

  > svg {
    width: 22px;
    height: 22px;
  }
`;
