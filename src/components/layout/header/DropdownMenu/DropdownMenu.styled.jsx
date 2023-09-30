import styled from "styled-components";

export const MenuBtn = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border: 2px solid var(--decorative-elems-color, blue);
  border-radius: 50%;

  > svg {
    width: 100%;
    height: 100%;
    fill: var(--decorative-elems-color, blue);
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;

  width: 200px;
  padding: 10px;

  border: 2px solid var(--decorative-elems-color, blue);
  border-radius: 10px;

  background-color: var(--primary-bg-color, #ffffff);
  color: var(--primary-text-color, #000000);

  animation: menuOpen var(--animation);

  @keyframes menuOpen {
    0% {
      opacity: 0;
      transform: translateY(-10%);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    right: 15px;
    width: 20px;
    height: 20px;
    background-color: var(--primary-bg-color, #ffffff);
    border: 10px solid transparent;
    transform: rotate(45deg);
  }

  &::before {
    top: -11px;
    border: 10px solid var(--decorative-elems-color, blue);
  }

  &::after {
    top: -9px;
    border: 10px solid var(--primary-bg-color, #ffffff);
  }
`;
