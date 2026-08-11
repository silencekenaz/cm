import { rename, rmdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
  .replace(/^\/+|\/+$/g, "");

if (basePath) {
  const clientDirectory = fileURLToPath(
    new URL("../dist/client/", import.meta.url),
  );
  const prefixedDirectory = `${clientDirectory}${basePath}`;

  // assetPrefix makes browser URLs correct for a project Pages site, but
  // vinext also nests the emitted directory under that prefix. GitHub Pages
  // already mounts the artifact at /<repository>, so flatten it once here.
  await rename(`${prefixedDirectory}/_next`, `${clientDirectory}_next`);
  await rmdir(prefixedDirectory);
}
