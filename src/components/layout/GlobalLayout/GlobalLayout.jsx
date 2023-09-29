import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../global/Loader/Loader";
import { Navigation } from "../header/Navigation/Navigation";
import { GoUpButton } from "../GoUpButton/GoUpButton";
import { Address } from "../footer/Address/Address";
import { FooterSocials } from "../footer/FooterSocials/FooterSocials";
import { Container, Header, Main, Footer } from "./GlobalLayout.styled";

export const GlobalLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <Address />
        <FooterSocials />
      </Footer>
      <GoUpButton />
    </Container>
  );
};
