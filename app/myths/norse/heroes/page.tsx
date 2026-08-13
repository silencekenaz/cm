import type { Metadata } from "next";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "北欧英雄传说｜谱系、誓言与复仇",
  description: "北欧英雄诗与萨迦的阅读入口。",
};

const cycles = [
  ["01", "VÖLUNDR", "维兰德之歌", "被囚禁的工匠、复仇与越界技艺；处在神话人物与英雄叙事的接缝上。"],
  ["02", "VÖLSUNGAR", "沃尔松格谱系", "从沃尔松格、希格蒙德到西格鲁德，家族、神圣介入与被继承的诅咒逐代累积。"],
  ["03", "SIGURÐR", "西格鲁德与法夫尼尔", "屠龙、鸟语、宝藏与预言；胜利并没有让英雄脱离宝藏所携带的毁灭。"],
  ["04", "BRYNHILDR", "布伦希尔德的誓言", "识别、遗忘、替身求婚与被破坏的誓约，使爱情叙事转为名誉和复仇的灾难。"],
  ["05", "GUÐRÚN", "古德伦的余生", "英雄死亡之后，故事继续跟随幸存者；哀悼、婚姻、兄弟之死与报复构成漫长后果。"],
];

export default function Page() {
  return (
    <main className="norse-hero-page">
      <nav className="myth-atlas-nav" aria-label="北欧英雄传说页面导航">
        <a href={`${siteBasePath}/myths/norse${staticPageSuffix}`}>← 返回北欧总览</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>
      <header>
        <span>PATH 02 / HEROIC LEGENDS / PRELUDE</span>
        <h1>英雄不是<br />命运的例外。</h1>
        <p>从维兰德到沃尔松格，从西格鲁德到古德伦：神会偶尔介入，龙与女武神仍在场，但叙事的重量落到人的谱系、誓言、名誉与复仇。</p>
      </header>
      <aside><b>BUILDING NOTE</b><p>英雄篇先搭好五组故事入口。下一阶段会按《诗体埃达》的英雄诗、《沃尔松格萨迦》及相关文本逐章展开，不把不同版本悄悄合并。</p></aside>
      <section>
        {cycles.map(([number, oldNorse, title, body]) => (
          <article key={number}><span>{number} / {oldNorse}</span><h2>{title}</h2><p>{body}</p><small>ARCHIVE TO BE OPENED</small></article>
        ))}
      </section>
      <a className="norse-hero-back" href={`${siteBasePath}/myths/norse${staticPageSuffix}`}><span>返回冰与火之间</span><b aria-hidden="true">↖</b></a>
    </main>
  );
}
