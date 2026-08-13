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

const nineWorlds = [
  {
    number: "01",
    oldNorse: "ÁSGARÐR",
    name: "阿斯加德",
    cue: "阿萨神族的围地与议事中心",
    relation: "秩序 / 议事 / 通往世界树",
    body: "阿斯加德是阿萨神族诸居所所在的领域。现存文本更常列举神殿、厅堂和道路，而不是提供一张城市平面图；诸神每天骑马前往世界树旁议事，彩虹桥也把这里与别处连接。它是秩序的中心，却并非永不受侵入或毁灭的安全堡垒。",
    caution: "不要直接等同于所有死者的天堂；瓦尔哈拉只是奥丁厅堂之一，战死者的去处也不只有这里。",
    rune: "ᚨ",
  },
  {
    number: "02",
    oldNorse: "VANAHEIMR",
    name: "华纳海姆",
    cue: "华纳神族的故土",
    relation: "丰饶 / 交换 / 神族和解",
    body: "华纳海姆由诗歌通过尼约德的身世得到确认：他在华纳神族中长大，后来作为人质来到阿萨神族，并将在世界终结时返回“智慧的华纳神族”。这个地名提醒我们，两支神族曾经战争，也能通过交换、婚姻与共同生活重组秩序。",
    caution: "原典没有为华纳海姆留下像现代奇幻地图那样完整的地貌与城市设定。",
    rune: "ᚹ",
  },
  {
    number: "03",
    oldNorse: "ÁLFHEIMR",
    name: "亚尔夫海姆",
    cue: "诗中赠予弗雷的精灵领域",
    relation: "精灵 / 弗雷 / 丰饶联想",
    body: "《格里姆尼尔之歌》说，诸神在弗雷长出第一颗牙时把亚尔夫海姆送给他。这个短小诗节构成最重要的坐标，却没有继续解释弗雷如何治理、精灵怎样生活。它更像一束明确而短暂的文本光线，而非资料齐全的国度。",
    caution: "“光明精灵国度”的大量视觉细节多来自斯诺里的分类和后世想象，阅读时应区分层次。",
    rune: "ᚠ",
  },
  {
    number: "04",
    oldNorse: "MIÐGARÐR",
    name: "米德加德",
    cue: "为人类围出的中庭",
    relation: "人类 / 海岸 / 边界之内",
    body: "米德加德意为“中间的围地”。在斯诺里的创世叙述里，诸神用伊米尔的眉毛为人类围出这片领域；大海环绕其外，尘世巨蛇潜伏其中。它的意义不仅是“人类世界”，更在于围墙之内与边界之外持续存在的压力。",
    caution: "米德加德不是与其他领域完全断开的地球副本；神、巨人与英雄不断跨越它的道路和海域。",
    rune: "ᛗ",
  },
  {
    number: "05",
    oldNorse: "JÖTUNHEIMAR",
    name: "约顿海姆",
    cue: "巨人诸领域与秩序之外",
    relation: "巨人 / 智慧 / 敌对与亲缘",
    body: "约顿海姆常作为巨人居住的方向或诸领域出现。诸神从这里面对威胁，也来这里求取知识、器物与婚姻：奥丁向巨人问答，索尔出行挑战巨人，许多神又拥有巨人血统。它不是一座单纯盛产反派的敌国，而是诸神秩序无法自给自足的外部。",
    caution: "古诺斯语材料常用复数形式谈巨人诸界；整齐统一的单一王国是后世地图化的结果。",
    rune: "ᚦ",
  },
  {
    number: "06",
    oldNorse: "SVARTÁLFAHEIMR",
    name: "斯瓦塔尔夫海姆",
    cue: "黑暗精灵与侏儒名称交叠之处",
    relation: "地下 / 工艺 / 命名争议",
    body: "斯诺里在讲述诸神寻找锁链与宝物时使用斯瓦塔尔夫海姆这一名称，并让侏儒在那里活动；《女先知的预言》则提到尼达维利尔的厅堂。现代列表经常把两者合并或分开，但原典并未替我们固定答案。这里最可靠的线索是地下、精湛工艺与暧昧的族类称呼。",
    caution: "“黑暗精灵”“黑精灵”与侏儒的关系在材料中并不清楚，不宜硬套现代种族分类。",
    rune: "ᛞ",
  },
  {
    number: "07",
    oldNorse: "NIFLHEIMR",
    name: "尼弗尔海姆",
    cue: "雾、寒冷与原初之北",
    relation: "寒气 / 赫瓦格密尔 / 冰河",
    body: "在《欺骗古鲁菲》的创世整理中，尼弗尔海姆早于天地形成，其中的赫瓦格密尔泉涌出多条河流。来自北方的冰霜与穆斯贝尔的热在金伦加鸿沟相遇，推动伊米尔的诞生。它首先是宇宙生成中的寒冷极点。",
    caution: "尼弗尔海姆、尼弗尔海姆冥境与海姆冥界在后世常被混写；原典名称和层次不应无条件合并。",
    rune: "ᚾ",
  },
  {
    number: "08",
    oldNorse: "MÚSPELL",
    name: "穆斯贝尔海姆",
    cue: "火焰、光热与原初之南",
    relation: "苏尔特 / 生成之热 / 末日之火",
    body: "斯诺里把穆斯贝尔置于南方，描述为明亮、炎热并燃烧的领域，外来者无法通行，苏尔特持焰剑守在边界。它的热既参与最初生命的生成，也会在诸神黄昏越过边界焚烧世界，使开端与终局彼此照应。",
    caution: "“穆斯贝尔海姆”作为整齐九界名称主要来自散文整理；诗歌往往说穆斯贝尔的人众或苏尔特。",
    rune: "ᛋ",
  },
  {
    number: "09",
    oldNorse: "HEL",
    name: "海姆冥界",
    cue: "海拉及部分死者所在的领域",
    relation: "死亡 / 地下道路 / 巴德尔",
    body: "斯诺里让洛基之女海拉统治地下领域，病死或年老而死者会被送往她处；巴德尔死后也在那里设宴。英雄诗和神话诗呈现的死后去处并不统一，因此海姆冥界只是北欧死亡地理的一部分，不能吞并所有死者传统。",
    caution: "它不等于基督教意义的地狱，也不是所有居民都因道德罪行受罚；同名的统治者与领域需要依语境区分。",
    rune: "ᚺ",
  },
];

