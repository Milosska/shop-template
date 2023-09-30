import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

import { useClickOutside } from "@/hooks/useClickOutside";
import { MenuBtn, List } from "./DropdownMenu.styled";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const handleToggle = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div ref={menuRef}>
      <MenuBtn onClick={handleToggle}>
        <FaCircleUser />
      </MenuBtn>
      {isOpen && (
        <List>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </List>
      )}
    </div>
  );
};
