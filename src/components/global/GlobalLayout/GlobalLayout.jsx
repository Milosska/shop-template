import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import { Container, Header, Main, Footer } from "./GlobalLayout.styled";

export const GlobalLayout = () => {
  return (
    <Container>
      <Header>
        <p>Header</p>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};
