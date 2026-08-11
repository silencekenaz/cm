import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the homepage as static HTML", async () => {
  const html = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>神人 cm/);
  assert.match(html, /德尔斐神谕/);
  assert.match(html, /TYPE COORDINATES/);
  assert.doesNotMatch(html, /\/api\//);
});

test("exports the mythology archive as static HTML", async () => {
  const html = await readFile(
    new URL("../dist/client/myths.html", import.meta.url),
    "utf8",
  );

  for (const name of ["希腊", "北欧", "埃及", "两河", "凯尔特", "中国"]) {
    assert.match(html, new RegExp(name));
  }
});
