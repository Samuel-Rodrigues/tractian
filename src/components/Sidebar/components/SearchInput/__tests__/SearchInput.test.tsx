import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../";
import { renderWithTheme } from "@utils";

describe("SearchInput", () => {
  it("should render the search input", () => {
    renderWithTheme(<SearchInput />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    renderWithTheme(<SearchInput placeholder="Buscar..." />);
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toBeInTheDocument();
  });

  it("should update value when typing", () => {
    renderWithTheme(<SearchInput />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("should handle onChange prop", () => {
    const handleChange = vi.fn();
    renderWithTheme(<SearchInput onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should handle onFocus prop", () => {
    const handleFocus = vi.fn();
    renderWithTheme(<SearchInput onFocus={handleFocus} />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("should handle onBlur prop", () => {
    const handleBlur = vi.fn();
    renderWithTheme(<SearchInput onBlur={handleBlur} />);
    const input = screen.getByRole("textbox");

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("should handle disabled state", () => {
    renderWithTheme(<SearchInput disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("should handle custom className", () => {
    renderWithTheme(<SearchInput className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("should handle custom style", () => {
    renderWithTheme(<SearchInput style={{ backgroundColor: "red" }} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle({ backgroundColor: "red" });
  });

  it("should handle aria-label", () => {
    renderWithTheme(<SearchInput aria-label="Search" />);
    const input = screen.getByLabelText("Search");
    expect(input).toBeInTheDocument();
  });

  it("should handle aria-describedby", () => {
    renderWithTheme(<SearchInput aria-describedby="search-description" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-describedby", "search-description");
  });

  it("should handle required prop", () => {
    renderWithTheme(<SearchInput required />);
    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  it("should handle readOnly prop", () => {
    renderWithTheme(<SearchInput readOnly />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("readonly");
  });

  it("should handle maxLength prop", () => {
    renderWithTheme(<SearchInput maxLength={10} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("maxlength", "10");
  });

  it("should handle autoComplete prop", () => {
    renderWithTheme(<SearchInput autoComplete="off" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("autocomplete", "off");
  });

  it("should handle autoFocus prop", () => {
    renderWithTheme(<SearchInput autoFocus />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveFocus();
  });
});
