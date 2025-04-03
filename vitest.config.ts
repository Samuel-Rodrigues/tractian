import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["**/*.{test,.spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache", "test"],
    setupFiles: "./test/setup.ts",
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "src/styles",
        "src/assets",
        "src/services",
        "src/main.tsx",
        "src/App.tsx",
        "public",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@test": path.resolve(__dirname, "./src/test")
    },
  },
  plugins: [react(), tsconfigPaths()],
});
