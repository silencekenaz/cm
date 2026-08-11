import type { MythSystem } from "./myth-data";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MythSystemPage({ system }: { system: MythSystem }) {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";

  return (
    <main className="myth-detail-page" data-system={system.slug}>
      <nav className="myth-atlas-nav" aria-label={`${system.title}页面导航`}>
        <a href={atlasHref}>← 返回六个入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">
          神人<span>cm</span>
        </a>
      </nav>

      <header className="myth-detail-hero">
        <div className="myth-detail-sigil" aria-hidden="true">{system.symbol}</div>
        <div className="myth-detail-heading">
          <span>ARCHIVE {system.index} / {system.region}</span>
          <h1>{system.title}</h1>
          <p>{system.subtitle}</p>
        </div>
        <div className="myth-detail-intro">
          <span>PREVIEW EDITION / CONTENT IN PROGRESS</span>
          <p>{system.framing}</p>
          <a href="#preview">打开临时档案 <b aria-hidden="true">↓</b></a>
        </div>
      </header>

      <section className="myth-detail-preview" id="preview">
        <header>
          <span>TEMPORARY INDEX</span>
          <h2>档案正在<br />展开</h2>
          <p>这里先搭好阅读结构。正式的文本脉络、故事专题与版本辨析会在下一阶段补入。</p>
        </header>

        <div className="myth-detail-panels">
          <article>
            <span>01 / SCOPE</span>
            <h3>传承范围</h3>
            <p>{system.region.replaceAll(" / ", "、")}。暂以文本来源与历史层次为入口，不把传统压缩成单一神谱。</p>
          </article>
          <article>
            <span>02 / READING</span>
            <h3>当前书架</h3>
            <ul>
              {system.books.map((book) => <li key={book}>{book}</li>)}
            </ul>
          </article>
          <article>
            <span>03 / NEXT</span>
            <h3>下一步</h3>
            <p>将补充核心文本的来历、重要母题、版本差异，以及适合继续阅读的研究书目。</p>
          </article>
        </div>

        <a className="myth-detail-back" href={atlasHref}>
          <span>BACK TO ALL SYSTEMS</span>
          <b aria-hidden="true">↖</b>
        </a>
      </section>
    </main>
  );
}
