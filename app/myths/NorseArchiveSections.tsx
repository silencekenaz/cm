import type { CSSProperties } from "react";

const gods = [
  {
    rune: "ᚨ",
    name: "奥丁",
    oldNorse: "ÓÐINN",
    role: "求知者",
    text: "为了看得更远，他用眼睛、身体与安宁交换知识。知道结局，并没有终止他的追问。",
  },
  {
    rune: "ᚦ",
    name: "索尔",
    oldNorse: "ÞÓRR",
    role: "守界者",
    text: "他以雷霆维持人与巨人之间脆弱的边界；最终仍将走向那条早已被预言的海蛇。",
  },
  {
    rune: "ᛏ",
    name: "提尔",
    oldNorse: "TÝR",
    role: "立约者",
    text: "为了让芬里尔受缚，他把手放进狼口。秩序从来不是免费的，它要求有人先承担代价。",
  },
  {
    rune: "ᚠ",
    name: "弗雷亚",
    oldNorse: "FREYJA",
    role: "欲望与战死",
    text: "爱情、魔法、金与战场在她身上并不矛盾；她提醒人们，生命的丰盛从不排除失去。",
  },
  {
    rune: "ᛃ",
    name: "弗雷",
    oldNorse: "FREYR",
    role: "丰饶者",
    text: "他曾为渴望交出宝剑，于是将在末日面对烈焰。一个选择，会在遥远的未来继续发声。",
  },
  {
    rune: "ᚲ",
    name: "洛基",
    oldNorse: "LOKI",
    role: "越界者",
    text: "他使秩序得以运转，也令它从内部开裂。诸神的敌人与同伴，常常是同一个人。",
  },
];

const realms = [
  ["ASGARD", "阿斯加德", "诸神的议事与秩序"],
  ["VANAHEIM", "华纳海姆", "丰饶、交换与另一支神族"],
  ["ALFHEIM", "亚尔夫海姆", "光明精灵的居所"],
  ["MIDGARD", "米德加德", "人类被海与蛇环绕的中庭"],
  ["JOTUNHEIM", "约顿海姆", "巨人与边界之外的力量"],
  ["SVARTALFHEIM", "斯瓦塔尔夫海姆", "工艺、地下与暧昧的名称"],
  ["NIFLHEIM", "尼福尔海姆", "雾、寒冷与原初之北"],
  ["MUSPELHEIM", "穆斯贝尔海姆", "火焰与原初之南"],
  ["HEL", "赫尔", "部分死者抵达的领域"],
];

