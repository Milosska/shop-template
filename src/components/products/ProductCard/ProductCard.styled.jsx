import styled from "styled-components";

export const Card = styled.li`
  width: 220px;
  height: 280px;
  border: 1px solid var(--decorative-elems-color, blue);

  transition: border var(--animation);

  &:hover,
  &:focus {
    box-shadow: 0px 5px 10px rgba(93, 101, 167, 0.26),
      0px 10px 20px rgba(49, 40, 124, 0.29);
  }
`;

export const DataThumb = styled.div`
  padding: 10px;
  color: var(--primary-text-color, #000000);
`;

export const Title = styled.h4`
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;

  font-size: 16px;
  font-weight: 700;
`;
