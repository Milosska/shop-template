import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: var(--primary-bg-color, #ffffff);
  color: var(--primary-text-color, #000000);
`;

export const Header = styled.header`
  padding: 10px 20px;
  background-color: var(--accent-bg-color, blue);
`;

export const Main = styled.main`
  flex: 1;
  padding: 10px 20px;
`;

export const Footer = styled.footer`
  padding: 10px 20px;
  background-color: var(--accent-bg-color, blue);

  text-align: center;

  @media screen and (min-width: 765px) {
    display: flex;
    justify-content: space-between;

    text-align: start;
  }
`;
