const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

const gods = [
  {
    name: "奥丁", oldNorse: "ÓÐINN", mark: "◉", role: "诗歌、知识、战争与死者",
    portrait: "他从来不像一位安坐王座、等待答案送上门的神。为了泉水里的智慧，他留下眼睛；为了符文，他把自己悬在风中的树上九夜。预言把末日告诉了他，他仍继续旅行、提问、试探，也继续为那场已知的失败召集战士。",
    ties: "弗丽嘉的丈夫；在不同文本中被称为巴德尔、索尔等神的父亲。海尼尔与洛德尔曾与他一同赋予最初的人类生命。",
    tales: "密米尔之泉、符文献祭、诗之蜜酒、与瓦夫苏鲁特尼尔的问答、诸神黄昏。",
  },
  {
    name: "弗丽嘉", oldNorse: "FRIGG", mark: "✦", role: "王后、预知与巴德尔之母",
    portrait: "《洛卡塞纳》说她知道众生的命运，却不把所知说出口。巴德尔做了不祥的梦后，她向万物索取誓言，几乎替儿子封住了所有死亡的入口；“几乎”成为整段悲剧最痛的一处。她的力量不是一句笼统的母性，而是预知之后仍尽力行动。",
    ties: "奥丁的妻子、巴德尔的母亲。她与弗蕾雅在后世常被混同，但现存文本仍以不同姓名、居所与叙事位置描写二者。",
    tales: "巴德尔的梦、万物立誓、赫尔莫德前往海姆冥界、埃吉尔宴会上的辩护。",
  },
  {
    name: "索尔", oldNorse: "ÞÓRR", mark: "ϟ", role: "雷霆、守护与巨人的对手",
    portrait: "索尔的锤子常把问题解决得很响，但他并不只有蛮力：在乌特加德，他输给被幻术改名的衰老、思想与大海；在索列姆的婚宴，他不得不穿上新娘礼服等锤子回到膝上。笑话与威力总能同时落到他身上，而他最重要的工作始终是守住诸界边缘。",
    ties: "希芙的丈夫，莫迪、马格尼与斯露德之父。许多旅途中由洛基、希亚费或提尔同行。",
    tales: "乌特加德竞赛、索列姆盗锤、希米尔的巨锅、垂钓耶梦加得、诸神黄昏。",
  },
  {
    name: "希芙", oldNorse: "SIF", mark: "≈", role: "金发的女神、索尔的妻子",
    portrait: "现存材料给希芙留下的独立叙事不多，这一点本身就值得诚实保留。最著名的故事里，洛基剪去她的头发，随后被迫请侏儒打造会像真发一样生长的金发；这场补救还顺带带回妙尔尼尔等神器。把她直接说成“大地女神”很流行，却不是埃达文本明确给出的职衔。",
    ties: "索尔的妻子，乌勒尔的母亲；《散文埃达》也把斯露德列在索尔的子女中。",
    tales: "希芙的金发、伊瓦第之子的神器、洛基与布罗克的赌局。",
  },
  {
    name: "巴德尔", oldNorse: "BALDR", mark: "☼", role: "受爱戴者、死亡与归来",
    portrait: "巴德尔先在梦里看见自己的死亡。诸神后来拿他的无伤之身取乐，把武器纷纷投向他；只有不起眼的槲寄生没有立过誓。霍德尔掷出的枝条终止了游戏，海拉又提出“万物都为他哭泣”才准归还的条件。末日之后，他会重新回到更新的大地。",
    ties: "奥丁与弗丽嘉之子，南娜的丈夫、福尔塞蒂之父；盲神霍德尔既是他的兄弟，也是悲剧中被利用的投掷者。",
    tales: "巴德尔之梦、槲寄生、赫林霍尼葬船、赫尔莫德下冥界、末日后的归来。",
  },
  {
    name: "海姆达尔", oldNorse: "HEIMDALLR", mark: "⌁", role: "守望、边界与号角",
    portrait: "他住在彩虹桥旁，需要很少的睡眠，目光能越过极远之地，甚至听见草与羊毛生长。九位母亲生下他的奇异谱系，把海、边界与守望缠在一起。到了黄昏，海姆达尔吹响加拉尔号角，诸神才知道最后的敌人已经抵达。",
    ties: "诸神的守望者，与洛基长期对立；《女巫短预言》称他有九位母亲。《里格之歌》中的里格常被联系到他，但诗歌没有直白写成同一身份。",
    tales: "守望比弗洛斯特、失窃的布里辛项链、加拉尔号角、与洛基同归于尽。",
  },
  {
    name: "提尔", oldNorse: "TÝR", mark: "↑", role: "勇气、担保与裁断",
    portrait: "芬利斯只肯在一位神把手放进自己口中后试戴格莱普尼尔。诸神都知道这份保证不诚实，只有提尔上前。细带收紧，狼无法脱身，他也失去了右手。故事没有把秩序写得洁白无瑕：它由集体的骗局建立，而担保的代价留在一个人的身体上。",
    ties: "与索尔一同前往希米尔家取锅。《海米斯之歌》称希米尔为他的父亲，与斯诺里整理的谱系并不完全相合。",
    tales: "束缚芬利斯、希米尔的巨锅、埃吉尔宴会、末日与加姆之战。",
  },
  {
    name: "尼约德", oldNorse: "NJÖRÐR", mark: "≋", role: "海行、风与财富",
    portrait: "尼约德来自华纳神族，战争结束后作为人质住进阿斯加德。他能使海风平顺，也与财富和丰年相连。与斯卡蒂成婚时，两人轮流住在海边和山中：她受不了海鸟，他也受不了狼嗥。婚姻没有把两种风景调和，反而让差异说得格外清楚。",
    ties: "弗雷与弗蕾雅之父；阿萨—华纳盟约中的人质。与巨人之女斯卡蒂因“只看脚选丈夫”的约定结婚。",
    tales: "阿萨与华纳的盟约、诺阿通海岸、与斯卡蒂的九夜轮住。",
  },
  {
    name: "弗雷", oldNorse: "FREYR", mark: "◇", role: "和平、丰年与好天气",
    portrait: "弗雷从至高座看见巨人之女葛德，从此失去食欲与安宁。他把能自行战斗的宝剑交给史基尼尔，换取使者前去求婚；诗中礼物之后紧跟着威胁，因此这不是一段轻巧的爱情童话。那把交出去的剑，还会在他面对苏尔特时以缺席的方式回到故事里。",
    ties: "尼约德之子、弗蕾雅之兄，华纳神族的重要成员；与葛德结合。拥有船斯基德普拉特尼与野猪古林博斯帝。",
    tales: "史基尼尔求婚、亚尔夫海姆之赠、神器赌局、诸神黄昏迎战苏尔特。",
  },
  {
    name: "弗蕾雅", oldNorse: "FREYJA", mark: "✧", role: "爱欲、赛德、财富与战死者",
    portrait: "若只把她叫作爱神，会漏掉半座战场。《格里姆尼尔之歌》说，战死者有一半归她的福尔克范格。她能施展赛德魔法，拥有鹰羽衣与布里辛项链，也会为远行的丈夫奥德落下金泪。欲望、战争、魔法与失去在她身上从不互相取消。",
    ties: "尼约德之女、弗雷之妹，华纳神族成员；奥德的妻子。她常帮助奥塔尔追索谱系，也会断然拒绝诸神拿她作为交易条件。",
    tales: "布里辛项链、欣德拉与奥塔尔、索列姆求婚、战死者的两分。",
  },
  {
    name: "伊登", oldNorse: "IÐUNN", mark: "●", role: "青春之果与诸神的衰老",
    portrait: "伊登保管让诸神维持青春的苹果。夏基逼洛基把她诱出阿斯加德以后，诸神迅速变老；这才发现，平日安静的果篮其实是整个神界的时间机关。洛基化作鹰把她救回，夏基追至城墙外被火焰烧落，一场绑架也因此牵出斯卡蒂后来的索赔。",
    ties: "诗神布拉吉的妻子。她与夏基、洛基和斯卡蒂的故事把诸神的青春、巨人的复仇与赔偿仪式连成一线。",
    tales: "夏基的要挟、苹果与衰老、鹰形逃亡、斯卡蒂来到阿斯加德。",
  },
  {
    name: "洛基", oldNorse: "LOKI", mark: "⌇", role: "越界、机智与秩序的裂缝",
    portrait: "洛基很难被压进“恶神”二字。他替诸神找回锤子，也亲手制造过需要自己收拾的灾难；他能变形、跨越性别与物种，既是斯莱普尼尔的母亲，也是海拉、耶梦加得与芬利斯的父亲。到了巴德尔之死和受缚的故事，旧日同伴最终站到秩序的另一边。",
    ties: "与奥丁有混合鲜血的旧誓，常与索尔同行；与安格尔波达生下三个被诸神视为未来威胁的孩子，妻子西格恩在他受罚时守在身旁。",
    tales: "阿斯加德城墙、希芙金发、夏基与伊登、索列姆婚宴、巴德尔之死、洛卡塞纳、洛基受缚。",
  },
] as const;

