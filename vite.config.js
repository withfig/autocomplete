import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteExternalsPlugin } from "vite-plugin-externals";
import { globSync } from "glob";

const tsxFiles = globSync("./src/**/*.tsx");

export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: "React",
      "react/jsx-runtime": "jsxRuntime",
      "@withfig/api-bindings": "figApiBindings",
    }),
  ],
  build: {
    outDir: resolve(__dirname, "build", "components"),
    lib: {
      formats: ["es"],
      name: "preview",
      // eslint-disable-next-line compat/compat
      entry: Object.fromEntries(
        tsxFiles.map((file) => [
          file.replace("./src/", "").replace(".tsx", ""),
          resolve(__dirname, file),
        ])
      ),
    },
  },
});
