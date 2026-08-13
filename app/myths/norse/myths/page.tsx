import type { Metadata } from "next";
import { cycleMeta, storiesByCycle } from "./StoryArchive";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "神话的一日｜北欧神话篇", description: "以清晨、正午与黄昏三卷阅读北欧神话的建立、盛极、崩解与更新。" };

export default function Page() {
  const hubHref = `${siteBasePath}/myths/norse${staticPageSuffix}`;
  const heroesHref = `${siteBasePath}/myths/norse/heroes${staticPageSuffix}`;
  const godsHref = `${siteBasePath}/myths/norse/myths/gods${staticPageSuffix}`;
  return <main className="norse-myth-threads-page norse-day-index">
    <nav className="myth-atlas-nav" aria-label="北欧神话篇页面导航"><a href={hubHref}>← 返回北欧总览</a><a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a></nav>
    <header className="norse-day-hero"><span>PATH 01 / ONE MYTHIC DAY</span><h1>清晨，正午，<br /><b>然后是黄昏。</b></h1><p>把北欧神话读成一天：世界与盟约在清晨成形，诸神的力量在正午抵达高处，巴德尔倒下以后，所有未偿之债在黄昏一同回来。</p><a href="#three-cycles">选择时刻 <i>↓</i></a></header>
    <aside className="norse-thread-method"><b>READING ORDER / 一日三卷</b><p>这里不把神话硬排成一张年表，而是让它们像一天那样展开。先选一个时刻，再选一篇故事；文本出处与版本差异留到每篇结尾，正文只负责把你带进故事。</p></aside>
    <section className="norse-day-cycles" id="three-cycles"><header><span>THREE VOLUMES / 三卷分读</span><h2>太阳走过的地方，<br />旧债也跟着移动。</h2></header><div>{(["morning","noon","dusk"] as const).map((key,index)=>{const cycle=cycleMeta[key];const count=storiesByCycle(key).length;return <a href={`${siteBasePath}/myths/norse/myths/${key}${staticPageSuffix}`} className={`norse-day-gate norse-day-gate-${key}`} key={key}><div><span>0{index+1}</span><b>{cycle.mark}</b></div><small>{cycle.kicker}</small><h3>{cycle.title}</h3><h4>{cycle.subtitle}</h4><p>{cycle.intro}</p><strong>{count} 篇独立故事 <i>↗</i></strong></a>;})}</div></section>
    <section className="norse-day-method"><span>THE SHAPE OF THE DAY</span><h2>这一天不是直线，<br />而是一次回环。</h2><div><p><b>清晨</b>创造世界，却也制造第一批边界、交换与亏欠。</p><p><b>正午</b>看似控制了危险，其实把狼、蛇与海姆冥界安置成未来结构。</p><p><b>黄昏</b>让预言兑现；火后大地重生，巴德尔归来，下一次清晨因此成立。</p></div></section>
    <section className="norse-day-pantheon-gate" aria-labelledby="pantheon-gate-title">
      <a href={godsHref}>
        <span>TWELVE PORTRAITS / 诸神名录</span>
        <b aria-hidden="true">12</b>
        <div><small>在离开神话的一日以前</small><h2 id="pantheon-gate-title">去认识故事里<br />反复相遇的诸神。</h2><p>从奥丁的追问到伊登的苹果：十二位主要神祇，不按神谱排座次，只从原典留下的神职、关系与故事出发。</p><strong>进入诸神介绍 <i>↗</i></strong></div>
      </a>
    </section>
    <div className="norse-thread-footer-links"><a href={hubHref}>← 返回九界与北欧总览</a><a href={heroesHref}>前往英雄传说 →</a></div>
  </main>;
}
