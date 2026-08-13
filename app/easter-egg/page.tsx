import type { Metadata } from "next";
import DuckMascot from "./DuckMascot";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "酸菜国｜ROOM 24",
  description: "这里是酸菜鱼永恒的土地。",
};

const fragments = [
  {
    no: "01",
    code: "FOUNDING BROTH / 建国档案",
    title: "酸菜鱼从沸汤中建立国度",
    text: "太阳堕落后，旧世界的河流变成没有方向的盐水。酸菜国女王在一口不肯熄灭的石锅旁召集流民，以酸菜定疆界、以鱼片计年月：汤沸一次便是一天，花椒浮起便宣告新的季节。于是酸、辣、鲜成为三条国法，所有仍愿意分享一碗热汤的人，都被承认为酸菜国民。",
  },
  {
    no: "02",
    code: "FALSE-GOD PACT / 敌盟密约",
    title: "伪人与蛮夷在枯河订盟",
    text: "伪人擅长模仿面孔、口音与记忆，蛮夷则驾着铁轮车越过荒原。他们原本互不信任，却在枯河第七座桥下结盟：蛮夷提供道路与军械，伪人负责潜入城门。盟军共同听命于伪人的首领“伪神”。此人武力惊人，据说能徒手折断攻城柱，披甲冲过滚沸的护城汤而不改神色。",
  },
  {
    no: "03",
    code: "TWO CROWNS / 王室战线",
    title: "相差一岁的两顶王冠",
    text: "酸菜国建国初年，女王派黄焖鸡丞相巡视边境。丞相在一辆翻倒的腌菜车旁捡到一个孩子，把她裹进装香菇的披风带回王城；这个孩子后来成为酸菜国公主。公主只比女王小一岁，因此两人从来不是母女，而是近乎同龄的王室搭档。战时女王镇守永沸之锅、调动酸汤水道，公主率轻骑出城识破伪人假面：一个保证炉火不灭，一个保证国门不失。",
  },
  {
    no: "04",
    code: "MASCOT UNIT / 毛绒密使",
    title: "小沙沙巡城，小红毛布局",
    text: "女王的吉祥物小沙沙平日伏在王座上方的旧旗穗间，入夜后便沿城墙巡行，能从石砖的震动与风声中分辨蛮夷车队的方向。公主的吉祥物小红毛则是纯粹的脑力派：不擅长正面作战，却精于设局、伪造情报与反向推演，常在所有人看懂棋盘以前改变胜负。它名义上跟随公主，阵营却从未固定；有时替酸菜国诱敌深入，有时又会为自己的计划反坑酸菜。因此王室采纳小红毛的计谋时，总会同时准备一份防备小红毛的备用方案。",
  },
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

      <section className="easter-archive-log" aria-label="酸菜国战争档案">
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
        <span>ROYAL SIGNAL / LAST INTERCEPT</span>
        <p><b>princess@pickle-kingdom</b>:~$ identify --allies false-men barbarians</p>
        <p className="easter-terminal-answer">warning: 伪神已越过枯河；小沙沙听见了铁轮声；小红毛递交了三份互相矛盾的作战方案。</p>
        <i aria-hidden="true" />
      </section>

      <footer className="easter-archive-footer">
        <p>太阳可以堕落，城墙可以碎裂；只要锅底仍热，酸菜国便不会成为过去。</p>
        <a href={`${siteBasePath}/`}>回到可公开区域 ↗</a>
      </footer>
    </main>
  );
}
