"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { godRealmStories } from "./GodRealmStories";
import type { GodRealmStoryId } from "./GodRealmStories";

type Incident = {
  id: GodRealmStoryId;
  code: string;
  title: string;
  glyph: string;
  className: string;
  summary: ReactNode;
  extra?: ReactNode;
  status?: ReactNode;
  href?: string;
  linkLabel?: string;
  chapter: string;
  detail: string[];
  ending: string;
};

export default function GodRealmArchive({ suancaiHref, conflictHref }: { suancaiHref: string; conflictHref: string }) {
  const incidents: Incident[] = [
    {
      id: "odin",
      code: "01 / NORSE WING",
      title: "奥丁还在找人",
      glyph: "ᚨ",
      className: "godrealm-scene-odin",
      summary: <>奥丁坐在高椅上愁眉苦脸，像是刚刚又知道了一个不想知道的预言。他反复问自己的血兄弟洛基究竟去了哪里；西格恩翻过边境记录，平静地回答：“他好像去了酸菜国。”</>,
      extra: <>奥丁的眉头于是又往下压了一点。神之境没有人敢提醒他：以洛基的习惯，如果酸菜国这几天没有出事，可能只是事情还没被发现。</>,
      href: suancaiHref,
      linkLabel: "查看疑似目的地：酸菜国 ↗",
      chapter: "失踪血兄弟与一张酸味入境单",
      detail: [
        "奥丁已经在高椅上坐了三个早晨。第一天，乌鸦带回一根红头发；第二天，乌鸦带回半张写着“只是压力测试”的纸；第三天，两只乌鸦拒绝继续出差，并建议众神之父亲自面对现实。奥丁把长矛往地上一顿，现实没有出现，眉间的皱纹倒是又多了一道。",
        "“他去哪了？”奥丁第五次问。西格恩站在门边，手里拿着一张边境回执。回执上有酸菜汁留下的圆形水印，背面还有人用很快的笔迹写着：本人没有制造事故，事故是自愿发生的。她看了看那张纸，又看了看奥丁，选择了最节省时间的说法：“他好像去了酸菜国。”",
        "大厅立刻安静。索尔把锤子从桌上拿了下来，海尼尔假装自己突然对窗外的天气很感兴趣。奥丁闭上仅剩的那只眼，试图从命运里找出答案；命运给他看见一口锅、一个自称“小红毛”的红发旅客，以及有人正在把王宫的值班表改成藏宝图。",
        "“备马。”奥丁说。西格恩提醒他，酸菜国离神之境很远。奥丁又沉默了一会儿，把“备马”改成了“先备一封措辞严厉但保留兄弟情谊的信”。那封信写到第十四版时，酸菜国方向传来一声不太像自然形成的巨响。"
      ],
      ending: "档案结论：洛基的位置仍未确定；酸菜国的位置非常确定，并且正在冒烟。"
    },
    {
      id: "zeus",
      code: "02 / OLYMPUS HALL",
      title: "宙斯提出新计划",
      glyph: "ϟ",
      className: "godrealm-scene-zeus",
      summary: <>宙斯大声宣布自己还要再找几个美女，语气庄严得像在发布神谕。赫拉只用了几句话就让这项计划、发言人和附近的天气一起失去体面。</>,
      status: <>计划状态 / 已被骂死<br />重启可能 / 宙斯本人表示很高</>,
      chapter: "一场没有通过家庭委员会的雷霆计划",
      detail: [
        "宙斯推开会议厅大门时，身后跟着一阵非常配合气氛的雷。他宣布自己经过深思熟虑，决定再去寻找几位美女。这句话里真正经过深思熟虑的部分，大约只有“几位”究竟是三位还是五位。",
        "赫拉原本正在翻阅神之境的公共秩序报告。她缓慢地抬起头，先问他是否记得上一次变成天鹅以后发生了什么，又问他是否需要大家依次复习公牛、金雨和布谷鸟。每说出一种形态，窗外的雷声就小一点；等她念到最后，天空已经晴得像从未认识过宙斯。",
        "宙斯试图辩称这是外交活动。赫拉说很好，那么外交预算、出访名单和回程后的财产分配可以一起谈。众神之王听见“财产分配”四个字，立刻表示今天的会议主题其实是云层管理。",
        "会议结束后，他在走廊里悄悄告诉赫尔墨斯，计划并没有取消，只是进入保密阶段。赫尔墨斯看了一眼站在走廊尽头的赫拉，决定把这句话也列入需要保密的内容。"
      ],
      ending: "档案结论：计划已被骂死。宙斯否认死亡证明有效。"
    },
    {
      id: "enki",
      code: "03 / ERIDU OFFICE",
      title: "恩基正在救场",
      glyph: "𒀭",
      className: "godrealm-scene-enki",
      summary: <>恩利尔又准备毁灭人类。恩基没有时间加入走廊里的争吵，他正伏在水与泥板之间，思考怎样既不正面违抗命令，又能及时给人类递出一份足够明显的生存提示。</>,
      status: <>当前任务 / 阻止人类灭绝<br />常用方法 / 规则边缘精准操作</>,
      chapter: "神明禁止泄密，所以墙开始说话",
      detail: [
        "恩基的房间里堆着七块泥板、三张河道图和一只被迫参与机密会议的芦苇篮。门外，恩利尔的新命令刚刚送到：人类太吵，必须毁灭。送信的神官读完命令，发现恩基正在非常认真地研究墙。",
        "“我没有打算把消息告诉任何人。”恩基说。他确实没有看向任何人，只对着芦苇墙清了清嗓子，详细讨论起大船应当有多长、多宽，屋顶应该怎样封住，以及为什么某位住在舒鲁帕克的人最好今晚不要睡得太沉。墙当然不会泄密，只是墙后恰好有人。",
        "水位开始上涨时，神之境的其他神还在为谁借走了雷、谁踩了谁的尾巴争吵。恩基把最后一块泥板翻过来，在背面补了一行关于食物、种子与动物的说明。他写得很小，仿佛只是在修改某份并不存在的建筑规范。",
        "恩利尔后来质问是谁走漏消息。恩基露出一种极其无辜、通常意味着规则已经被他研究出洞的表情：“没有神向人类说话。”他说。至于墙说了什么，那属于建筑材料的个人行为。"
      ],
      ending: "档案结论：人类暂时保住了。墙因卓越情报工作获得年度表彰。"
    },
    {
      id: "apollo",
      code: "04 / LAUREL COURT",
      title: "阿波罗又哭了",
      glyph: "☼",
      className: "godrealm-scene-apollo",
      summary: <>阿波罗一手抱着月桂，一手抱着风信子，哭得光明之神本人都显得天气不佳。阿耳忒弥斯从旁经过，看了他一眼，给出今日最短也最准确的诊断：“恋爱脑。”</>,
      extra: <>阿波罗试图反驳，开口以后却只是换了一个更适合大哭的姿势。</>,
      status: <>眼泪来源 / 达芙妮与雅辛托斯<br />姐姐评价 / 不予安慰</>,
      chapter: "光明之神拒绝保持光明",
      detail: [
        "神之境的清晨本来晴朗，直到阿波罗抱着一捆月桂枝走进庭院。他把枝叶搂得像一封永远没有寄到的信，另一只手还捧着风信子。太阳跟在他身后，努力履行照明职责，却被哭声弄得像一盏心虚的灯。",
        "阿波罗先为达芙妮叹气，再为雅辛托斯落泪，随后又为自己竟然要同时为两件事落泪而感到悲伤。他试图弹琴排解，第一根弦刚响，附近的宁芙便集体关窗；第二根弦响起时，月桂树主动掉下一片叶子，像在递手帕。",
        "阿耳忒弥斯背着弓从庭院经过。她停下来，看了弟弟、月桂、风信子和地上逐渐形成的小水洼。“恋爱脑。”她说。阿波罗抬头，眼中同时装着艺术、痛苦与不服：“这是诗性记忆。”",
        "“是。”阿耳忒弥斯回答，“会积水的那种。”她走后，阿波罗沉默良久，认为这句话十分残酷，又十分适合写进下一首诗。于是他换了个更好看的角度继续哭。"
      ],
      ending: "档案结论：日照正常，局部有泪。阿耳忒弥斯拒绝提供情绪售后。"
    },
    {
      id: "duel",
      code: "05 / EGYPTIAN COURT",
      title: "塞特与荷鲁斯仍在争",
      glyph: "☥",
      className: "godrealm-scene-duel",
      summary: <>继承权、王位、旧怨和尊严照例摆满了桌面。塞特说一句，荷鲁斯顶一句；两边都坚持自己绝不会让步，语气却不知从什么时候开始变得有点甜蜜蜜。旁听诸神逐渐分不清这是庭审、决斗，还是某种谁先承认就算输的奇怪约会。</>,
      extra: <>他们当然坚称仍在认真争斗。至于为什么越吵离得越近，档案员决定尊重神秘。</>,
      href: conflictHref,
      linkLabel: "翻阅荷塞之争档案 ↗",
      chapter: "王位之争出现了不在卷宗里的气氛",
      detail: [
        "今天的庭审从塞特拍桌开始。荷鲁斯立刻也拍了一次，力度更大，位置却恰好落在塞特手边。两位神都没有挪开。书记官抬头看了一眼，决定先把“激烈冲突”写进记录，至于手为什么还放在那里，等证据更充分再说。",
        "塞特指控荷鲁斯年轻、固执、不懂统治；荷鲁斯反击塞特暴躁、傲慢、完全不讲理。每一条指控都像是在证明对方不适合王位，又像他们已经花了太多时间观察彼此。伊西斯听到第三轮时微微眯眼，托特写字的速度则明显慢了下来。",
        "争论进行到午后，塞特把一杯水推给荷鲁斯，说只是怕对手渴死导致决斗无效。荷鲁斯喝了，又把杯子推回去，声称自己不接受恩惠，只是代为检查是否有毒。旁听席传来一声没有忍住的笑，随后所有神都低头假装研究王权法。",
        "两位当事神对此坚决否认。塞特说这是战术，荷鲁斯说这是心理战。他们一边否认，一边从法庭东侧吵到西侧，距离始终没有超过半步。拉看着他们，第一次认真考虑太阳船是否可以提前进入杜亚特。"
      ],
      ending: "档案结论：王位归属仍待裁定。甜蜜气氛不具备法律效力，但已被全庭注意。"
    }
  ];

  const [active, setActive] = useState<Incident | null>(null);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", closeOnEscape); };
  }, [active]);

  const openRandom = () => {
    const pool = active ? incidents.filter((incident) => incident.id !== active.id) : incidents;
    setActive(pool[Math.floor(Math.random() * pool.length)]);
  };

  const activeStory = active ? godRealmStories[active.id] : [];

  return <>
    <header className="godrealm-country-hero">
      <div className="godrealm-orbits" aria-hidden="true"><i>ᚨ</i><i>Ω</i><i>𒀭</i><i>☥</i><i>☼</i></div>
      <span>GOD REALM / INTER-PANTHEON INCIDENT DESK</span>
      <h1><button type="button" onClick={openRandom} aria-label="随机调取一份神明事故档案">神之境</button></h1>
      <p>传说这里是神生活的地方。实际考察表明，这里更像一座把阿斯加德、奥林匹斯、两河神殿、德尔斐和埃及王庭塞进同一栋楼的大型公共休息室——权能通天，情绪稳定者暂未发现。</p>
      <strong>点击大标题 / 随机调取一份神明事故</strong>
    </header>

    <section className="godrealm-incident-board">
      <header><span>DIVINE STATUS / LIVE</span><h2>今日神明<br />仍未消停。</h2><p>诸神本来各有自己的宇宙、谱系和仪式。来到神之境以后，他们获得了同一条走廊，以及互相听见隔壁吵架的机会。点击任意事故标题，可以调出详细神经记录。</p></header>
      <div>
        {incidents.map((incident) => <article key={incident.id} className={incident.className} data-glyph={incident.glyph}>
          <small>{incident.code}</small>
          <h3><button type="button" onClick={() => setActive(incident)}>{incident.title}<span>OPEN ↗</span></button></h3>
          <p>{incident.summary}</p>
          {incident.extra && <p>{incident.extra}</p>}
          {incident.status && <strong>{incident.status}</strong>}
          {incident.href && <a href={incident.href}>{incident.linkLabel}</a>}
        </article>)}
      </div>
    </section>

    {active && <div className="godrealm-story-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <article className={`godrealm-story-dialog godrealm-story-${active.id}`} role="dialog" aria-modal="true" aria-labelledby="godrealm-story-title">
        <header><span>{active.code} / NOVEL INCIDENT RECORD</span><button type="button" onClick={() => setActive(null)} aria-label="关闭神明事故档案">×</button></header>
        <div className="godrealm-story-heading"><i aria-hidden="true">{active.glyph}</i><div><small>{active.title}</small><h2 id="godrealm-story-title">{active.chapter}</h2></div></div>
        <div className="godrealm-story-copy godrealm-novel-copy">{activeStory.flatMap((section) => section.paragraphs).map((paragraph, index) => <p key={`${active.id}-${index}`}>{paragraph}</p>)}</div>
        <footer><strong>{active.ending}</strong><button type="button" onClick={openRandom}>再随机抽一卷 ↻</button></footer>
      </article>
    </div>}
  </>;
}
