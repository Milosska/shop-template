import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

import { Menu } from "../Menu/Menu";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { StyledNav } from "./Navigation.styled";

export const Navigation = () => {
  const window = useWindowSize();

  return (
    <StyledNav>
      <Link to="/">LOGO</Link>
      {window.width <= 768 ? <MobileMenu /> : <Menu />}
    </StyledNav>
  );
};
