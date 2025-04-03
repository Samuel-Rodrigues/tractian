import { rem } from "polished";

export const theme = {
  colors: {
    primary: "#17192D",
    secondary: "#666666",
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
      tertiary: "#F5F5F5",
    },
    border: "#E5E5E5",
    white: "#FFFFFF",
    success: "#4CAF50",
    error: "#F44336",
    warning: "#FFC107",
  },
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  borderRadius: {
    sm: rem(4),
    md: rem(8),
  },
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    tablet: rem(768),
  },
} as const;

export type Theme = typeof theme; 