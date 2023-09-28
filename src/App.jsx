import "modern-normalize";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { StyleVariables } from "./assets/styles/StyleVariables";

import { AppRouter } from "./components/routing/AppRouter/AppRouter";

function App() {
  return (
    <>
      <StyleVariables />
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;
