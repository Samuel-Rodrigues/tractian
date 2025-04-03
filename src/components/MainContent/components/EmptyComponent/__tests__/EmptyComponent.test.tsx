import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { EmptyComponent } from "../";
import { renderWithTheme } from "@utils";

describe("EmptyComponent", () => {
  it("should display the correct message", () => {
    renderWithTheme(<EmptyComponent />);
    expect(screen.getByText("Selecione um componente no menu lateral")).toBeInTheDocument();
  });
}); 