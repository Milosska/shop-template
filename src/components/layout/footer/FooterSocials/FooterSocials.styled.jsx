import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 0 0 15px;

  @media screen and (min-width: 765px) {
    justify-content: start;
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: var(--accent-text-color, #ffffff);

  svg {
    width: 30px;
    height: 30px;
    color: #ffffff;
    transition: color var(--animation);
  }

  &:hover svg,
  &:focus svg {
    color: var(--link-hover-color, blue);
  }
`;
