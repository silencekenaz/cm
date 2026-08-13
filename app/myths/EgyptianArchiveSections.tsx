const sourceLinks = [
  {
    label: "《阿姆杜阿特书》纸草（第十夜时）",
    meta: "新王国王陵传统的后续传播｜大都会艺术博物馆",
    href: "https://www.metmuseum.org/art/collection/search/551100",
  },
  {
    label: "《亡灵书》第17咒",
    meta: "拉、奥西里斯与再生的注释型文本｜UCL Digital Egypt",
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
    body: "日落不是消失，而是转入不可见的航道。太阳在西方地平线衰老，船队进入杜阿特；从此每一段道路都有名字、门、守卫与必须被准确说出的知识。",
    tone: "ochre",
  },
  {
    number: "04–06",
    phase: "DEEP NIGHT / DUAT",
    title: "与奥西里斯相遇",
    deity: "拉 · 奥西里斯",
    body: "《阿姆杜阿特书》在最深夜时把太阳神与奥西里斯的领域并置。死者之王提供再生的身体维度，太阳带来运动与光；二者的接近令停滞的死亡转化为下一轮生命。",
    tone: "blue",
  },
  {
    number: "07–11",
    phase: "CRISIS / RESTORATION",
    title: "混沌并未消失",
    deity: "阿佩普 · 伊西斯 · 塞特",
    body: "巨蛇阿佩普试图使船停下，使时间无法继续。夜航图文把束缚、斩击和护卫分配给不同神力：胜利不是一次终结，而是一项每夜都必须重新完成的共同工作。",
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

const gods = [
  ["RꜤ", "拉", "不是静止的太阳肖像，而是不断变换形态、穿过天空与杜阿特的行动者。"],
  ["MꜢꜤT", "玛特", "既是女神，也是正确、正当、秩序与有效性的概念；她不是装饰在秩序旁边，而是秩序得以成立的条件。"],
  ["WSJR", "奥西里斯", "死亡与再生的王；在夜航最深处，他让太阳的更新具有身体与冥界的维度。"],
  ["ꜢST", "伊西斯", "以言语、知识与护卫之力参与对抗危险；不同文本赋予她的岗位并不完全相同。"],
  ["STẖ", "塞特", "既可能是冲突者，也能站在太阳船上抵御阿佩普。埃及材料允许同一神祇拥有彼此紧张的角色。"],
  ["ḎḤWTJ", "托特", "书写、计算与有效言说的神；记录与命名不是行政附属，而是维持宇宙可理解性的技术。"],
];

export default function EgyptianArchiveSections() {
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
            <p>错误、破坏、失序与使航程停止的力量。阿佩普是它最醒目的叙事形象，却不是一个能够被永久消灭的“终极反派”。</p>
          </article>
        </div>

        <aside className="egypt-nun-note">
          <span>IMPORTANT DISTINCTION</span>
          <p><b>努恩不是阿佩普。</b>原初之水代表未分化与潜能，并不等同于应被摧毁的邪恶混沌。页面把“混沌”主要用于伊斯菲特式的失序，同时保留努恩作为创生背景。</p>
        </aside>
      </section>

      <section className="egypt-voyage" id="solar-voyage">
        <header>
          <div>
            <span>02 / THE SOLAR BARQUE</span>
            <h2>拉的旅程</h2>
          </div>
          <p>以《阿姆杜阿特书》的十二夜时为脊柱，但不假装所有材料来自同一时代。白昼、审判与创世的线索，会从其他文本中谨慎接入。</p>
        </header>

        <figure className="egypt-barque-figure">
          <img src={`${siteBasePath}/ra-night-barque.png`} alt="原创插画：拉的太阳船在杜阿特夜航，玛特之羽立于船首，阿佩普盘踞在下方水域" />
          <figcaption>
            <span>CONTEMPORARY VISUAL INTERPRETATION</span>
            <p>太阳船不是孤独英雄的交通工具：它是一套由众神、咒语、门与正确知识共同维持的宇宙机制。</p>
          </figcaption>
        </figure>

        <div className="egypt-hour-track">
          {hours.map((hour) => (
            <article className={`is-${hour.tone}`} key={hour.number}>
              <div><span>{hour.number}</span><small>{hour.phase}</small></div>
              <h3>{hour.title}</h3>
              <b>{hour.deity}</b>
              <p>{hour.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="egypt-crew" id="barque-crew">
        <header>
          <span>03 / GODS REVEALED BY THE JOURNEY</span>
          <h2>不是一张神谱，<br />是一组岗位。</h2>
          <p>沿着拉的航程认识诸神，可以避免把埃及神话压成“谁是谁的孩子”列表。神祇首先通过行为、地点、仪式和彼此关系显现。</p>
        </header>
        <div className="egypt-god-grid">
          {gods.map(([code, name, body], index) => (
            <article key={name}>
              <div><span>0{index + 1}</span><b>{code}</b></div>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

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
          <article><span>NEW KINGDOM</span><h3>阿姆杜阿特书</h3><p>以十二夜时描绘太阳穿越杜阿特；最初集中于王陵，后来进入非王室葬仪。</p></article>
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
