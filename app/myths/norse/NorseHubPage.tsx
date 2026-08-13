const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

const worldAxes = [
  {
    number: "01",
    oldNorse: "GAP · ÍSS · ELDUR",
    title: "世界从间隙开始",
    body: "《女先知的预言》先说沙、海、凉浪、天地与青草都尚不存在，只有张开的鸿沟。斯诺里随后把尼弗尔海姆的寒与穆斯贝尔的热放在鸿沟两侧：冰河的毒滴与南方热气相遇，伊米尔与牝牛欧德姆布拉由此进入叙事。冰与火不是装饰色，而是生成世界的第一组张力。",
    rune: "ᚺ",
  },
  {
    number: "02",
    oldNorse: "YMIR · MÍÐGARÐR",
    title: "秩序由身体搭成",
    body: "奥丁、维利与维杀死伊米尔，用他的肉造大地、血造海、骨造山、颅骨造天空，并以眉毛围出米德加德。世界不是从虚无中无损地完成：可居住的秩序建立在原初生命被拆解、重新安排的代价上。人类则由诸神在海岸发现的树木获得气息、意识、温度与形貌。",
    rune: "ᛗ",
  },
  {
    number: "03",
    oldNorse: "YGGDRASILL · BRÚ",
    title: "诸界以道路相通",
    body: "世界树是诸神议事、泉井、根系与生灵相遇的宇宙结构，却不是一张由原典给出的标准九宫格地图。阿斯加德、米德加德、约顿海姆与海姆冥界等地通过桥、河、骑行、航海和越界行动彼此相连；阅读重点应放在谁能够跨越边界，以及跨越要付出什么。",
    rune: "ᛇ",
  },
  {
    number: "04",
    oldNorse: "ÆSIR · VANIR · JÖTNAR",
    title: "阵营不是善恶名单",
    body: "阿萨神族与华纳神族曾战争、和解并交换人质；诸神又不断与巨人结亲、求知、争斗。洛基能替诸神解决危机，也会使秩序从内部破裂。北欧叙事中的边界真实存在，却具有亲缘、盟约与互相依赖，不宜直接翻译成“善神对恶魔”。",
    rune: "ᚷ",
  },
  {
    number: "05",
    oldNorse: "URÐR · RAGNARÖK",
    title: "知道命运，仍然选择",
    body: "诺伦、预言和梦把未来提前带到诸神面前。奥丁求知、提尔立约、索尔守界，都不能取消诸神黄昏；意义存在于他们如何走向已知结局。《女先知的预言》又让海中重现绿色大地，使毁灭与余世并置，而不是把末日写成简单的失败结算。",
    rune: "ᚾ",
  },
];

