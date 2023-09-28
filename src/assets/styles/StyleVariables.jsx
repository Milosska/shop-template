import { createGlobalStyle } from "styled-components";

export const StyleVariables = createGlobalStyle`
:root {
  /* background colors */
  --primary-bg-color: #ffffff;
  --accent-bg-color: #67b1f7;
  --loader-oval-color:rgb(103, 177, 247, 0.7)

  /* text-colors */
  --primary-text-color: #111111;
  --accent-text-color: #ffffff;

  /* animations */
  --animation: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* breakpoints */
  --phone: 480px;
  --tablet: 768px;
  --desktop: 1200px;
}
`;