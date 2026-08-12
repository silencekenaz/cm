import type { MythSystem } from "./myth-data";
import NorseArchiveSections from "./NorseArchiveSections";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MythSystemPage({ system }: { system: MythSystem }) {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";
  const isNorse = system.slug === "norse";

  return (
    <main className="myth-detail-page" data-system={system.slug}>
      <nav className="myth-atlas-nav" aria-label={`${system.title}页面导航`}>
        <a href={atlasHref}>← 返回六个入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">
          神人<span>cm</span>
        </a>
      </nav>

      <header className="myth-detail-hero">
        {isNorse && (
          <div className="norse-world-tree" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        )}
        {isNorse && (
          <>
            <div className="norse-fjord-ridge" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </div>
            <svg className="norse-ravens" viewBox="0 0 180 80" aria-hidden="true">
              <path d="M4 49c18-1 31-8 43-25 3 13 11 21 25 23l10-5-5 9 7 7c-19-7-32-4-42 9-7-11-19-16-38-18Z" />
              <path d="M94 43c17 0 31-8 44-25 2 14 10 22 24 25l10-4-6 8 8 7c-20-7-33-4-43 9-6-11-18-17-37-20Z" />
            </svg>
          </>
        )}
        <div className="myth-detail-sigil" aria-hidden="true">{system.symbol}</div>
        <div className="myth-detail-heading">
          <span>ARCHIVE {system.index} / {system.region}</span>
          <h1>{system.title}</h1>
          <p>{system.subtitle}</p>
        </div>
        <div className="myth-detail-intro">
          <span>{isNorse ? "NORTH ATLANTIC ARCHIVE / ICE · INK · MEMORY" : "PREVIEW EDITION / CONTENT IN PROGRESS"}</span>
          <p>{system.framing}</p>
          <a href="#preview">打开临时档案 <b aria-hidden="true">↓</b></a>
        </div>
        {isNorse && (
          <div className="norse-rune-band" aria-hidden="true">
            <span>ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ</span>
            <b>THE NORTH REMEMBERS IN VERSE</b>
            <span>ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ</span>
          </div>
        )}
      </header>

      <section className="myth-detail-preview" id="preview">
        {isNorse && (
          <div className="norse-knot-border" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        )}
        <header>
          <span>{isNorse ? "FIELD NOTES / NORTH 02" : "TEMPORARY INDEX"}</span>
          <h2>{isNorse ? <>霜线之下<br />档案展开</> : <>档案正在<br />展开</>}</h2>
          <p>{isNorse ? "从冰岛手稿、诗歌语言与口述记忆留下的层次开始。这里先建立一张冷海之北的阅读地图。" : "这里先搭好阅读结构。正式的文本脉络、故事专题与版本辨析会在下一阶段补入。"}</p>
        </header>

        <div className="myth-detail-panels">
          <article>
            <span>{isNorse ? "01 / SOURCE LAYERS" : "01 / SCOPE"}</span>
            <h3>{isNorse ? "文本来处" : "传承范围"}</h3>
            <p>{system.region.replaceAll(" / ", "、")}。暂以文本来源与历史层次为入口，不把传统压缩成单一神谱。</p>
          </article>
          <article>
            <span>{isNorse ? "02 / THE SHELF" : "02 / READING"}</span>
            <h3>{isNorse ? "冷海书架" : "当前书架"}</h3>
            <ul>
              {system.books.map((book) => <li key={book}>{book}</li>)}
            </ul>
          </article>
          <article>
            <span>{isNorse ? "03 / THREADS" : "03 / NEXT"}</span>
            <h3>{isNorse ? "待循之线" : "下一步"}</h3>
            <p>将补充核心文本的来历、重要母题、版本差异，以及适合继续阅读的研究书目。</p>
          </article>
        </div>

        {isNorse && <NorseArchiveSections />}

        <a className="myth-detail-back" href={atlasHref}>
          <span>BACK TO ALL SYSTEMS</span>
          <b aria-hidden="true">↖</b>
        </a>
      </section>
    </main>
  );
}