export default function NorseHubPage() {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";
  const mythologyHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  const heroesHref = `${siteBasePath}/myths/norse/heroes${staticPageSuffix}`;

  return (
    <main className="norse-hub-page">
      <nav className="myth-atlas-nav" aria-label="北欧传统总览页面导航">
        <a href={atlasHref}>← 返回六个入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="norse-hub-hero">
        <div className="norse-hub-aurora" aria-hidden="true"><i /><i /><i /></div>
        <div className="norse-hub-fire" aria-hidden="true"><i /><i /></div>
        <div className="norse-hub-ice" aria-hidden="true"><i /><i /><i /></div>
        <span className="norse-hub-raven" aria-hidden="true">ᚱ</span>
        <div className="norse-hub-heading">
          <span>ARCHIVE 02 / SCANDINAVIA · NORTH ATLANTIC</span>
          <h1>冰与火之间，<br />故事开始生长。</h1>
          <p>NORSE MYTH &amp; HEROIC LEGEND</p>
        </div>
        <div className="norse-hub-lead">
          <span>READING THE NORTH / 00</span>
          <p>今天所谓“北欧神话”，主要由中世纪冰岛写本保存的神话诗、英雄诗、散文埃达与萨迦抵达我们。它不是一部作者统一、设定严密的小说，而是一座由诗句、谱系、地名与反复讲述构成的北方档案。</p>
          <a href="#worldview">先认识这个世界 <b aria-hidden="true">↓</b></a>
        </div>
      </header>

      <aside className="norse-hub-method">
        <span>TEXT BEFORE MAP / 阅读原则</span>
        <p><b>先读文本，再画地图。</b>“九界”、诸神谱系与末日次序在不同材料中并不总能拼成唯一版本。这个入口页只建立可靠的阅读坐标；具体故事会在神话篇与英雄篇中分别展开，并保留两者交叉的地方。</p>
      </aside>

      <section className="norse-hub-world" id="worldview">
        <header>
          <span>COSMIC ORIENTATION / 01—05</span>
          <h2>一份不假装完整的<br />北方世界观</h2>
          <p>从冰与火的相遇，到诸神明知结局仍继续行动：五条轴线足以开始阅读，但不把变化的传统钉死为设定表。</p>
        </header>
        <div className="norse-hub-tree" aria-hidden="true"><i /><i /><i /><i /><b>YGGDRASILL</b></div>
        <div className="norse-hub-world-list">
          {worldAxes.map((axis) => (
            <article key={axis.number}>
              <div><span>{axis.number}</span><small>{axis.oldNorse}</small></div>
              <b aria-hidden="true">{axis.rune}</b>
              <h3>{axis.title}</h3>
              <p>{axis.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="norse-hub-sources">
        <header><span>WHAT SURVIVES / TEXTUAL COMPASS</span><h2>故事从哪里来？</h2></header>
        <div>
          <article><span>01 / POETIC EDDA</span><h3>《诗体埃达》</h3><p>通常分为神话诗与英雄诗。前者让诸神、巨人与宇宙秩序发声；后者保存维兰德、沃尔松格与尼伯龙根诸英雄的苦难、誓言和复仇。</p></article>
          <article><span>02 / PROSE EDDA</span><h3>《散文埃达》</h3><p>斯诺里为诗人整理神话语言与典故，保存了大量叙事，也带有十三世纪冰岛作者的组织、解释与基督教时代视角。</p></article>
          <article><span>03 / SAGAS &amp; SKALDS</span><h3>萨迦与吟游诗</h3><p>英雄谱系、王族传说与神话典故分散在萨迦和吟游诗中；它们让“神话”与“英雄”互相渗透，而非彻底分成两座孤岛。</p></article>
        </div>
      </section>

      <section className="norse-hub-gates" aria-labelledby="norse-paths-title">
        <header>
          <span>CHOOSE A THREAD / 进入两条叙事</span>
          <h2 id="norse-paths-title">沿着哪一根命运之线？</h2>
          <p>两条路线共享同一片北方记忆，却把镜头分别交给诸神的宇宙与凡人的谱系。</p>
        </header>
        <div>
          <a href={mythologyHref} className="norse-hub-gate norse-hub-gate-myth">
            <div><span>PATH 01 / GOÐ</span><b aria-hidden="true">ᚨ</b></div>
            <small>MYTHOLOGICAL TRADITIONS</small>
            <h3>神话传说</h3>
            <p>诸神、巨人、世界树、命运与诸神黄昏。现有“诸神与命运”档案已经迁入这里，接下来会沿原典重新整理。</p>
            <strong>进入神话篇 <i aria-hidden="true">↗</i></strong>
          </a>
          <a href={heroesHref} className="norse-hub-gate norse-hub-gate-hero">
            <div><span>PATH 02 / HETJUR</span><b aria-hidden="true">ᛋ</b></div>
            <small>HEROIC LEGENDS</small>
            <h3>英雄传说</h3>
            <p>维兰德、沃尔松格、屠龙者西格鲁德、布伦希尔德与古德伦。以谱系、誓言、名誉、宝藏和复仇进入英雄诗。</p>
            <strong>进入英雄篇 <i aria-hidden="true">↗</i></strong>
          </a>
        </div>
      </section>

      <a className="norse-hub-back" href={atlasHref}><span>BACK TO THE SIX ARCHIVES</span><b aria-hidden="true">↖</b></a>
    </main>
  );
}
