import styled from "styled-components";

export const Container = styled.address`
  font-style: normal;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin: 0;

  li {
    margin-bottom: 10px;

    @media screen and (min-width: 765px) {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  a {
    color: var(--accent-text-color, #ffffff);
    transition: color var(--animation);

    &:hover,
    &:focus {
      color: var(--link-hover-colorr, blue);
    }
  }
`;
