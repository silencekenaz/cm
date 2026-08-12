import { gods } from "../NorseArchiveSections";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export default function GodArchivePage({ slug }: { slug: string }) {
  const index = gods.findIndex((god) => god.slug === slug);
  const god = gods[index];
  const previous = gods[(index - 1 + gods.length) % gods.length];
  const next = gods[(index + 1) % gods.length];

  return (
    <main className="norse-god-page">
      <nav className="norse-god-page-nav" aria-label={`${god.name}档案页面导航`}>
        <a href={`${siteBasePath}/myths/norse${staticPageSuffix}#gods-and-fate`}>← 返回诸神与命运</a>
        <a href={`${siteBasePath}/myths/norse${staticPageSuffix}#preview`}>NORTH ARCHIVE / 02</a>
      </nav>

      <article className="norse-god-dialog norse-god-subpage">
        <header>
          <span>GOD ARCHIVE / {String(index + 1).padStart(2, "0")}</span>
          <b aria-hidden="true">{god.rune}</b>
          <div>
            <small>{god.oldNorse} / {god.role}</small>
            <h1>{god.name}</h1>
            <p>{god.identity}</p>
          </div>
        </header>
        <div className="norse-god-archive-copy">
          <span>据原典整理</span>
          <div>{god.archive.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="norse-god-fate-note"><span>命运节点</span><p>{god.fate}</p></div>
        <aside className="norse-god-method-note">
          <span>READING NOTE</span>
          <p>这里不把不同年代、不同体裁的材料强行拼成一份无缝传记。叙述只在原典能够支持的范围内建立关联。</p>
        </aside>
        <footer>
          <div>
            <span>原典索引</span>
            {god.sources.map((source) => <a key={source.label} href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a>)}
          </div>
          <nav aria-label="切换神祇档案">
            <a href={`${siteBasePath}/myths/norse/${previous.slug}${staticPageSuffix}`}>← {previous.name}</a>
            <a href={`${siteBasePath}/myths/norse/${next.slug}${staticPageSuffix}`}>{next.name} →</a>
          </nav>
        </footer>
      </article>
    </main>
  );
}
