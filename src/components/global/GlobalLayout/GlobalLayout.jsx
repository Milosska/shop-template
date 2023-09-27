import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Main, Footer } from "./GlobalLayout.styled";

export const GlobalLayout = () => {
  return (
    <Container>
      <Header>
        <p>Header</p>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};
