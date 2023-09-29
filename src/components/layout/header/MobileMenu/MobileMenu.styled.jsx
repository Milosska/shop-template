import styled from "styled-components";

export const ToggleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 auto;
  background-color: transparent;
  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
    color: var(--primary-text-color, #000000);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 5px 20px;
  background-color: var(--primary-bg-color, #ffffff);
  color: var(--primary-text-color, #000000);
  animation: menuOpen var(--animation);

  @keyframes menuOpen {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
