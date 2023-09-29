import { NavLink } from "react-router-dom";

import { StyledList } from "./Menu.styled";

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
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite</NavLink>
            </li>
          </>
        )}
      </StyledList>

      {isLoggedIn ? (
        <p>Hello, User!</p>
      ) : (
        <StyledList>
          <li>
            <NavLink to="/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign Up</NavLink>
          </li>
        </StyledList>
      )}
    </>
  );
};
