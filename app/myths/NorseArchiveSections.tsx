"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type GodArchive = {
  rune: string;
  name: string;
  oldNorse: string;
  role: string;
  text: string;
  identity: string;
  archive: string[];
  fate: string;
  sources: { label: string; href: string }[];
};

const godArchives: GodArchive[] = [
  {
    rune: "ᚨ",
    name: "奥丁",
    oldNorse: "ÓÐINN",
    role: "求知者",
    text: "为了看得更远，他用眼睛、身体与安宁交换知识。知道结局，并没有终止他的追问。",
    identity: "战争、诗歌、死者与知识的多面神祇；不同诗篇强调的面向并不完全相同。",
    archive: [
      "《至高者箴言》让奥丁以第一人称回忆：他在风中的树上悬挂九夜，被长矛所伤，也没有得到食物与饮酒，最终拾得符文。这段诗把知识写成一次危险的自我献祭，而不是无代价的全知。",
      "《女先知的预言》把他置于无法取消的终局里：奥丁会在诸神黄昏与芬里尔相遇。预知没有令他退出故事；他仍召集战士、寻求智慧，并走向已经听闻的命运。",
    ],
    fate: "知道结局，仍为理解结局付出代价。",
    sources: [
      { label: "《至高者箴言》138–141节", href: "https://sacred-texts.com/neu/poe/poe04.htm" },
      { label: "《女先知的预言》", href: "https://sacred-texts.com/neu/poe/poe03.htm" },
    ],
  },
  {
    rune: "ᚦ",
    name: "索尔",
    oldNorse: "ÞÓRR",
    role: "守界者",
    text: "他以雷霆维持人与巨人之间脆弱的边界；最终仍将走向那条早已被预言的海蛇。",
    identity: "持有米约尔尼尔的雷神，也是埃达诗歌中反复与巨人交锋的保护性力量。",
    archive: [
      "《海米斯之歌》写索尔随船出海，以牛头为饵钓起尘世巨蛇。他挥锤击打怪物，海与大地为之震动；这次相遇没有结束双方的纠葛，却预演了末日的对手关系。",
      "《女先知的预言》预告索尔在诸神黄昏杀死巨蛇，随后只走九步便因蛇毒倒下。胜利与死亡落在同一段诗句里，因此他的力量从来不是免死的保证。",
    ],
    fate: "击败尘世巨蛇，也被它留下的毒带走。",
    sources: [
      { label: "《海米斯之歌》22–24节", href: "https://sacred-texts.com/neu/poe/poe09.htm" },
      { label: "《女先知的预言》56节", href: "https://sacred-texts.com/neu/poe/poe03.htm" },
    ],
  },
  {
    rune: "ᛏ",
    name: "提尔",
    oldNorse: "TÝR",
    role: "立约者",
    text: "为了让芬里尔受缚，他把手放进狼口。秩序从来不是免费的，它要求有人先承担代价。",
    identity: "与勇武、契约和裁断相关的神祇；现存材料关于他的叙事比奥丁或索尔少得多。",
    archive: [
      "《欺骗古鲁菲》叙述诸神试图用格莱普尼尔缚住芬里尔。狼怀疑细带有诈，要求一位神把手放进它口中作为担保；只有提尔上前。束缚收紧后，芬里尔咬断了他的手。",
      "《洛基的争辩》也提到这只失去的手，说明故事并非只存在于斯诺里的散文整理中。原典留下的是一次带有欺骗的集体行动，以及提尔独自承担的可见代价。",
    ],
    fate: "用自己的手，为诸神不可靠的保证作担保。",
    sources: [
      { label: "《散文埃达·欺骗古鲁菲》第34章", href: "https://vsnr.org/editions/snorri-sturluson-edda-prologue-and-gylfaginning/" },
      { label: "《洛基的争辩》38–40节", href: "https://archive.sacred-texts.com/neu/poe/poe10.htm" },
    ],
  },
  {
    rune: "ᚠ",
    name: "弗蕾雅",
    oldNorse: "FREYJA",
    role: "欲望与战死",
    text: "爱情、魔法、金与战场在她身上并不矛盾；她提醒人们，生命的丰盛从不排除失去。",
    identity: "华纳神族女神；与爱欲、赛德魔法、财富和战死者相关，但不能被缩减为单一的“爱神”。",
    archive: [
      "《格里姆尼尔之歌》说，弗蕾雅居于福尔克范格，每日选择一半战死者，另一半归奥丁。这里的她直接参与战死者的归属，而不只是宴饮与爱情故事的角色。",
      "《索列姆之歌》中，巨人索列姆以归还米约尔尼尔为条件索要弗蕾雅。她听闻后震怒并拒绝，随后诸神让索尔乔装成她去取回锤子。诗歌的笑剧结构不等于她同意成为交易对象。",
    ],
    fate: "在爱欲、魔法与战死之间保有不可简化的位置。",
    sources: [
      { label: "《格里姆尼尔之歌》第14节", href: "https://www.gutenberg.org/cache/epub/73533/pg73533-images.html" },
      { label: "《索列姆之歌》", href: "https://www.gutenberg.org/cache/epub/73533/pg73533-images.html" },
    ],
  },
  {
    rune: "ᛃ",
    name: "弗雷",
    oldNorse: "FREYR",
    role: "丰饶者",
    text: "他曾为渴望交出宝剑，于是将在末日面对烈焰。一个选择，会在遥远的未来继续发声。",
    identity: "华纳神族男神；与丰饶、和平、好年景相关，也是《史基尼尔之歌》欲望叙事的中心。",
    archive: [
      "《史基尼尔之歌》的序言写弗雷从至高座望见巨人之女葛德，因渴望而苦恼。他让侍从史基尼尔前去求婚，并把自己的宝剑交给使者。诗中随后的劝说与威胁，也使这段结合并非轻盈的爱情童话。",
      "《欺骗古鲁菲》把失去宝剑与诸神黄昏连接起来：弗雷将面对持火而来的苏尔特，却缺少那把能够自行战斗的好剑。不同文本的拼接应被看作斯诺里的叙事整理，而不是一份无缝传记。",
    ],
    fate: "曾交给使者的宝剑，在末日成为无法忽略的缺席。",
    sources: [
      { label: "《史基尼尔之歌》序言及相关诗节", href: "https://www.gutenberg.org/cache/epub/73533/pg73533-images.html" },
      { label: "《散文埃达·欺骗古鲁菲》", href: "https://vsnr.org/editions/snorri-sturluson-edda-prologue-and-gylfaginning/" },
    ],
  },
  {
    rune: "ᚲ",
    name: "洛基",
    oldNorse: "LOKI",
    role: "越界者",
    text: "他使秩序得以运转，也令它从内部开裂。诸神的敌人与同伴，常常是同一个人。",
    identity: "与诸神同行、又最终站到他们对面的复杂人物；原典没有把他稳定地归入现代意义的“恶神”类型。",
    archive: [
      "在《索列姆之歌》等诗篇里，洛基能替诸神找出办法：他借来羽衣探查锤子下落，又陪索尔完成伪装。可在《洛基的争辩》中，他以言语揭露、羞辱宴席上的诸神，关系早已处于破裂边缘。",
      "《欺骗古鲁菲》将巴德尔之死、洛基受缚和诸神黄昏串成因果链，并写他最终驾船加入诸神的敌方。需要注意：关于洛基的材料来自不同体裁与时代，不能自动拼成一个动机始终一致的人物弧光。",
    ],
    fate: "既参与修补秩序，也成为秩序最终裂开的接缝。",
    sources: [
      { label: "《洛基的争辩》", href: "https://archive.sacred-texts.com/neu/poe/poe10.htm" },
      { label: "《散文埃达·欺骗古鲁菲》第49–51章", href: "https://vsnr.org/editions/snorri-sturluson-edda-prologue-and-gylfaginning/" },
    ],
  },
];

