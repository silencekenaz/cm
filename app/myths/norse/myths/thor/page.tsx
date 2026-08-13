import type { Metadata } from "next";
import { StoryChapter, thorChapters } from "../page";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "巨人国诸行｜北欧神话篇",
  description: "按行动者与原典次序阅读索尔、同行者和巨人们共同构成的七段北欧神话。",
};

export default function ThorThreadPage() {
  const indexHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  const odinHref = `${siteBasePath}/myths/norse/myths/odin${staticPageSuffix}`;

  return (
    <main className="norse-myth-threads-page norse-thread-volume-page">
      <nav className="myth-atlas-nav" aria-label="巨人国诸行页面导航">
        <a href={indexHref}>← 返回神话篇总入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>
      <header className="norse-volume-hero norse-volume-hero-thor">
        <span>CASE FILE 01 / HAMARR / 7 ACTION CHAPTERS</span><b aria-hidden="true">ᚦ</b>
        <h1>巨人国<br />诸行</h1>
        <p>从山羊复生到海中巨蛇，路线、情报、比赛、伪装和宴席由整组人物共同构成。索尔挥下最后一锤，但故事从来不只记录那一锤。</p>
        <a href="#case-file">展开行动档案 <i aria-hidden="true">↓</i></a>
      </header>
      <aside className="norse-thread-method"><b>METHOD / 逐人记录</b><p>每章按人物拆分行动，并标明诗歌、斯诺里散文或版本差异；不把独立篇章误写成单一连续年表。</p></aside>
      <section className="norse-thread-section norse-thor-thread" id="case-file">
        <header><div><span>THREAD 01 / HAMARR</span><b aria-hidden="true">ᚦ</b></div><h2>谁提出办法，<br />谁承担后果。</h2><p>索尔、夏尔菲、弗蕾雅、海姆达尔、提尔与诸位巨人各自推动事件；洛基只在实际参与的节点中出现。</p></header>
        <div className="norse-story-rail" aria-hidden="true"><i /><i /><i /></div>
        <div className="norse-story-list">{thorChapters.map((chapter) => <StoryChapter chapter={chapter} key={chapter.number} />)}</div>
      </section>
      <section className="norse-thread-sources"><header><span>PRIMARY COORDINATES / 原典坐标</span><h2>从这里继续读</h2></header><div>
        <a href="https://sacred-texts.com/neu/pre/pre04.htm" target="_blank" rel="noreferrer"><b>《欺骗古鲁菲》</b><span>山羊复生、乌特加德诸赛与钓蛇散文版 ↗</span></a>
        <a href="https://sacred-texts.com/neu/poe/poe11.htm" target="_blank" rel="noreferrer"><b>《特里姆之歌》</b><span>妙尔尼尔失窃、诸神会议与巨人婚宴 ↗</span></a>
        <a href="https://sacred-texts.com/neu/poe/poe09.htm" target="_blank" rel="noreferrer"><b>《希米尔之歌》</b><span>巨锅、提尔的情报、钓蛇与追击 ↗</span></a>
      </div></section>
      <div className="norse-thread-footer-links"><a href={indexHref}>← 返回两卷入口</a><a href={odinHref}>转读知识的价码 →</a></div>
    </main>
  );
}