const sources = [
  { label: "《诗体埃达》", note: "以《女先知的预言》《格里姆尼尔之歌》《洛卡塞纳》等诗篇互相校读。", href: "https://www.gutenberg.org/cache/epub/73533/pg73533-images.html" },
  { label: "《散文埃达·欺骗古鲁菲》", note: "斯诺里整理的宇宙、神谱与末日叙事；使用时保留其成书时代与编纂性质。", href: "https://vsnr.org/editions/snorri-sturluson-edda-prologue-and-gylfaginning/" },
  { label: "《散文埃达·诗语法》", note: "诸神逸事、诗歌隐喻与神器故事的重要材料。", href: "https://vsnr.org/editions/edda-skaldskaparmal-1/" },
];

export default function NorseGodsDirectory() {
  const mythsHref = `${siteBasePath}/myths/norse/myths${staticPageSuffix}`;
  const hubHref = `${siteBasePath}/myths/norse${staticPageSuffix}`;

  return <main className="norse-pantheon-page">
    <nav className="myth-atlas-nav" aria-label="北欧诸神名录导航"><a href={mythsHref}>← 返回神话传说篇</a><a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a></nav>
    <header className="norse-pantheon-hero">
      <span>THE GODS / TWELVE PORTRAITS</span><b aria-hidden="true">12</b>
      <div><small>不是一张奥林匹斯式的座次表</small><h1>诸神<br />名录</h1><p>北欧原典并没有一份公认、固定的“十二主神”名单。这里选择十二位反复推动故事的主要神祇，把神职、关系与代表故事放在一起，作为继续阅读的十二个入口。</p><a href="#portraits">开始认识 <i>↓</i></a></div>
    </header>
    <aside className="norse-pantheon-note"><b>READING NOTE / 阅读说明</b><p>同一位神在不同诗篇里可能显出不同面貌，谱系也不总能严丝合缝。下列介绍优先保留这种差异，不把零散材料伪装成一部完整传记。</p></aside>
    <section className="norse-pantheon-grid" id="portraits" aria-label="十二位北欧神祇介绍">
      {gods.map((god, index) => <article className="norse-pantheon-card" key={god.oldNorse}>
        <header><span>{String(index + 1).padStart(2, "0")} / {god.oldNorse}</span><b aria-hidden="true">{god.mark}</b></header>
        <small>{god.role}</small><h2>{god.name}</h2><p>{god.portrait}</p>
        <dl><div><dt>关键关系</dt><dd>{god.ties}</dd></div><div><dt>代表故事</dt><dd>{god.tales}</dd></div></dl>
      </article>)}
    </section>
    <section className="norse-pantheon-sources"><header><span>TEXTS AFTER PORTRAITS</span><h2>故事之后，<br />再回到文本。</h2></header><div>{sources.map((source) => <a key={source.label} href={source.href} target="_blank" rel="noreferrer"><b>{source.label}</b><p>{source.note}</p><span>打开原典入口 ↗</span></a>)}</div></section>
    <div className="norse-thread-footer-links"><a href={mythsHref}>← 返回神话传说篇</a><a href={hubHref}>返回九界与北欧总览 →</a></div>
  </main>;
}