const gods = ["ÓÐINN", "LOKI", "ÞÓRR", "TÝR", "FREYR", "FREYJA"].map(
  (name) => godArchives.find((god) => god.oldNorse === name) as GodArchive,
);

const realms = [
  ["ASGARD", "阿斯加德", "诸神的议事与秩序"],
  ["VANAHEIM", "华纳海姆", "丰饶、交换与另一支神族"],
  ["ALFHEIM", "亚尔夫海姆", "光明精灵的居所"],
  ["MIDGARD", "米德加德", "人类被海与蛇环绕的中庭"],
  ["JOTUNHEIM", "约顿海姆", "巨人与边界之外的力量"],
  ["SVARTALFHEIM", "斯瓦塔尔夫海姆", "工艺、地下与暧昧的名称"],
  ["NIFLHEIM", "尼弗尔海姆", "雾、寒冷与原初之北"],
  ["MUSPELHEIM", "穆斯贝尔海姆", "火焰与原初之南"],
  ["HEL", "海姆冥界", "部分死者抵达的领域"],
];

export default function NorseArchiveSections() {
  const [selectedGod, setSelectedGod] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeGod = selectedGod === null ? null : gods[selectedGod];

  useEffect(() => {
    if (!activeGod) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedGod(null);
      if (event.key === "ArrowRight") setSelectedGod((current) => current === null ? 0 : (current + 1) % gods.length);
      if (event.key === "ArrowLeft") setSelectedGod((current) => current === null ? 0 : (current - 1 + gods.length) % gods.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGod]);

  return (
    <>
      <nav className="norse-section-nav" aria-label="北欧神话专区目录">
        <svg className="norse-nav-tree" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
          <path className="norse-nav-trunk" d="M500 344C496 278 504 216 500 142C498 98 500 54 500 10" />
          <path d="M500 286C408 270 286 288 116 258" />
          <path d="M500 232C416 198 330 174 250 108" />
          <path d="M500 190C574 145 665 124 758 72" />
          <path d="M500 262C616 250 741 268 888 226" />
          <path d="M500 120C500 92 500 66 500 36" />
          <path className="norse-nav-root" d="M500 344C420 334 352 344 292 358M500 344C580 330 648 342 714 358M500 344C474 326 454 304 434 284M500 344C530 324 554 306 578 284" />
        </svg>
        <a href="#fate-well"><b aria-hidden="true">ᚢ</b><span>01</span>命运之井</a>
        <a href="#gods-and-fate"><b aria-hidden="true">ᚨ</b><span>02</span>诸神与命运</a>
        <a href="#world-tree"><b aria-hidden="true">ᛇ</b><span>03</span>世界树</a>
        <a href="#ragnarok"><b aria-hidden="true">ᚱ</b><span>04</span>诸神黄昏</a>
        <a href="#norse-memory"><b aria-hidden="true">ᛟ</b><span>05</span>诗歌记忆</a>
        <p aria-hidden="true"><span>YGGDRASILL</span> / FIVE PATHS BENEATH ONE CROWN</p>
      </nav>

      <section className="norse-fate-section" id="fate-well">
        <div className="norse-fate-lines" aria-hidden="true"><i /><i /><i /></div>
        <div className="norse-well-rings" aria-hidden="true"><i /><i /><i /><b>URÐR</b></div>
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
        <div className="norse-god-emblems" aria-hidden="true">
          <svg viewBox="0 0 130 70"><path d="M4 46c19-1 34-10 47-31 4 17 13 27 29 30l14-5-8 10 10 9c-23-9-39-6-51 10-8-14-21-20-41-23Z" /><path d="M78 35c12-2 23-9 32-23 2 10 8 17 17 20" /></svg>
          <i className="norse-hammer" />
          <svg viewBox="0 0 130 70"><path d="M126 46c-19-1-34-10-47-31-4 17-13 27-29 30l-14-5 8 10-10 9c23-9 39-6 51 10 8-14 21-20 41-23Z" /><path d="M52 35c-12-2-23-9-32-23-2 10-8 17-17 20" /></svg>
        </div>
        <div className="norse-gods-grid">
          {gods.map((god, index) => (
            <article key={god.oldNorse}>
              <div><span>0{index + 1}</span><b aria-hidden="true">{god.rune}</b></div>
              <small>{god.oldNorse} / {god.role}</small>
              <h3>{god.name}</h3>
              <p>{god.text}</p>
              <button type="button" onClick={() => setSelectedGod(index)} aria-label={`打开${god.name}的详细档案`}>
                OPEN ARCHIVE <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeGod && (
        <div className="norse-god-overlay" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setSelectedGod(null);
        }}>
          <article className="norse-god-dialog" role="dialog" aria-modal="true" aria-labelledby="norse-god-title">
            <button ref={closeButtonRef} className="norse-god-close" type="button" onClick={() => setSelectedGod(null)} aria-label="关闭诸神档案">×</button>
            <header>
              <span>GOD ARCHIVE / {String((selectedGod ?? 0) + 1).padStart(2, "0")}</span>
              <b aria-hidden="true">{activeGod.rune}</b>
              <div>
                <small>{activeGod.oldNorse} / {activeGod.role}</small>
                <h2 id="norse-god-title">{activeGod.name}</h2>
                <p>{activeGod.identity}</p>
              </div>
            </header>
            <div className="norse-god-archive-copy">
              <span>据原典整理</span>
              <div>{activeGod.archive.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
            <div className="norse-god-fate-note"><span>命运节点</span><p>{activeGod.fate}</p></div>
            <footer>
              <div>
                <span>原典索引</span>
                {activeGod.sources.map((source) => <a key={source.label} href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a>)}
              </div>
              <nav aria-label="切换神祇档案">
                <button type="button" onClick={() => setSelectedGod(((selectedGod ?? 0) - 1 + gods.length) % gods.length)}>← PREV</button>
                <button type="button" onClick={() => setSelectedGod(((selectedGod ?? 0) + 1) % gods.length)}>NEXT →</button>
              </nav>
            </footer>
          </article>
        </div>
      )}

      <section className="norse-tree-section" id="world-tree">
        <header>
          <span>03 / YGGDRASILL</span>
          <h2><span>命运发生在</span><br />一棵树上</h2>
          <p>九界并非一张在原始材料中固定不变的地图。这里把常见名称作为阅读坐标，而非唯一正确的宇宙平面图。</p>
        </header>
        <div className="norse-tree-map">
          <svg className="norse-tree-branches" viewBox="0 0 1000 760" preserveAspectRatio="none" aria-hidden="true">
            <path className="tree-core" d="M500 742C492 640 510 548 500 448C492 348 510 260 500 38" />
            <path d="M500 588C428 558 338 550 188 560M500 588C584 550 690 556 850 524" />
            <path d="M500 452C405 428 326 372 158 344M500 452C594 414 674 365 848 324" />
            <path d="M500 302C418 260 344 206 238 150M500 302C592 250 680 205 790 138" />
            <path d="M500 168C448 130 410 82 378 20M500 168C556 124 596 78 630 16" />
            <path className="tree-roots" d="M500 742C424 710 336 720 242 756M500 742C570 704 652 716 754 756M500 742C470 704 444 672 388 650M500 742C534 698 566 670 620 644" />
          </svg>
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
        <svg className="norse-serpent" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-70 238C110 48 270 348 470 174C636 28 762 294 1018 90" />
          <path className="serpent-head" d="M930 135l84-54-12 72-70 36Z" />
          <circle cx="989" cy="120" r="5" />
        </svg>
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
        <svg className="norse-longship" viewBox="0 0 420 210" aria-hidden="true">
          <path d="M34 148h337c-26 34-73 49-168 49-87 0-139-16-169-49Z" />
          <path d="M203 18v131M203 28l-112 95h112ZM210 30l102 92H210Z" />
          <path d="M15 198c53-18 96 18 149 0s98 18 151 0 78 8 101-2" />
          <path d="M60 148 35 112M349 148l31-40" />
        </svg>
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
