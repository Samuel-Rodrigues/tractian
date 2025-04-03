import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { render } from "@testing-library/react";

export const renderWithTheme = (children: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
