import { cycleMeta, storiesByCycle, StoryCard, type CycleKey } from "./StoryArchive";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export function CycleArchive({ cycleKey }: { cycleKey: CycleKey }) {
  const cycle = cycleMeta[cycleKey];
  const stories = storiesByCycle(cycleKey);
  const indexHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  return <main className={`norse-cycle-index norse-cycle-${cycleKey}`}>
    <nav className="myth-atlas-nav" aria-label={`${cycle.title}卷导航`}><a href={indexHref}>← 返回神话的一日</a><a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a></nav>
    <header className="norse-cycle-hero"><span>{cycle.kicker} / {stories.length} STORIES</span><b aria-hidden="true">{cycle.mark}</b><h1>{cycle.title}</h1><h2>{cycle.subtitle}</h2><p>{cycle.intro}</p><a href="#stories">翻开目录 <i>↓</i></a></header>
    <section className="norse-cycle-prologue"><span>PROLOGUE</span><h2>先让故事自己说话。</h2><p>这一卷不再把人物行动拆成档案。选择一篇，进入连续叙事；出处、版本差异和文本边界统一留在故事结尾。</p></section>
    <section className="norse-cycle-stories" id="stories"><header><span>{cycle.kicker} / CONTENTS</span><h2>{stories.length}篇故事，<br />组成一个时刻。</h2></header><div>{stories.map((story)=><StoryCard story={story} key={story.slug}/>)}</div></section>
    <div className="norse-thread-footer-links"><a href={indexHref}>← 返回三卷入口</a><a href={`${siteBasePath}/myths/norse/heroes${staticPageSuffix}`}>前往英雄传说 →</a></div>
  </main>;
}
