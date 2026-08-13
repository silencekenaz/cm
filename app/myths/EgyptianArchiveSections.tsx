"use client";

import { useEffect, useState } from "react";

const sourceLinks = [
  {
    label: "《阿姆杜亚特书》纸草（第十夜时）",
    meta: "新王国王陵传统的后续传播｜大都会艺术博物馆",
    href: "https://www.metmuseum.org/art/collection/search/551100",
  },
  {
    label: "《亡灵书》第17咒",
    meta: "拉、欧西里斯与再生的注释型文本｜UCL Digital Egypt",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/literature/religious/bd17.html",
  },
  {
    label: "《亡灵书》第125咒",
    meta: "两真理之厅与心脏称量｜UCL Digital Egypt",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/literature/religious/bd125a.html",
  },
  {
    label: "《亡灵书》第136咒",
    meta: "登上拉之大船；承接棺材文材料｜UCL Digital Egypt",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/literature/religious/bd136.html",
  },
];

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hours = [
  {
    number: "01",
    phase: "DAWN / AKHET",
    title: "从地平线诞生",
    deity: "凯布利 · 拉",
    body: "黎明不是昨天的太阳被重新点亮，而是太阳神完成一次新的生成。圣甲虫形态的凯布利强调“成为”本身；拉的航程由此开始，世界也随光线重新变得可区分。",
    tone: "sand",
  },
  {
    number: "02",
    phase: "DAY / SKY",
    title: "携玛特而行",
    deity: "玛特 · 舒 · 托特",
    body: "白昼航行不是不受阻碍的自然现象。太阳船将正确的尺度带入世界：舒分隔天地，托特参与计算与言说，玛特则让秩序、正当与有效的仪式成为同一件事。",
    tone: "gold",
  },
  {
    number: "03",
    phase: "DUSK / WEST",
    title: "进入西方之门",
    deity: "拉 · 西方女神",
    body: "日落不是消失，而是转入不可见的航道。太阳在西方地平线衰老，船队进入杜亚特；从此每一段道路都有名字、门、守卫与必须被准确说出的知识。",
    tone: "ochre",
  },
  {
    number: "04–06",
    phase: "DEEP NIGHT / DUAT",
    title: "与欧西里斯相遇",
    deity: "拉 · 欧西里斯",
    body: "《阿姆杜亚特书》在最深夜时把太阳神与欧西里斯的领域并置。死者之王提供再生的身体维度，太阳带来运动与光；二者的接近令停滞的死亡转化为下一轮生命。",
    tone: "blue",
  },
  {
    number: "07–11",
    phase: "CRISIS / RESTORATION",
    title: "混沌并未消失",
    deity: "阿波菲斯 · 伊西斯 · 塞特",
    body: "巨蛇阿波菲斯试图使船停下，使时间无法继续。夜航图文把束缚、斩击和护卫分配给不同神力：胜利不是一次终结，而是一项每夜都必须重新完成的共同工作。",
    tone: "red",
  },
  {
    number: "12",
    phase: "REBIRTH / EAST",
    title: "穿过蛇身，重返天空",
    deity: "凯布利 · 努特 · 舒",
    body: "最后夜时把再生画成一次通过：太阳船穿过巨蛇，凯布利在东方出现，舒接住新生的太阳。黎明证明玛特暂时恢复，却也预告下一次航行已经开始。",
    tone: "dawn",
  },
];

const journeyStations = [
  {
    label: "STATION 01 / EASTERN HORIZON",
    title: "生成",
    note: "凯布利托起日轮：黎明不是回到原点，而是一次新的成为。",
    image: "egypt-dawn-khepri.webp",
    alt: "原创插画：凯布利以圣甲虫形态从原初水域托起初生太阳",
    hours: hours.slice(0, 2),
  },
  {
    label: "STATION 02 / THE DEEPEST HOUR",
    title: "接近",
    note: "太阳的运动与欧西里斯的再生在杜亚特深处彼此作用。",
    image: "egypt-midnight-union.webp",
    alt: "原创插画：夜形态的拉乘船接近神龛中的欧西里斯",
    hours: hours.slice(2, 4),
  },
  {
    label: "STATION 03 / THE WAY OUT",
    title: "通过",
    note: "蛇在这里是再生的通道；船穿过黑夜，凯布利在东方出现。",
    image: "egypt-rebirth-east.webp",
    alt: "原创插画：太阳船穿过蛇形通道，凯布利在东方托起新生日轮",
    hours: hours.slice(4, 6),
  },
];