export default function NorseArchiveSections() {
  return (
    <>
      <nav className="norse-section-nav" aria-label="北欧神话专区目录">
        <a href="#fate-well"><span>01</span>命运之井</a>
        <a href="#gods-and-fate"><span>02</span>诸神与命运</a>
        <a href="#world-tree"><span>03</span>世界树</a>
        <a href="#ragnarok"><span>04</span>诸神黄昏</a>
        <a href="#norse-memory"><span>05</span>诗歌记忆</a>
      </nav>

      <section className="norse-fate-section" id="fate-well">
        <div className="norse-fate-lines" aria-hidden="true"><i /><i /><i /></div>
        <header>
          <span>01 / URÐARBRUNNR</span>
          <p>THE WELL BENEATH THE TREE</p>
        </header>
        <div className="norse-fate-statement">
          <span aria-hidden="true">ᚾ</span>
          <h2>命运不是<br />最后一页。</h2>
          <p>它从故事开始时便已在场。诸神的伟大，不在于逃离结局，而在于仍然作出选择。</p>
        </div>
        <div className="norse-norns" aria-label="三位诺伦">
          <article>
            <span>URÐR / ᚢ</span>
            <h3>乌尔德</h3>
            <p>已经成为之事。过去并未消失，它沉入井水，成为此刻的重量。</p>
          </article>
          <article>
            <span>VERÐANDI / ᚹ</span>
            <h3>薇尔丹蒂</h3>
            <p>正在成为之事。命运不是静止的判词，也在每一次行动中继续生成。</p>
          </article>
          <article>
            <span>SKULD / ᛋ</span>
            <h3>诗寇蒂</h3>
            <p>将要或应当之事。未来既像债务，也像尚未抵达的召唤。</p>
          </article>
        </div>
      </section>

      <section className="norse-gods-section" id="gods-and-fate">
        <header>
          <span>02 / THE GODS KNOW</span>
          <h2>诸神如何<br />面对命运</h2>
          <p>他们不是全能者。知识、力量、盟约、欲望与诡计，都只能改变抵达结局的道路。</p>
        </header>
        <div className="norse-god-orbit" aria-hidden="true"><i /><i /><span>ᛟ</span></div>
        <div className="norse-gods-grid">
          {gods.map((god, index) => (
            <article key={god.oldNorse}>
              <div><span>0{index + 1}</span><b aria-hidden="true">{god.rune}</b></div>
              <small>{god.oldNorse} / {god.role}</small>
              <h3>{god.name}</h3>
              <p>{god.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="norse-tree-section" id="world-tree">
        <header>
          <span>03 / YGGDRASILL</span>
          <h2><span>命运发生在</span><br />一棵树上</h2>
          <p>九界并非一张在原始材料中固定不变的地图。这里把常见名称作为阅读坐标，而非唯一正确的宇宙平面图。</p>
        </header>
        <div className="norse-tree-map">
          <div className="norse-tree-trunk" aria-hidden="true"><i /><i /><i /><i /><b>ᛇ</b></div>
          <div className="norse-realms">
            {realms.map(([latin, chinese, note], index) => (
              <article key={latin} style={{ "--realm-index": index } as CSSProperties}>
                <span>{latin}</span>
                <h3>{chinese}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="norse-ragnarok-section" id="ragnarok">
        <div className="norse-wolf" aria-hidden="true"><i /><i /><b>ᚱ</b></div>
        <header>
          <span>04 / RAGNA RÖK</span>
          <h2>诸神的命运</h2>
          <p>末日之所以悲壮，不是因为无人知道，而是因为知道的人仍然赴约。</p>
        </header>
        <div className="norse-doom-track">
          <article><span>Ⅰ / PROPHECY</span><h3>预言先行</h3><p>女先知从创世说到毁灭。未来被说出之后，便成为所有行动的阴影。</p></article>
          <article><span>Ⅱ / BINDING</span><h3>束缚松动</h3><p>芬里尔、尘世巨蛇与被拘禁者都在等待；维护秩序的手段，也孕育了最终的反冲。</p></article>
          <article><span>Ⅲ / CHOICE</span><h3>仍然赴战</h3><p>奥丁走向狼，索尔走向蛇，弗雷走向火。预知失败，不等于行动失去意义。</p></article>
          <article><span>Ⅳ / AFTER</span><h3>余世再绿</h3><p>部分传统写下大地重新浮出海面。毁灭是否必然通向新生，仍应留意文本层次与后世影响。</p></article>
        </div>
        <p className="norse-ragnarok-word" aria-hidden="true">RAGNARÖK</p>
      </section>

      <section className="norse-memory-section" id="norse-memory">
        <header>
          <span>05 / WHAT THE POEMS KEEP</span>
          <h2>火会熄灭，<br />诗歌继续记得。</h2>
        </header>
        <div className="norse-memory-copy">
          <p>我们今天所说的“北欧神话”，主要经由中世纪冰岛写本抵达。它曾是口头诗歌、表演、知识与地方记忆；被写下时，也已经经历选择与重组。</p>
          <blockquote>不要把神话读成封闭的设定集。先听见诗句的节奏，再看一个名字如何在不同文本中改变。</blockquote>
        </div>
        <div className="norse-text-gates">
          <article><span>VÖLUSPÁ</span><h3>《女先知的预言》</h3><p>从世界初生直到诸神黄昏，是“诸神与命运”路线的主轴。</p></article>
          <article><span>HÁVAMÁL</span><h3>《至高者箴言》</h3><p>智慧、待客、名声、死亡与奥丁求取符文的代价。</p></article>
          <article><span>PROSE EDDA</span><h3>《散文埃达》</h3><p>斯诺里的诗学工程保存了大量叙事，也需要结合其时代语境阅读。</p></article>
        </div>
      </section>
    </>
  );
}
