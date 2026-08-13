import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the homepage as static HTML", async () => {
  const html = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>Q = cmΔt｜神人/);
  assert.match(html, /德尔斐神谕/);
  assert.match(html, /TYPE COORDINATES/);
  assert.match(html, /href="\/cm\/styles\.css\?v=[^"]+"/);
  assert.match(html, /src="\/cm\/pythia-priestess\.png"/);
  assert.doesNotMatch(html, /\/api\//);
});

test("exports a stable stylesheet for cached Pages HTML", async () => {
  const css = await readFile(
    new URL("../dist/client/styles.css", import.meta.url),
    "utf8",
  );

  assert.match(css, /\.myth-atlas-page/);
  assert.match(css, /\.myth-detail-page/);
  assert.match(css, /\.hero/);
});

test("exports the mythology archive as static HTML", async () => {
  const html = await readFile(
    new URL("../dist/client/myths.html", import.meta.url),
    "utf8",
  );
  const documentHtml = html.split('<script type="module"')[0];

  assert.match(documentHtml, /href="\/cm\/styles\.css\?v=[^"]+"/);

  const systems = [
    ["greek", "希腊"],
    ["norse", "北欧"],
    ["egyptian", "埃及"],
    ["mesopotamian", "两河"],
    ["celtic", "凯尔特"],
    ["chinese", "中国"],
  ];

  for (const [slug, name] of systems) {
    assert.match(html, new RegExp(name));
    assert.match(html, new RegExp(`href="/cm/myths/${slug}\\.html"`));
  }

  assert.equal(documentHtml.match(/CLICK TO ENTER/g)?.length, systems.length);
});

test("exports six static mythology detail pages", async () => {
  const systems = [
    ["greek", "希腊神话"],
    ["norse", "北欧神话"],
    ["egyptian", "埃及神话"],
    ["mesopotamian", "两河神话"],
    ["celtic", "凯尔特诸传统"],
    ["chinese", "中国古代神话"],
  ];

  for (const [slug, title] of systems) {
    const html = await readFile(
      new URL(`../dist/client/myths/${slug}.html`, import.meta.url),
      "utf8",
    );

    assert.match(html, new RegExp(title));
    if (slug === "norse") {
      assert.match(html, /NORTH ATLANTIC ARCHIVE/);
      assert.match(html, /THE NORTH REMEMBERS IN VERSE/);
      assert.doesNotMatch(html, /霜线之下/);
      assert.doesNotMatch(html, /冷海书架/);
      for (const name of ["弗蕾雅", "尼弗尔海姆", "海姆冥界"]) {
        assert.match(html, new RegExp(name));
      }
      for (const slug of ["odin", "loki", "thor", "tyr", "freyr", "freyja"]) {
        assert.match(html, new RegExp(`href="/cm/myths/norse/${slug}\\.html"`));
      }
      const godOrder = ["奥丁", "洛基", "索尔", "提尔", "弗雷", "弗蕾雅"];
      const godPositions = godOrder.map((name) => html.indexOf(`<h3>${name}</h3>`));
      assert.ok(godPositions.every((position) => position >= 0));
      assert.deepEqual([...godPositions].sort((a, b) => a - b), godPositions);
      for (const section of ["命运之井", "诸神与命运", "世界树", "诸神黄昏", "诗歌记忆"]) {
        assert.match(html, new RegExp(section));
      }
      for (const anchor of ["fate-well", "gods-and-fate", "world-tree", "ragnarok", "norse-memory"]) {
        assert.match(html, new RegExp(`id="${anchor}"`));
      }
    } else if (slug === "egyptian") {
      assert.match(html, /FOLLOW THE BARQUE/);
      assert.match(html, /玛特与伊斯菲特/);
      assert.match(html, /拉的旅程/);
      assert.match(html, /不是一张神谱/);
      assert.match(html, /原典坐标/);
      assert.match(html, /src="\/cm\/ra-night-barque\.png"/);
      assert.doesNotMatch(html, /CONTENT IN PROGRESS/);
      for (const anchor of ["maat-balance", "solar-voyage", "barque-crew", "egypt-sources"]) {
        assert.match(html, new RegExp(`id="${anchor}"`));
      }
    } else {
      assert.match(html, /CONTENT IN PROGRESS/);
    }
    assert.match(html, /href="\/cm\/myths\.html#systems"/);
    assert.doesNotMatch(html, /\/api\//);
  }
});

test("exports six source-based Norse god subpages", async () => {
  const gods = [
    ["odin", "奥丁"],
    ["loki", "洛基"],
    ["thor", "索尔"],
    ["tyr", "提尔"],
    ["freyr", "弗雷"],
    ["freyja", "弗蕾雅"],
  ];

  for (const [slug, name] of gods) {
    const html = await readFile(
      new URL(`../dist/client/myths/norse/${slug}.html`, import.meta.url),
      "utf8",
    );
    assert.match(html, new RegExp(`<h1>${name}</h1>`));
    assert.match(html, /据原典整理/);
    assert.match(html, /命运节点/);
    assert.match(html, /READING NOTE/);
    assert.match(html, /原典索引/);
    assert.match(html, /href="\/cm\/myths\/norse\.html#gods-and-fate"/);
    assert.doesNotMatch(html, /\/api\//);
  }
});
