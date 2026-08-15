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
    title: "女王在汤开时宣布建国",
    text: "太阳掉下去的第三天，河水开始发咸，幸存者围着一口石锅，认真讨论世界是不是已经完了。女王尝了一勺汤，说：“还差点酸。”她倒进最后一坛酸菜，汤立刻沸腾，鱼片一片片浮上来，像一群及时赶到的白旗。众人刚松口气，女王便把长勺往锅沿一敲：“既然还有晚饭，这里就还是个国家。”酸菜国由此建立。后来他们以汤沸计算日子，以花椒浮沉判断季节；至于国界，大致就是香味能飘到的地方。",
    graffiti: "国界我顺手往外画了三寸。没人发现。",
    mark: "← 这锅我尝过，酸度尚可",
    signature: "小红毛",
  },
  {
    no: "02",
    code: "FALSE-GOD PACT / 敌盟密约",
    title: "枯河盟约，以及一根倒霉的柱子",
    text: "伪人与蛮夷在枯河第七座桥下会面。蛮夷嫌伪人笑得太像自己，伪人嫌蛮夷连假笑都学不会，谈判眼看就要变成斗殴。伪神只好起身，把旁边的攻城柱徒手折成两截，问：“现在可以谈正事了吗？”四周顿时非常有外交礼仪。盟约很快写成：蛮夷出铁轮、道路与军械，伪人出假面、口音与城门里的内应；双方共同进攻酸菜国。史官在末尾补了一行：伪神武力惊人，本条绝无修辞。",
    graffiti: "柱子是不是提前锯过？我只负责提出问题。",
    mark: "外交礼仪（物理）↗",
    signature: "小红毛",
  },
  {
    no: "03",
    code: "TWO CROWNS / 王室战线",
    title: "黄焖鸡丞相捡回一位公主",
    text: "黄焖鸡丞相奉命巡边，回来时少了一匹马，多了一个裹在香菇披风里的孩子。他说是在翻倒的腌菜车旁捡的；女王问她多大，丞相报出年岁，朝堂安静了片刻——她只比女王小一岁，显然不适合被写进任何母女故事。女王于是分给她半顶王冠，叫她公主。多年后敌军压境，女王守着永沸之锅调动酸汤水道，公主提刀出城揭伪人的脸。两人偶尔争吵，但总能在蛮夷撞门前吵出一个更好的办法。",
    graffiti: "“少了一匹马”至今没有结案。丞相拒绝解释。",
    mark: "半顶王冠也算全额工伤",
    signature: "KENAZ",
  },
  {
    no: "04",
    code: "MASCOT UNIT / 毛绒密使",
    title: "两位吉祥物在夜里都很忙",
    text: "小沙沙白天伏在王座上方的旧旗穗间，看起来只负责可爱；入夜后，他沿城墙走一圈，把耳朵贴在砖上，便能报出蛮夷铁轮还有几里。小红毛从不贴墙，也很少亲自动手。他坐在公主的地图上，把真情报改成假情报，再把假情报改得像被识破的真情报。麻烦在于，他的阵营随心情移动：昨天诱敌救了全城，今天就可能为了验证新计策反坑酸菜。于是公主每次问“能信他吗”，大臣们都回答：“能，但请先准备第二个计划。”",
    graffiti: "本段可信度：37%。因为剩下的也是我写的。",
    mark: "删掉“反坑”二字。算了，留着更有威慑力。",
    signature: "小红毛",
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
            <aside className="redfur-graffiti" aria-label={`小红毛对第 ${fragment.no} 号档案的篡改`}>
              <img className="redfur-hand-arrow" src={`${siteBasePath}/kenaz-arrow-light.png`} alt="" aria-hidden="true" />
              <span>{fragment.mark}</span>
              <p>{fragment.graffiti}</p>
              <b>— {fragment.signature === "KENAZ" ? "ᚲ KENAZ" : fragment.signature} 擅自批注</b>
            </aside>
            {fragment.no === "04" && (
              <figure className="kenaz-self-portrait">
                <img src={`${siteBasePath}/kenaz-doodle-light.png`} alt="小红毛用亮色笔画下的滑稽自画像，耳后低低扎着一小撮头发" />
                <figcaption>小红毛 / 公主所取外号 / 真名已被本人涂黑</figcaption>
              </figure>
            )}
            <b aria-hidden="true">✦</b>
          </article>
        ))}
      </section>

      <section className="easter-archive-terminal">
        <span>ROYAL SIGNAL / LAST INTERCEPT</span>
        <p><b>princess@pickle-kingdom</b>:~$ identify --allies false-men barbarians</p>
        <p className="easter-terminal-answer">warning: 伪神已越过枯河。小沙沙说铁轮还有七里；小红毛说有三条妙计，但拒绝说明哪两条是给敌人的。</p>
        <aside className="redfur-terminal-hack" aria-label="小红毛篡改了终端记录">
          <del>ROYAL EYES ONLY</del><br />ᚲ KENAZ WAS HERE<br /><span>第四条妙计不存在。别找了。</span>
        </aside>
        <i aria-hidden="true" />
      </section>

      <footer className="easter-archive-footer">
        <p>太阳已经堕落。幸好汤还热，女王还在，公主已经出门，小红毛暂时没有叛变。</p>
        <span className="redfur-footer-note">“暂时”二字由本人核准。<br />有效期至读完本行。</span>
        <a href={`${siteBasePath}/`}>回到可公开区域 ↗</a>
      </footer>
    </main>
  );
}