type GodProfile = {
  slug: string;
  code: string;
  name: string;
  image: string;
  alt: string;
  position: string;
  role: string;
  form: string;
  summary: string;
  details: string[];
  source: { label: string; href: string };
};

const gods: GodProfile[] = [
  {
    slug: "seth",
    code: "STẖ",
    name: "塞特",
    image: "egypt-god-seth.webp",
    alt: "原创插画：塞特以长吻、方耳的塞特动物头形象持矛守卫太阳船",
    position: "PROW / 船首外侧",
    role: "持矛迎向危险",
    form: "人身与独特的“塞特动物”复合头形；并非胡狼。",
    summary: "在部分太阳船图像里，塞特不是单纯的破坏者，而是站在船首刺击阿波菲斯的护卫。",
    details: [
      "塞特的角色会随文本、时代与场景改变。他既能代表暴力、沙漠、冲突与王权竞争，也能把自身的强悍转向太阳神的敌人。把他压缩成固定的“邪神”，会抹去埃及材料容纳矛盾角色的方式。",
      "这里把他置于船首外侧，依据的是太阳船防御图像所强调的动作：矛尖朝向使航程停滞的阿波菲斯。他的岗位不是宣告道德清白，而是让危险的力量暂时服务于玛特。",
    ],
    source: { label: "大都会艺术博物馆：太阳船船首的塞特", href: "https://www.metmuseum.org/art/collection/search/590745" },
  },
  {
    slug: "maat",
    code: "MꜢꜤT",
    name: "玛特",
    image: "egypt-god-maat.webp",
    alt: "原创插画：人形女神玛特佩戴一根鸵鸟羽",
    position: "PROW / 船首与航向",
    role: "使航程保持正确尺度",
    form: "人形女神，最鲜明的标识是一根鸵鸟羽。",
    summary: "她既是神祇，也是“正确、正当、有效”的原则；太阳每日运行本身就是维持玛特的行动。",
    details: [
      "玛特不是抽象秩序被拟人化之后的装饰。对古埃及材料而言，宇宙运行、正当统治、真实言说与有效仪式互相连通；太阳神携玛特而行，也意味着世界必须一次次被校准。",
      "某些太阳船图像把玛特置于引导航程的位置。本页借用这一关系，让她靠近船首，但不声称她在每一部冥界书、每一个夜时都占据同一个固定座位。",
    ],
    source: { label: "大都会艺术博物馆：玛特与太阳的航程", href: "https://www.metmuseum.org/de/exhibitions/divine-egypt/inside-the-exhibition" },
  },
  {
    slug: "ra",
    code: "RꜤ",
    name: "拉",
    image: "egypt-god-ra.webp",
    alt: "原创插画：鹰隼头的拉佩戴带圣蛇的日轮",
    position: "CENTER / 中央神龛",
    role: "航程的核心与被护卫者",
    form: "常见为鹰隼头、头顶日轮；夜间也可呈羊首形态。",
    summary: "拉不是一幅静止的太阳肖像，而是在形态转换中穿过天空、杜亚特与再生节点的行动者。",
    details: [
      "太阳船把拉的运行表现成协作：神龛中的太阳神是航程核心，但航行依赖引导、护卫、知识、门与准确的言说。日落因此不是消失，而是进入另一套可被命名的空间秩序。",
      "本页肖像采用最易识别的鹰隼头与日轮；《阿姆杜亚特书》的深夜场景则常强调拉的夜形态。不同形象不是互相否定，而是神在不同时间与关系中显现的方式。",
    ],
    source: { label: "大都会艺术博物馆：拉的昼夜航程", href: "https://www.metmuseum.org/de/exhibitions/divine-egypt/inside-the-exhibition" },
  },
  {
    slug: "thoth",
    code: "ḎḤWTJ",
    name: "托特",
    image: "egypt-god-thoth.webp",
    alt: "原创插画：朱鹭头的托特佩戴月轮并进行书写",
    position: "MIDSHIP / 船中记录位",
    role: "计算、书写与有效言说",
    form: "常见为朱鹭头人身，也可呈狒狒形。",
    summary: "记录与命名不是航程之外的行政工作，而是让时间、仪式与宇宙保持可理解的技术。",
    details: [
      "托特与书写、计算、月亮和有效言说相连。在审判场景中他记录结果，在太阳传统中则能作为神圣知识与秩序运行的参与者。朱鹭头是他最常见、也最容易辨认的图像之一。",
      "一件《亡灵书》纸草残片把朱鹭头托特与凯布利、舒、泰芙努特、伊西斯共同画在太阳船上。本页把他安排在船中“记录位”，是对这一关系的可视化阅读，而非一份跨时代通用的船员名单。",
    ],
    source: { label: "大都会艺术博物馆：太阳船上的托特与伊西斯", href: "https://www.metmuseum.org/art/collection/search/553484" },
  },
  {
    slug: "isis",
    code: "ꜢST",
    name: "伊西斯",
    image: "egypt-god-isis.webp",
    alt: "原创插画：人形女神伊西斯佩戴王座形头饰并举手护卫",
    position: "MIDSHIP / 船中护卫位",
    role: "以知识、言语与魔力护航",
    form: "人形女神；这里采用与名字相连的王座形头饰。",
    summary: "她的力量来自知道、说出并使言语生效；在不同太阳文本里，她的具体岗位并不完全相同。",
    details: [
      "伊西斯的叙事常把魔力写成精确知识的实践：知道名字、组织言语、保护身体、恢复关系。她不是单一的母神标签，也不能只用与欧西里斯或荷鲁斯的亲属关系来解释。",
      "太阳船材料中确有伊西斯随行的图像，而夜航传统也把她放进对抗阿波菲斯的护卫网络。本页让她靠近托特，是在强调知识与有效言说的协作，并不暗示两者始终拥有固定相邻座位。",
    ],
    source: { label: "大都会艺术博物馆：太阳船纸草残片", href: "https://www.metmuseum.org/art/collection/search/553484" },
  },
  {
    slug: "osiris",
    code: "WSJR",
    name: "欧西里斯",
    image: "egypt-god-osiris.webp",
    alt: "原创插画：木乃伊形人神欧西里斯佩戴阿特夫冠并持曲柄杖与连枷",
    position: "DUAT / 船外的第六夜时",
    role: "被航程抵达，而非普通船员",
    form: "木乃伊形人神，常戴阿特夫冠，持曲柄杖与连枷。",
    summary: "他没有被硬塞进船员列队；太阳在杜亚特深处与他的再生领域接近，航程才获得更新的身体维度。",
    details: [
      "欧西里斯是死亡者之王，也是死亡之后生命延续与再生的中心。他通常以包裹身体的人形神出现，而不是动物头神。绿色或深色面容、阿特夫冠、曲柄杖与连枷共同构成常见识别线索。",
      "《阿姆杜亚特书》的中夜时把拉与欧西里斯的领域推向关键接近：太阳带来运动，欧西里斯带来可再生的身体。页面因此把他放在船体下方的神龛，而不是伪造一个六神同船的固定场景。",
    ],
    source: { label: "大都会艺术博物馆：《阿姆杜亚特书》纸草", href: "https://www.metmuseum.org/art/collection/search/551100" },
  },
];

