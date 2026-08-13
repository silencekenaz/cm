import type { MythSystem } from "./myth-data";
import NorseArchiveSections from "./NorseArchiveSections";
import EgyptianArchiveSections from "./EgyptianArchiveSections";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MythSystemPage({ system }: { system: MythSystem }) {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";
  const isNorse = system.slug === "norse";
  const isEgyptian = system.slug === "egyptian";

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
        {isEgyptian && (
          <div className="egypt-hero-cosmos" aria-hidden="true">
            <span className="egypt-hero-sun"><i /></span>
            <span className="egypt-hero-horizon" />
            <span className="egypt-hero-night" />
          </div>
        )}
        <div className="myth-detail-sigil" aria-hidden="true">{system.symbol}</div>
        <div className="myth-detail-heading">
          <span>{isEgyptian ? "ARCHIVE 03 / THE SUN MUST RETURN" : `ARCHIVE ${system.index} / ${system.region}`}</span>
          <h1>{system.title}</h1>
          <p>{system.subtitle}</p>
        </div>
        <div className="myth-detail-intro">
          <span>{isNorse ? "NORTH ATLANTIC ARCHIVE / ICE · INK · MEMORY" : isEgyptian ? "FOLLOW THE BARQUE / DAY → DUAT → DAWN" : "PREVIEW EDITION / CONTENT IN PROGRESS"}</span>
          <p>{system.framing}</p>
          <a href="#preview">{isNorse ? "进入五章档案" : isEgyptian ? "随拉进入十二夜时" : "打开临时档案"} <b aria-hidden="true">↓</b></a>
        </div>
        {isNorse && (
          <div className="norse-rune-band" aria-hidden="true">
            <span>ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ</span>
            <b>THE NORTH REMEMBERS IN VERSE</b>
            <span>ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ</span>
          </div>
        )}
        {isEgyptian && (
          <div className="egypt-balance-band" aria-hidden="true">
            <span>MAAT / CORRECTNESS</span>
            <b>☀</b>
            <span>ISFET / DISRUPTION</span>
          </div>
        )}
      </header>

      <section className="myth-detail-preview" id="preview">
        {!isNorse && !isEgyptian && (
          <>
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
          </>
        )}

        {isNorse && <NorseArchiveSections />}
        {isEgyptian && <EgyptianArchiveSections />}

        <a className="myth-detail-back" href={atlasHref}>
          <span>BACK TO ALL SYSTEMS</span>
          <b aria-hidden="true">↖</b>
        </a>
      </section>
    </main>
  );
}
