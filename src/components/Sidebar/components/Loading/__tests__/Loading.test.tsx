import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithTheme } from "@utils";

import { Loading } from "../";

describe("Loading", () => {
  it("should display loading message", () => {
    renderWithTheme(<Loading />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
}); 