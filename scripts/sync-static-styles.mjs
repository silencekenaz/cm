import { copyFile } from "node:fs/promises";

const source = new URL("../app/globals.css", import.meta.url);
const destination = new URL("../public/styles.css", import.meta.url);

// GitHub Pages can briefly serve cached HTML from the previous deployment.
// A stable stylesheet URL prevents that HTML from pointing at a deleted hash.
await copyFile(source, destination);