const moreGods = [
  ["凯布利", "清晨太阳的“生成”形态"],
  ["舒", "分隔天地，并在黎明承接太阳"],
  ["泰芙努特", "与湿气及太阳神谱系相连"],
  ["哈索尔", "天空、音乐、护佑与太阳之眼的多重关系"],
  ["奈特", "古老的创生与护卫女神"],
  ["赫卡", "使神力与仪式得以发生的力量"],
];

export default function EgyptianArchiveSections() {
  const [activeGod, setActiveGod] = useState<GodProfile | null>(null);
  const [showMoreGods, setShowMoreGods] = useState(false);

  useEffect(() => {
    if (!activeGod) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGod(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeGod]);

  return (
    <>
      <nav className="egypt-route-nav" aria-label="拉的旅程章节导航">
        <a href="#maat-balance"><span>01</span>玛特与伊斯菲特</a>
        <a href="#solar-voyage"><span>02</span>太阳的十二夜时</a>
        <a href="#barque-crew"><span>03</span>船上的诸神</a>
        <a href="#egypt-sources"><span>04</span>原典坐标</a>
      </nav>

      <section className="egypt-balance" id="maat-balance">
        <header>
          <span>01 / EQUILIBRIUM IS AN ACTION</span>
          <h2>秩序不是静止，<br />而是持续校准。</h2>
          <p>玛特与混沌的对峙，不是一场打完便结束的战争。太阳必须每天航行，仪式必须正确执行，语言必须准确说出；宇宙的稳定来自重复完成这些行动。</p>
        </header>

        <div className="egypt-balance-scale" aria-label="玛特、伊斯菲特与努恩的关系">
          <article className="maat-panel">
            <div className="egypt-feather" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <span>MAAT / MꜢꜤT</span>
            <h3>玛特</h3>
            <p>正确的尺度、正当的行动、可持续的秩序。她既出现在太阳神的航程中，也出现在审判与王权的语言里。</p>
          </article>
          <div className="balance-axis" aria-hidden="true"><span>↔</span><i /></div>
          <article className="isfet-panel">
            <div className="egypt-serpent-mark" aria-hidden="true"><i /><i /><i /></div>
            <span>ISFET / DISRUPTION</span>
            <h3>伊斯菲特</h3>
            <p>错误、破坏、失序与使航程停止的力量。阿波菲斯是它最醒目的叙事形象，却不是一个能够被永久消灭的“终极反派”。</p>
          </article>
        </div>

        <aside className="egypt-nun-note">
          <span>IMPORTANT DISTINCTION</span>
          <p><b>努恩不是阿波菲斯。</b>原初之水代表未分化与潜能，并不等同于应被摧毁的邪恶混沌。页面把“混沌”主要用于伊斯菲特式的失序，同时保留努恩作为创生背景。</p>
        </aside>
      </section>

      <section className="egypt-voyage" id="solar-voyage">
        <header>
          <div>
            <span>02 / THE SOLAR BARQUE</span>
            <h2>拉的旅程</h2>
          </div>
          <p>以《阿姆杜亚特书》的十二夜时为脊柱，但不假装所有材料来自同一时代。白昼、审判与创世的线索，会从其他文本中谨慎接入。</p>
        </header>

        <figure className="egypt-barque-figure">
          <img src={`${siteBasePath}/ra-night-barque.webp`} alt="原创插画：拉的太阳船在杜亚特夜航，玛特之羽立于船首，阿波菲斯盘踞在下方水域" />
          <figcaption>
            <span>CONTEMPORARY VISUAL INTERPRETATION</span>
            <p>太阳船不是孤独英雄的交通工具：它是一套由众神、咒语、门与正确知识共同维持的宇宙机制。</p>
          </figcaption>
        </figure>

        <div className="egypt-journey-weave">
          {journeyStations.map((station, stationIndex) => (
            <section id={`journey-station-${stationIndex + 1}`} className={stationIndex % 2 === 1 ? "is-reversed" : ""} key={station.label}>
              <figure>
                <img src={`${siteBasePath}/${station.image}`} alt={station.alt} />
                <figcaption>
                  <span>{station.label}</span>
                  <h3>{station.title}</h3>
                  <p>{station.note}</p>
                </figcaption>
              </figure>
              <div className="egypt-station-hours">
                {station.hours.map((hour) => (
                  <article className={`is-${hour.tone}`} key={hour.number}>
                    <div><span>{hour.number}</span><small>{hour.phase}</small></div>
                    <h3>{hour.title}</h3>
                    <b>{hour.deity}</b>
                    <p>{hour.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="egypt-crew" id="barque-crew">
        <header>
          <span>03 / GODS REVEALED BY THE JOURNEY</span>
          <h2>不是一张神谱，<br />是一组岗位。</h2>
          <p>沿着拉的航程认识诸神，可以避免把埃及神话压成“谁是谁的孩子”列表。神祇首先通过行为、地点、仪式和彼此关系显现。</p>
        </header>

        <div className="egypt-barque-map" aria-label="太阳船岗位关系图">
          <div className="egypt-barque-map-intro">
            <span>COMPOSITE READING MAP / 跨文本阅读图</span>
            <p>船首在左。头像呈现的是不同材料中的岗位关系，不声称六位神祇曾以这套顺序同时出现在同一幅古代图像里。</p>
          </div>

          <div className="egypt-barque-water" aria-hidden="true"><i /><i /><i /></div>
          <div className="egypt-barque-deck">
            {gods.filter((god) => god.slug !== "osiris").map((god, index) => (
              <button
                className={`egypt-god-portrait is-${god.slug}`}
                type="button"
                onClick={() => setActiveGod(god)}
                aria-haspopup="dialog"
                aria-label={`查看${god.name}的详细介绍`}
                key={god.slug}
              >
                <span className="egypt-god-position">{god.position}</span>
                <img src={`${siteBasePath}/${god.image}`} alt={god.alt} />
                <span className="egypt-god-label"><b>{god.name}</b><small>{god.role}</small></span>
                <i aria-hidden="true">OPEN ↗</i>
                <em>0{index + 1}</em>
              </button>
            ))}
            <div className="egypt-barque-hull" aria-hidden="true"><span>THE BARQUE OF RA</span></div>
          </div>

          <div className="egypt-duat-encounter">
            <span className="egypt-duat-path" aria-hidden="true">↓ 04 — 06 HOURS / DESCENT INTO DUAT</span>
            <button
              className="egypt-god-portrait is-osiris"
              type="button"
              onClick={() => setActiveGod(gods.find((god) => god.slug === "osiris") ?? null)}
              aria-haspopup="dialog"
              aria-label="查看欧西里斯的详细介绍"
            >
              <span className="egypt-god-position">{gods[5].position}</span>
              <img src={`${siteBasePath}/${gods[5].image}`} alt={gods[5].alt} />
              <span className="egypt-god-label"><b>{gods[5].name}</b><small>{gods[5].role}</small></span>
              <i aria-hidden="true">OPEN ↗</i>
              <em>06</em>
            </button>
            <p>“不在船上”也是一种位置：欧西里斯是太阳在最深夜时抵达的再生节点。</p>
          </div>
        </div>

        <div className="egypt-more-gods">
          <button type="button" onClick={() => setShowMoreGods((visible) => !visible)} aria-expanded={showMoreGods} aria-controls="egypt-more-gods-list">
            <span>{showMoreGods ? "收起神名册" : "认识更多神明"}</span><b aria-hidden="true">{showMoreGods ? "↑" : "↓"}</b>
          </button>
          {showMoreGods && (
            <div id="egypt-more-gods-list">
              <header><span>NEXT ARCHIVE / 待展开</span><p>这些名字会在后续沿航程进入独立档案；当前先保留它们与太阳旅程的连接点。</p></header>
              {moreGods.map(([name, note], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{note}</p></article>)}
            </div>
          )}
        </div>
      </section>

      {activeGod && (
        <div className="egypt-god-dialog-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setActiveGod(null);
        }}>
          <article className="egypt-god-dialog" role="dialog" aria-modal="true" aria-labelledby={`egypt-god-dialog-${activeGod.slug}`}>
            <button className="egypt-god-dialog-close" type="button" onClick={() => setActiveGod(null)} aria-label="关闭神祇介绍">×</button>
            <figure><img src={`${siteBasePath}/${activeGod.image}`} alt={activeGod.alt} /><figcaption>{activeGod.code}</figcaption></figure>
            <div className="egypt-god-dialog-copy">
              <span>{activeGod.position}</span>
              <h2 id={`egypt-god-dialog-${activeGod.slug}`}>{activeGod.name}</h2>
              <b>{activeGod.role}</b>
              <dl><dt>图像形态</dt><dd>{activeGod.form}</dd></dl>
              <p className="egypt-god-dialog-summary">{activeGod.summary}</p>
              {activeGod.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a href={activeGod.source.href} target="_blank" rel="noreferrer">原典与馆藏坐标：{activeGod.source.label} ↗</a>
            </div>
          </article>
        </div>
      )}

      <section className="egypt-sources" id="egypt-sources">
        <header>
          <div>
            <span>04 / TEXTS ARE LAYERED</span>
            <h2>原典坐标</h2>
          </div>
          <p>“埃及神话”跨越约三千年，也跨越王陵墙面、棺椁、纸草和神庙仪式。以下不是统一正典，而是本页叙事的材料坐标。</p>
        </header>

        <div className="egypt-source-timeline">
          <article><span>OLD KINGDOM</span><h3>金字塔文</h3><p>王室墓室墙面的咒语群，保存升天、太阳神与创生的早期书面层次。</p></article>
          <article><span>MIDDLE KINGDOM</span><h3>棺材文</h3><p>材料扩展到棺椁内部；“两路之书”等地图化传统让冥界道路变得可被辨认。</p></article>
          <article><span>NEW KINGDOM</span><h3>阿姆杜亚特书</h3><p>以十二夜时描绘太阳穿越杜亚特；最初集中于王陵，后来进入非王室葬仪。</p></article>
          <article><span>NEW KINGDOM</span><h3>门之书</h3><p>同样组织夜航，却以连续关门、守卫与被分类的冥界群体形成自身结构。</p></article>
          <article><span>NEW KINGDOM →</span><h3>“出行于白昼”咒语</h3><p>现代所谓《亡灵书》是可选择、可重组的咒语集合；第17、125、136咒为本页提供补充。</p></article>
        </div>

        <div className="egypt-source-links">
          {sourceLinks.map((source) => (
            <a href={source.href} target="_blank" rel="noreferrer" key={source.label}>
              <span>{source.label}</span>
              <small>{source.meta}</small>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>

        <aside>
          <span>METHOD / 方法</span>
          <p>本页用“拉的旅程”建立阅读顺序，而不是声称古埃及人拥有一部同名、固定章节的总叙事。不同文本互相照亮，也彼此保留差异。</p>
        </aside>
      </section>
    </>
  );
}
