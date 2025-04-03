import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { TreeItem } from "../";
import { StatusEnum, renderWithTheme } from "@utils";

const mockNode = {
  id: "1",
  name: "Test Node",
  type: "asset",
  status: StatusEnum.OPERATING,
  children: [
    {
      id: "2",
      name: "Child Node",
      type: "component",
      status: StatusEnum.OPERATING,
      children: [],
    },
  ],
};

const mockExpandedNodes = new Set<string>();

describe("TreeItem", () => {
  const defaultProps = {
    node: mockNode,
    level: 0,
    isExpanded: false,
    isSelected: false,
    onNodeClick: vi.fn(),
    expandedNodes: mockExpandedNodes,
  };

  it("should render the tree item with correct name", () => {
    renderWithTheme(<TreeItem {...defaultProps} />);
    expect(screen.getByText("Test Node")).toBeInTheDocument();
  });
});