export default function NorseHubPage() {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";
  const mythologyHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  const heroesHref = `${siteBasePath}/myths/norse/heroes${staticPageSuffix}`;

  return (
    <main className="norse-hub-page myth-detail-page" data-system="norse">
      <nav className="myth-atlas-nav" aria-label="北欧传统总览页面导航">
        <a href={atlasHref}>← 返回六个入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="myth-detail-hero norse-hub-title-hero">
        <div className="norse-world-tree" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="norse-fjord-ridge" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <svg className="norse-ravens" viewBox="0 0 180 80" aria-hidden="true">
          <path d="M4 49c18-1 31-8 43-25 3 13 11 21 25 23l10-5-5 9 7 7c-19-7-32-4-42 9-7-11-19-16-38-18Z" />
          <path d="M94 43c17 0 31-8 44-25 2 14 10 22 24 25l10-4-6 8 8 7c-20-7-33-4-43 9-6-11-18-17-37-20Z" />
        </svg>
        <div className="myth-detail-sigil" aria-hidden="true">ᛉ</div>
        <div className="myth-detail-heading">
          <span>ARCHIVE 02 / SCANDINAVIA / NORTH ATLANTIC</span>
          <h1>北欧神话</h1>
          <p>NORSE TRADITIONS</p>
        </div>
        <div className="myth-detail-intro">
          <span>NORTH ATLANTIC ARCHIVE / ICE · INK · MEMORY</span>
          <p>主要书面材料在中世纪冰岛记录，保存了更早的诗歌与口述传统。</p>
          <a href="#worldview">进入整体世界观 <b aria-hidden="true">↓</b></a>
        </div>
        <div className="norse-rune-band" aria-hidden="true">
          <span>ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ</span><b>THE NORTH REMEMBERS IN VERSE</b><span>ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ</span>
        </div>
      </header>

      <section className="norse-hub-opening">
        <span>READING THE NORTH / 00</span>
        <h2>冰与火之间，<br />故事开始生长。</h2>
        <p>今天所谓“北欧神话”，主要由中世纪冰岛写本保存的神话诗、英雄诗、散文埃达与萨迦抵达我们。它不是一部作者统一、设定严密的小说，而是一座由诗句、谱系、地名与反复讲述构成的北方档案。</p>
      </section>

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

      <section className="norse-nine-worlds" id="nine-worlds">
        <header>
          <span>NÍU HEIMAR / CLICK TO UNFOLD</span>
          <h2>九个世界，<br />不是九只盒子。</h2>
          <p>“九界”在诗中是重要的宇宙总数，却没有附带一份公认名单。以下沿用最常见的现代九界索引，同时在每张卡里标明原典能够确认什么、仍有哪些争议。点击任一世界展开档案。</p>
        </header>
        <div className="norse-nine-worlds-map" aria-hidden="true"><i /><i /><i /><i /><b>ᛇ</b></div>
        <div className="norse-nine-worlds-grid">
          {nineWorlds.map((world) => (
            <details key={world.oldNorse} className="norse-world-card">
              <summary>
                <div><span>{world.number}</span><small>{world.oldNorse}</small></div>
                <b aria-hidden="true">{world.rune}</b>
                <h3>{world.name}</h3>
                <p>{world.cue}</p>
                <em><span>CARD / CLOSED</span><i aria-hidden="true">＋</i></em>
              </summary>
              <div className="norse-world-card-detail">
                <span>{world.relation}</span>
                <p>{world.body}</p>
                <aside><b>READING CAUTION</b><p>{world.caution}</p></aside>
              </div>
            </details>
          ))}
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
            <p>从索尔在巨人领域的行动，到奥丁为知识支付的价码。先认识参与者，再按事件追踪诸神、巨人、守护者与同行者各自做了什么。</p>
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
