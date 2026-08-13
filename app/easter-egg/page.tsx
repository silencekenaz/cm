import type { Metadata } from "next";
import DuckMascot from "./DuckMascot";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "酸菜国｜ROOM 24",
  description: "这里是酸菜鱼永恒的土地。",
};

const fragments = [
  { no: "01", code: "NE OVERFLOW", title: "想法从通风口逃走了", text: "本室原计划保存一个结论。凌晨 02:41，结论自行分裂成十九个问题，目前仍有三个下落不明。" },
  { no: "02", code: "DELPHI LINE", title: "阿波罗留下了一通未接来电", text: "语音只有海浪、弓弦和一句含混的提醒：预言并不负责替你做决定，它只负责让借口无处藏身。" },
  { no: "03", code: "TYPE INCIDENT", title: "类型学坐标发生漂移", text: "ENTP、7w8、784、sp/so 与 VLEF 曾在这里进行圆桌会议。会议没有形成纪要，但零食全部消失。" },
  { no: "04", code: "MYTH PROTOCOL", title: "众神拒绝按谱系表排队", text: "洛基换了座位，伊西斯拿走了主持人的真名，奥丁声称这一切早已写在诗里。档案员决定下班。" },
];

export default function EasterEggPage() {
  return (
    <main className="easter-archive-page">
      <nav>
        <a href={`${siteBasePath}/`}>← EXIT ARCHIVE</a>
        <span>ROOM 24 / CLEARANCE XY</span>
      </nav>

      <header>
        <div className="easter-archive-number" aria-hidden="true">24</div>
        <DuckMascot />
        <span>UNLISTED FILE / 10—18</span>
        <h1>你找到了<br />酸菜国。</h1>
        <p>这里是酸菜鱼的国度，太阳已经堕落，一切分崩离析。但是好在，这里将是酸菜鱼永恒的土地。</p>
      </header>

      <section className="easter-archive-log" aria-label="异常档案记录">
        {fragments.map((fragment) => (
          <article key={fragment.no}>
            <div><span>{fragment.no}</span><small>{fragment.code}</small></div>
            <h2>{fragment.title}</h2>
            <p>{fragment.text}</p>
            <b aria-hidden="true">✦</b>
          </article>
        ))}
      </section>

      <section className="easter-archive-terminal">
        <span>LAST TERMINAL OUTPUT</span>
        <p><b>cm@room24</b>:~$ reality --explain</p>
        <p className="easter-terminal-answer">error: reality has too many open tabs</p>
        <i aria-hidden="true" />
      </section>

      <footer className="easter-archive-footer">
        <p>档案不会自毁。它只会在你试图向别人证明时，突然显得非常普通。</p>
        <a href={`${siteBasePath}/`}>回到可公开区域 ↗</a>
      </footer>
    </main>
  );
}
