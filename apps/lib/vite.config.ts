import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      entryRoot: "src",
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.app.json",
      include: ["src/**/*.d.ts", "src/**/*.ts"],
    }),
    {
      name: "log-resolve-errors",
      resolveId(source) {
        if (source.startsWith("./")) {
          console.log("Resolving:", source);
        }
        return null;
      },
    },
  ],
  build: {
    lib: {
      entry: resolve("./src/main.ts"),
      name: "perceptui",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `perceptui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
