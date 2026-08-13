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
  assert.match(html, /class="footer-mark"/);
  assert.doesNotMatch(html, /\/api\//);
});

test("exports the hidden command archive as static HTML", async () => {
  const html = await readFile(
    new URL("../dist/client/easter-egg.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /ROOM 24/);
  assert.match(html, /你找到了[\s\S]*酸菜国/);
  assert.match(html, /这里是酸菜鱼的国度，太阳已经堕落，一切分崩离析。但是好在，这里将是酸菜鱼永恒的土地。/);
  for (const phrase of ["伪神", "武力惊人", "黄焖鸡丞相", "只比女王小一岁", "小沙沙", "小红毛", "反坑酸菜", "伪人与蛮夷", "这里就还是个国家", "非常有外交礼仪", "请先准备第二个计划"]) {
    assert.match(html, new RegExp(phrase));
  }
  assert.match(html, /小红毛暂时没有叛变/);
  assert.match(html, /他的阵营随心情移动/);
  for (const graffiti of ["小红毛擅自批注", "国界我顺手往外画了三寸", "本段可信度：37%", "RED FUR WAS HERE", "有效期至读完本行"]) {
    assert.match(html, new RegExp(graffiti));
  }
  assert.doesNotMatch(html, /它的阵营随心情移动/);
  assert.doesNotMatch(html, /小沙沙住在盐罐/);
  assert.match(html, /src="\/cm\/easter-duck\.png"/);
  assert.match(html, /href="\/cm\/"/);
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
      assert.match(html, /ARCHIVE 02 \/ SCANDINAVIA \/ NORTH ATLANTIC/);
      assert.match(html, /NORTH ATLANTIC ARCHIVE \/ ICE · INK · MEMORY/);
      assert.match(html, /冰与火之间/);
      assert.match(html, /一份不假装完整的/);
      assert.match(html, /NÍU HEIMAR \/ CLICK TO UNFOLD/);
      assert.match(html, /九个世界/);
      for (const world of ["阿斯加德", "华纳海姆", "亚尔夫海姆", "米德加德", "约顿海姆", "斯瓦塔尔夫海姆", "尼弗尔海姆", "穆斯贝尔海姆", "海姆冥界"]) {
        assert.match(html, new RegExp(world));
      }
      assert.equal(html.match(/class="norse-world-card"/g)?.length, 9);
      assert.match(html, /神话传说/);
      assert.match(html, /英雄传说/);
      assert.match(html, /href="\/cm\/myths\/norse\/myths\.html"/);
      assert.match(html, /href="\/cm\/myths\/norse\/heroes\.html"/);
      assert.doesNotMatch(html, /霜线之下/);
      assert.doesNotMatch(html, /冷海书架/);
      assert.doesNotMatch(html, /id="gods-and-fate"/);
    } else if (slug === "egyptian") {
      assert.match(html, /埃及神话[\s\S]*叙事入口/);
      assert.match(html, /拉的旅程/);
      assert.match(html, /荷鲁斯与塞特之争/);
      assert.match(html, /href="\/cm\/myths\/egyptian\/solar-journey"/);
      assert.match(html, /href="\/cm\/myths\/egyptian\/horus-seth"/);
      assert.doesNotMatch(html, /不是一张神谱/);
    } else {
      assert.match(html, /CONTENT IN PROGRESS/);
    }
    assert.match(html, /href="\/cm\/myths\.html#systems"/);
    assert.doesNotMatch(html, /\/api\//);
  }
});

test("exports two independent Egyptian story paths", async () => {
  const journey = await readFile(new URL("../dist/client/myths/egyptian/solar-journey.html", import.meta.url), "utf8");
  assert.match(journey, /FOLLOW THE BARQUE/);
  assert.match(journey, /不是一张神谱/);
  assert.match(journey, /src="\/cm\/egypt-solar-barque-v2\.png"/);
  for (const name of ["欧西里斯", "阿波菲斯", "杜亚特"]) assert.match(journey, new RegExp(name));
  assert.match(journey, /href="\/cm\/myths\/egyptian"/);

  const conflict = await readFile(new URL("../dist/client/myths/egyptian/horus-seth.html", import.meta.url), "utf8");
  assert.match(conflict, /荷鲁斯[\s\S]*塞特之争/);
  for (const section of ["伊西斯骗取拉的隐名", "他们为何站在这里", "法庭并不只有六位神", "继承权争夺", "身体被带进法庭", "冥界来信终结拖延", "原典坐标"]) {
    assert.match(conflict, new RegExp(section));
  }
  for (const detail of ["八十年", "百万年之船", "阿娜特", "安提", "一百三十八肘", "玛特沉入冥界"]) {
    assert.match(conflict, new RegExp(detail));
  }
  assert.match(conflict, /安赫尔（希腊化名称为奥努里斯）/);
  for (const asset of ["egypt-conflict-hero.webp", "egypt-conflict-secret-name.webp", "egypt-conflict-trials.webp", "egypt-god-horus.webp", "egypt-vignette-secret-name.webp", "egypt-vignette-eye-restored.webp", "egypt-vignette-settlement.webp"]) {
    assert.match(conflict, new RegExp(`src="/cm/${asset}"`));
  }
  for (const field of ["神职 / DOMAIN", "宇宙位置 / POSITION", "争讼动机 / MOTIVE"]) {
    assert.match(conflict, new RegExp(field));
  }
  assert.match(conflict, /PAPYRUS CHESTER BEATTY I/);
  assert.match(conflict, /href="\/cm\/myths\/egyptian"/);
  assert.doesNotMatch(conflict, /FOLLOW THE BARQUE/);
  assert.doesNotMatch(conflict, /\/api\//);
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
    assert.match(html, /href="\/cm\/myths\/norse\.html"/);
    assert.match(html, /href="\/cm\/myths\/norse\/myths\.html"/);
    assert.doesNotMatch(html, /\/api\//);
  }
});

test("exports separate Norse myth and heroic paths", async () => {
  const mythology = await readFile(new URL("../dist/client/myths/norse/myths.html", import.meta.url), "utf8");
  assert.match(mythology, /旧版五章内容已经清除/);
  assert.match(mythology, /从原典重建中/);
  assert.match(mythology, /href="\/cm\/myths\/norse\.html#nine-worlds"/);
  for (const removedSection of ["命运之井", "诸神与命运", "诸神黄昏", "诗歌记忆"]) {
    assert.doesNotMatch(mythology, new RegExp(removedSection));
  }

  const heroes = await readFile(new URL("../dist/client/myths/norse/heroes.html", import.meta.url), "utf8");
  for (const section of ["英雄不是", "维兰德之歌", "沃尔松格谱系", "西格鲁德与法夫尼尔", "布伦希尔德的誓言", "古德伦的余生"]) {
    assert.match(heroes, new RegExp(section));
  }
  assert.match(heroes, /href="\/cm\/myths\/norse\.html"/);
});
