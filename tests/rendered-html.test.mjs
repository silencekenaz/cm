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
  for (const graffiti of ["国界我顺手往外画了三寸", "本段可信度：37%", "KENAZ WAS HERE", "有效期至读完本行"]) {
    assert.match(html, new RegExp(graffiti));
  }
  assert.equal(html.match(/小红毛<!-- --> 擅自批注/g)?.length, 3);
  assert.equal(html.match(/ᚲ KENAZ<!-- --> 擅自批注/g)?.length, 1);
  assert.match(html, /src="\/cm\/kenaz-doodle-light\.png"/);
  assert.match(html, /src="\/cm\/kenaz-arrow-light\.png"/);
  assert.doesNotMatch(html, /kenaz-underline\.png/);
  assert.doesNotMatch(html, /RED FUR WAS HERE/);
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
      assert.match(html, /下面先从九界建立坐标/);
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
      assert.doesNotMatch(html, /TEXT BEFORE MAP|一份不假装完整的|世界从间隙开始|阵营不是善恶名单/);
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
  for (const section of ["清晨，正午", "三卷分读", "世界尚且年轻", "力量升至高处", "所有旧债归来"]) {
    assert.match(mythology, new RegExp(section));
  }
  assert.match(mythology, /href="\/cm\/myths\/norse\.html"/);
  for (const path of ["morning", "noon", "dusk"]) assert.match(mythology, new RegExp(`href="/cm/myths/norse/myths/${path}\\.html"`));
  assert.match(mythology, /诸神名录/);
  assert.match(mythology, /href="\/cm\/myths\/norse\/myths\/gods\.html"/);

  const pantheon = await readFile(new URL("../dist/client/myths/norse/myths/gods.html", import.meta.url), "utf8");
  assert.match(pantheon, /北欧原典并没有一份公认、固定的“十二主神”名单/);
  for (const god of ["奥丁", "弗丽嘉", "索尔", "希芙", "巴德尔", "海姆达尔", "提尔", "尼约德", "弗雷", "弗蕾雅", "伊登", "洛基"]) {
    assert.match(pantheon, new RegExp(`<h2>${god}</h2>`));
  }
  assert.equal((pantheon.match(/class="norse-pantheon-card"/g) ?? []).length, 12);
  for (const field of ["关键关系", "代表故事", "故事之后", "诗体埃达", "欺骗古鲁菲", "诗语法"]) assert.match(pantheon, new RegExp(field));
  assert.match(pantheon, /href="\/cm\/myths\/norse\/myths\.html"/);
  assert.doesNotMatch(pantheon, /\/api\//);

  const morning = await readFile(new URL("../dist/client/myths/norse/myths/morning.html", import.meta.url), "utf8");
  for (const section of ["世界从尤弥尔身上醒来", "旧誓与和约", "诗蜜酒", "阿斯加德的城墙", "希芙的金发", "伊登与夏基"]) assert.match(morning, new RegExp(section));
  for (const hiddenSunMarker of ["norse-sun-grid-key-first", "norse-sun-grid-key-second", "norse-morning-secret-sun", "酸菜国的太阳", "SUN SPELL"]) assert.match(morning, new RegExp(hiddenSunMarker));
  assert.match(morning, /href="\/cm\/"[^>]*aria-label="返回神人 cm 首页"/);

  const scrapMap = await readFile(new URL("../dist/client/myths/norse/sun-map.html", import.meta.url), "utf8");
  assert.match(scrapMap, /<h1>屑球<br\/><b>地图<\/b><\/h1>/);
  for (const place of ["酸菜国", "伪国", "蛮夷国", "神之境", "很远的地球", "交界小酒馆", "欢乐世界"]) assert.match(scrapMap, new RegExp(place));
  for (const slug of ["suancai", "weiguo", "manyi", "god-realm", "earth", "border-tavern", "happy-world"]) assert.match(scrapMap, new RegExp(`href="/cm/myths/norse/sun-map/${slug}\\.html"`));
  assert.doesNotMatch(scrapMap, /scrap-globe-ledger/);
  assert.match(scrapMap, /href="\/cm\/myths\/norse\/myths\/morning\.html"/);
  assert.doesNotMatch(scrapMap, /\/api\//);

  const earth = await readFile(new URL("../dist/client/myths/norse/sun-map/earth.html", import.meta.url), "utf8");
  assert.match(earth, /<h1>很远的地球<\/h1>/);
  assert.match(earth, /详细档案尚未展开。/);
  assert.match(earth, /href="\/cm\/myths\/norse\/sun-map\.html"/);
  assert.doesNotMatch(earth, /\/api\//);

  const happyWorld = await readFile(new URL("../dist/client/myths/norse/sun-map/happy-world.html", import.meta.url), "utf8");
  for (const detail of ["欢乐世界", "大欢乐", "浓硫酸", "超能力", "陈学渣", "酸菜公主", "失去了记忆", "傻白甜", "理科梦男", "H<sub>2</sub>SO<sub>4</sub>", "宝井的小店"]) assert.match(happyWorld, new RegExp(detail));
  assert.match(happyWorld, /href="\/cm\/myths\/norse\/sun-map\/border-tavern\.html"/);
  assert.match(happyWorld, /href="\/cm\/myths\/norse\/sun-map\.html"/);
  assert.doesNotMatch(happyWorld, /详细档案尚未展开。|\/api\//);

  const godRealm = await readFile(new URL("../dist/client/myths/norse/sun-map/god-realm.html", import.meta.url), "utf8");
  for (const detail of ["神之境", "奥丁", "血兄弟洛基", "西格恩", "酸菜国", "宙斯", "赫拉", "恩基", "恩利尔", "阿波罗", "月桂", "风信子", "阿耳忒弥斯", "恋爱脑", "塞特", "荷鲁斯", "甜蜜蜜", "真是混乱的"]) assert.match(godRealm, new RegExp(detail));
  assert.match(godRealm, /点击大标题 \/ 随机调取一份神明事故/);
  assert.equal((godRealm.match(/OPEN ↗/g) ?? []).length, 5);
  assert.match(godRealm, /href="\/cm\/myths\/norse\/sun-map\/suancai\.html"/);
  assert.match(godRealm, /href="\/cm\/myths\/egyptian\/horus-seth\.html"/);
  assert.doesNotMatch(godRealm, /详细档案尚未展开。|\/api\//);

  const godRealmArchive = await readFile(new URL("../app/myths/norse/sun-map/[territory]/GodRealmArchive.tsx", import.meta.url), "utf8");
  for (const record of ["NOVEL INCIDENT RECORD", "再随机抽一卷", "godrealm-novel-copy", "失踪血兄弟与一张酸味入境单", "一场没有通过家庭委员会的雷霆计划", "神明禁止泄密，所以墙开始说话", "光明之神拒绝保持光明", "王位之争出现了不在卷宗里的气氛"]) assert.match(godRealmArchive, new RegExp(record));
  assert.doesNotMatch(godRealmArchive, /卷内目录|CHAPTERS/);

  const godRealmStories = await readFile(new URL("../app/myths/norse/sun-map/[territory]/GodRealmStories.ts", import.meta.url), "utf8");
  for (const chapter of ["旧誓不是召回令", "西格恩拒绝留在门外", "赫拉不是只会生气", "神明禁止泄密，所以墙开始说话", "月桂不是爱情纪念品", "谁先承认在意谁就算输", "甜蜜气氛不具备法律效力"]) assert.match(godRealmStories, new RegExp(chapter));
  assert.match(godRealmStories, /胡吉与穆宁/);
  assert.match(godRealmStories, /小红毛才不是可疑旅客/);
  assert.match(godRealmStories, /我感觉他在炫耀/);
  assert.match(godRealmStories, /我无聊，可以了吧/);
  assert.match(godRealmStories, /红发旅客已正式续任王室吉祥物/);
  assert.match(godRealmStories, /小红毛今天也不许跑/);
  assert.match(godRealmStories, /众神之父探视吉祥物，须提前预约/);
  assert.match(godRealmStories, /在奥丁养乌鸦以前，他们靠扔鞋决定方向/);
  assert.match(godRealmStories, /赫尔墨斯带着赃物和早餐从窗户进来/);
  assert.match(godRealmStories, /第二次不算偷袭，所以谁也没有借口/);
  assert.doesNotMatch(godRealmStories, /福金|雾尼/);

  assert.match(godRealmArchive, /splitNovelBeats/);
  assert.match(godRealmArchive, /is-dialogue/);

  const manyi = await readFile(new URL("../dist/client/myths/norse/sun-map/manyi.html", import.meta.url), "utf8");
  for (const detail of ["蛮夷国", "龟", "蛆", "沉迷做题", "打台球", "起义", "国家一片混乱", "堕日之子", "我不信", "红温"]) assert.match(manyi, new RegExp(detail));
  for (const illustration of ["manyi-king-transparent-v2.png", "manyi-citizens-transparent-v1.png", "fallen-sun-son-transparent-v2.png"]) assert.match(manyi, new RegExp(illustration));
  assert.doesNotMatch(manyi, /详细档案尚未展开。|\/api\//);

  const suancai = await readFile(new URL("../dist/client/myths/norse/sun-map/suancai.html", import.meta.url), "utf8");
  for (const detail of ["酸菜女王", "酸菜公主", "黄焖鸡丞相", "女丞相", "阿耳忒弥斯", "小沙沙", "小红毛", "不是母女", "只比女王小一岁", "傻白甜", "先拍板", "绝不拖延", "真名 / 本人拒绝回答", "启动、搞事"]) assert.match(suancai, new RegExp(detail));
  for (const portrait of ["suancai-queen-transparent-v1.png", "suancai-princess-transparent-v1.png", "huangmenji-chancellor-transparent-v1.png", "xiaoshasha-simple-transparent-v1.png", "kenaz-doodle-light.png"]) assert.match(suancai, new RegExp(portrait));
  assert.doesNotMatch(suancai, /肖像缺席|TOO HANDSOME TO ARCHIVE/);
  assert.doesNotMatch(suancai, /不住在盐罐/);
  assert.match(suancai, /href="\/cm\/myths\/norse\/sun-map\/border-tavern\.html"/);

  const weiguo = await readFile(new URL("../dist/client/myths/norse/sun-map/weiguo.html", import.meta.url), "utf8");
  for (const detail of ["伪国", "昀昀", "晚霞", "真正的伪神", "酸菜公主的好友", "武力值极高", "智商很", "表面最文明", "真身", "智力节约", "撕脸即开打", "大鹅", "倒置五芒星"]) assert.match(weiguo, new RegExp(detail));
  assert.match(weiguo, /MIMIC \/ PUBLIC RECORD/);
  assert.match(weiguo, /weiguo-yunyun-transparent-v1\.png/);
  assert.match(weiguo, /weiguo-wanxia-transparent-v1\.png/);
  assert.match(weiguo, /weiguo-goose-transparent-v1\.png/);
  assert.match(weiguo, /href="\/cm\/myths\/norse\/sun-map\/border-tavern\.html"/);
  assert.doesNotMatch(weiguo, /详细档案尚未展开。|\/api\//);

  const borderTavern = await readFile(new URL("../dist/client/myths/norse/sun-map/border-tavern.html", import.meta.url), "utf8");
  for (const detail of ["交界", "小酒馆", "宝井小姐", "卖吃的"]) assert.match(borderTavern, new RegExp(detail));
  assert.match(borderTavern, /href="\/cm\/myths\/norse\/sun-map\/suancai\.html"/);
  assert.doesNotMatch(borderTavern, /\/api\//);

  const noon = await readFile(new URL("../dist/client/myths/norse/myths/noon.html", import.meta.url), "utf8");
  for (const section of ["预言的孩子们", "乌特加德的五场比赛", "特里姆的婚宴", "希米尔的巨锅", "布里辛项链残篇"]) assert.match(noon, new RegExp(section));

  const dusk = await readFile(new URL("../dist/client/myths/norse/myths/dusk.html", import.meta.url), "utf8");
  for (const section of ["巴德尔之死", "洛卡塞纳", "洛基受缚", "诸神黄昏"]) assert.match(dusk, new RegExp(section));

  const tales = [
    ["world-from-ymer", "世界从尤弥尔身上醒来", "尤弥尔的头骨"],
    ["old-oaths", "旧誓与和约", "结义兄弟仪式"],
    ["mead-of-poetry", "诗蜜酒", "贡萝德"],
    ["wall-of-asgard", "阿斯加德的城墙", "斯瓦迪尔法利"],
    ["sifs-golden-hair", "希芙的金发", "妙尔尼尔"],
    ["idunn-and-thjazi", "伊登与夏基", "特里姆海姆"],
    ["children-of-prophecy", "预言的孩子们", "格莱普尼尔"],
    ["utgard", "乌特加德的五场比赛", "埃莉"],
    ["thryms-wedding", "特里姆的婚宴", "新娘膝上"],
    ["hymirs-cauldron", "希米尔的巨锅", "巨牛希敏赫里奥特"],
    ["brisingamen", "布里辛项链残篇", "辛加斯坦"],
    ["death-of-baldr", "巴德尔之死", "赫林霍尼"],
    ["lokasenna-feast", "洛卡塞纳", "菲马芬"],
    ["loki-bound", "洛基受缚", "西格恩"],
    ["ragnarok", "诸神黄昏", "维格利德"],
  ];
  for (const [slug, title, marker] of tales) {
    const html = await readFile(new URL(`../dist/client/myths/norse/myths/${slug}.html`, import.meta.url), "utf8");
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(marker));
    assert.match(html, /CODA \/ 余音/);
    assert.match(html, /故事讲完以后/);
    assert.match(html, /TEXTUAL AFTERWORD/);
    assert.doesNotMatch(html, /行动记录|节点档案|逐项拆解/);
  }
  const oldOaths = await readFile(new URL("../dist/client/myths/norse/myths/old-oaths.html", import.meta.url), "utf8");
  assert.match(oldOaths, /奥丁与洛基曾混合彼此的鲜血[\s\S]*吉斯利萨迦[\s\S]*鲜血一同滴进裸露的土里[\s\S]*阿萨与华纳两族/);
  assert.match(oldOaths, /没有把宴会本身插进这段早期时间线/);
  assert.doesNotMatch(oldOaths, /满厅诸神等着奥丁回答|堂堂正正坐进了最不欢迎他的宴会/);
  for (const preferredName of ["海尼尔", "洛德尔", "希亚费", "海拉", "芬利斯"]) assert.match(`${morning}${noon}${dusk}${await readFile(new URL("../dist/client/myths/norse/myths/world-from-ymer.html", import.meta.url), "utf8")}${await readFile(new URL("../dist/client/myths/norse/myths/utgard.html", import.meta.url), "utf8")}`, new RegExp(preferredName));

  const heroes = await readFile(new URL("../dist/client/myths/norse/heroes.html", import.meta.url), "utf8");
  for (const section of ["英雄不是", "维兰德之歌", "沃尔松格谱系", "西格鲁德与法夫尼尔", "布伦希尔德的誓言", "古德伦的余生"]) {
    assert.match(heroes, new RegExp(section));
  }
  assert.match(heroes, /href="\/cm\/myths\/norse\.html"/);
});
