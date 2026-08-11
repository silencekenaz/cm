import type { Metadata } from "next";

export const dynamic = "force-static";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "神话体系索引｜神人 cm",
  description: "希腊、北欧、埃及、两河、凯尔特与中国神话的阅读入口。",
};

const mythSystems = [
  {
    index: "01",
    region: "AEGEAN / MEDITERRANEAN",
    title: "希腊神话",
    subtitle: "HELLENIC TRADITIONS",
    symbol: "Ω",
    framing: "诗歌、戏剧与地方祭仪保存着彼此并不完全一致的版本。",
    books: ["赫西俄德《神谱》", "《伊利亚特》与《奥德赛》", "《荷马颂歌》", "阿波罗多洛斯《书库》"],
  },
  {
    index: "02",
    region: "SCANDINAVIA / NORTH ATLANTIC",
    title: "北欧神话",
    subtitle: "NORSE TRADITIONS",
    symbol: "ᛉ",
    framing: "主要书面材料在中世纪冰岛记录，保存了更早的诗歌与口述传统。",
    books: ["《诗体埃达》", "斯诺里《散文埃达》", "《沃尔松格萨迦》", "《海姆斯克林格拉》"],
  },
  {
    index: "03",
    region: "NILE VALLEY",
    title: "埃及神话",
    subtitle: "ANCIENT EGYPTIAN TRADITIONS",
    symbol: "☥",
    framing: "不同城市拥有可以并存的创世传统，文本跨越三千余年。",
    books: ["《金字塔文》", "《棺椁文》", "《亡灵书》", "杰拉尔丁·平奇《埃及神话》"],
  },
  {
    index: "04",
    region: "TIGRIS / EUPHRATES",
    title: "两河神话",
    subtitle: "MESOPOTAMIAN TRADITIONS",
    symbol: "✹",
    framing: "苏美尔、阿卡德、巴比伦与亚述传统在泥板中彼此转译和重组。",
    books: ["《吉尔伽美什史诗》", "《埃努玛·埃利什》", "《阿特拉哈西斯》", "《伊南娜下冥界》"],
  },
  {
    index: "05",
    region: "IRELAND / WALES / CELTIC LANDS",
    title: "凯尔特诸传统",
    subtitle: "IRISH / WELSH TRADITIONS",
    symbol: "✣",
    framing: "“凯尔特”不是统一神谱；现存叙事以中世纪爱尔兰与威尔士文本最丰富。",
    books: ["《夺牛长征记》", "《马比诺吉昂》", "《爱尔兰侵略之书》", "《马格图瑞德之战》"],
  },
  {
    index: "06",
    region: "CHINA / EAST ASIA",
    title: "中国古代神话",
    subtitle: "SINITIC MYTHIC TRADITIONS",
    symbol: "山",
    framing: "材料散见于地理、诗歌、思想与志怪文本，后世又持续与宗教和地方传统汇流。",
    books: ["《山海经》", "《楚辞》", "《淮南子》", "干宝《搜神记》"],
  },
];

export default function MythAtlasPage() {
  return (
    <main className="myth-atlas-page">
      <nav className="myth-atlas-nav" aria-label="神话索引导航">
        <a href={`${siteBasePath}/#myth`}>← 返回精神宇宙</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">
          神人<span>cm</span>
        </a>
      </nav>

      <header className="myth-atlas-hero">
        <div className="atlas-orbit" aria-hidden="true"><span>✦</span></div>
        <div>
          <span className="atlas-overline">MYTH ARCHIVE / CROSS-CULTURAL INDEX</span>
          <h1>神话<br /><em>体系索引</em></h1>
        </div>
        <div className="atlas-intro">
          <p>六个入口，不是六套整齐划一的“世界观”。</p>
          <p>神话活在口述、祭仪、诗歌、政治与地方记忆里；每一种传统，都比一张人物关系表更辽阔。</p>
          <a href="#systems">开始检索 <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <div className="atlas-marquee" aria-hidden="true">
        <div>
          <span>COSMOGONY</span><i>✦</i><span>RITUAL</span><i>✦</i><span>EPIC</span><i>✦</i><span>METAMORPHOSIS</span><i>✦</i>
          <span>COSMOGONY</span><i>✦</i><span>RITUAL</span><i>✦</i><span>EPIC</span><i>✦</i><span>METAMORPHOSIS</span><i>✦</i>
        </div>
      </div>

      <section className="myth-system-index" id="systems" aria-labelledby="systems-title">
        <header>
          <span>INDEX / 01—06</span>
          <h2 id="systems-title">六个阅读入口</h2>
          <p>从原始文本和可靠译本开始，先认识故事如何被保存。</p>
        </header>

        <div className="myth-system-grid">
          {mythSystems.map((system) => (
            <article className="myth-system-card" key={system.index}>
              <div className="myth-system-card-top">
                <span>{system.index} / {system.region}</span>
                <b aria-hidden="true">{system.symbol}</b>
              </div>
              <div className="myth-system-title">
                <h3>{system.title}</h3>
                <span>{system.subtitle}</span>
              </div>
              <p className="myth-system-framing">{system.framing}</p>
              <div className="myth-reading-list">
                <span>READING / 阅读书目</span>
                <ul>
                  {system.books.map((book) => <li key={book}>{book}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="atlas-method-note">
        <span>READING PROTOCOL</span>
        <h2>先问版本，<br />再谈“设定”。</h2>
        <p>同一个名字可能跨语言改变，同一个故事可能服务不同祭仪，同一种传统也会在数百年间重写自己。这里提供的是地图入口，不是最终答案。</p>
        <a href={`${siteBasePath}/#oracle`}>带着问题返回德尔斐 <span aria-hidden="true">→</span></a>
      </section>

      <footer className="myth-atlas-footer">
        <span>ARCHIVE REMAINS OPEN</span>
        <a href={`${siteBasePath}/`}>神人 cm / HOME ↑</a>
      </footer>
    </main>
  );
}
