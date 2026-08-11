import vinext from "vinext";
import { defineConfig } from "vite";

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default defineConfig({
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [
    vinext({
      nextConfig: {
        output: "export",
        trailingSlash: false,
        assetPrefix,
      },
    }),
  ],
});
