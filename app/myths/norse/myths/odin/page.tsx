import type { Metadata } from "next";
import { odinChapters, StoryChapter } from "../page";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "知识的价码｜北欧神话篇",
  description: "从密米尔之泉、悬树符文、巨人问答到诗蜜酒，阅读知识如何被交换、赢取与偷走。",
};

export default function OdinThreadPage() {
  const indexHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  const thorHref = `${siteBasePath}/myths/norse/myths/thor${staticPageSuffix}`;

  return (
    <main className="norse-myth-threads-page norse-thread-volume-page">
      <nav className="myth-atlas-nav" aria-label="知识的价码页面导航">
        <a href={indexHref}>← 返回神话篇总入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>
      <header className="norse-volume-hero norse-volume-hero-odin">
        <span>CASE FILE 02 / AUGA / 6 ACTION CHAPTERS</span><b aria-hidden="true">ᛟ</b>
        <h1>知识的<br />价码</h1>
        <p>密米尔设下交换，弗丽嘉劝阻远行，巨人在问答中保存宇宙记忆，贡萝德守酒又被背叛。知识每次流动，都有人付出或失去。</p>
        <a href="#case-file">展开行动档案 <i aria-hidden="true">↓</i></a>
      </header>
      <aside className="norse-thread-method"><b>METHOD / 逐人记录</b><p>这里不把奥丁写成孤立的全知者，而是同时记录守泉者、劝阻者、问答者、劳动交易者与守酒者的行动。</p></aside>
      <section className="norse-thread-section norse-odin-thread" id="case-file">
        <header><div><span>THREAD 02 / AUGA</span><b aria-hidden="true">ᛟ</b></div><h2>泉水、树、问题<br />与诗蜜酒。</h2><p>眼睛、疼痛、赌命、劳动和欺骗让知识发生移动；“得到”从不自动等于正当。</p></header>
        <div className="norse-odin-eye" aria-hidden="true"><i /><b>ᚨ</b></div>
        <div className="norse-story-list">{odinChapters.map((chapter) => <StoryChapter chapter={chapter} key={chapter.number} />)}</div>
      </section>
      <section className="norse-thread-sources"><header><span>PRIMARY COORDINATES / 原典坐标</span><h2>从这里继续读</h2></header><div>
        <a href="https://sacred-texts.com/neu/poe/poe03.htm" target="_blank" rel="noreferrer"><b>《女先知的预言》</b><span>奥丁的眼与密米尔之泉的诗歌坐标 ↗</span></a>
        <a href="https://sacred-texts.com/neu/poe/poe04.htm" target="_blank" rel="noreferrer"><b>《至高者箴言》</b><span>悬树得符文与贡萝德事件的自述 ↗</span></a>
        <a href="https://sacred-texts.com/neu/poe/poe05.htm" target="_blank" rel="noreferrer"><b>《瓦夫苏鲁特尼尔之歌》</b><span>弗丽嘉劝阻、问答与奥丁的终题 ↗</span></a>
        <a href="https://sacred-texts.com/neu/pre/pre05.htm" target="_blank" rel="noreferrer"><b>《诗艺语言》</b><span>克瓦希尔之死与诗蜜酒完整散文叙事 ↗</span></a>
      </div></section>
      <div className="norse-thread-footer-links"><a href={indexHref}>← 返回两卷入口</a><a href={thorHref}>转读巨人国诸行 →</a></div>
    </main>
  );
}
