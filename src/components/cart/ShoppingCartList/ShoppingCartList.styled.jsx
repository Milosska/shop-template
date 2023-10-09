import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px 20px;
`;
export const CartFooterThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 10px 20px;
`;

export const CartTotalThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  width: 400px;
`;

export const CartTotalText = styled.p`
  color: var(--alert-color, red);
  font-size: 32px;
  font-weight: 700;
`;
