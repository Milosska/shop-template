import { NavLink } from "react-router-dom";

import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { StyledList, AuthList } from "./Menu.styled";

export const Menu = () => {
  const isLoggedIn = true;

  return (
    <>
      <StyledList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </StyledList>

      {isLoggedIn ? (
        <DropdownMenu />
      ) : (
        <AuthList>
          <li>
            <NavLink to="/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign Up</NavLink>
          </li>
        </AuthList>
      )}
    </>
  );
};
