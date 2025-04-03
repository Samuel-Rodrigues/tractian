import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages/dashboard";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import { rootStore } from "./stores";
import { Provider } from "mobx-react";

function App() {
  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
