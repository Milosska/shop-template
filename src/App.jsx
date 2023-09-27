import "modern-normalize";
import { GlobalStyles } from "./GlobalStyles";

import { AppRouter } from "./components/routing/AppRouter/AppRouter";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;
