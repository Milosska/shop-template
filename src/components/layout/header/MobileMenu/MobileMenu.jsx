import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

import { ToggleBtn, MenuContainer, List } from "./MobileMenu.styled";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true;

  const handleToggle = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      {!isOpen ? (
        <ToggleBtn
          onClick={handleToggle}
          aria-expanded="false"
          aria-controls="mobile-menu-open"
          type="button"
        >
          <MdMenu />
        </ToggleBtn>
      ) : (
        <MenuContainer>
          <ToggleBtn
            type="button"
            onClick={handleToggle}
            aria-expanded="false"
            aria-controls="mobile-menu-close"
          >
            <MdClose />
          </ToggleBtn>
          <List>
            <li>
              <NavLink to="/" onClick={handleToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={handleToggle}>
                Cart
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li>
                  <NavLink to="/profile" onClick={handleToggle}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" onClick={handleToggle}>
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/favorite" onClick={handleToggle}>
                    Favorite
                  </NavLink>
                </li>
              </>
            )}
          </List>
        </MenuContainer>
      )}
    </>
  );
};
