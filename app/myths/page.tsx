import type { Metadata } from "next";
import { mythSystems } from "./myth-data";

export const dynamic = "force-static";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "神话体系索引｜神人 cm",
  description: "希腊、北欧、埃及、两河、凯尔特与中国神话的阅读入口。",
};

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
            <a
              className="myth-system-card"
              href={siteBasePath ? `${siteBasePath}/myths/${system.slug}.html` : `/myths/${system.slug}`}
              key={system.index}
              aria-label={`进入${system.title}子页面`}
            >
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
              <span className="myth-system-enter">
                <strong>CLICK TO ENTER</strong>
                <b aria-hidden="true">→</b>
              </span>
            </a>
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
