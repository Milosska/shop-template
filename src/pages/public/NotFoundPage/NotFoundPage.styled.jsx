import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
`;

export const Message = styled.h1`
  margin-bottom: 20px;
  font-size: 42px;
`;
