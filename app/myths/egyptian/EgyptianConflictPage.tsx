const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const episodes = [
  {
    number: "01",
    label: "THE CLAIM",
    title: "继承权来到九神法庭",
    body: "欧西里斯退出可见世界之后，荷鲁斯以其子嗣身份要求继承王位，塞特则以力量、资历与太阳神的支持提出竞争。争端首先是一桩诉讼：神明必须回答，王权应当依照血统、能力，还是既有权势来转移。",
  },
  {
    number: "02",
    label: "ISIS SPEAKS",
    title: "伊西斯让塞特说出自己的判决",
    body: "法庭迟迟不能裁决，伊西斯便绕过禁令，以变形接近塞特。她讲述一个财产被陌生人夺走的寓言，使塞特亲口承认儿子应继承父亲；这句话随即反过来成为荷鲁斯主张的论据。",
  },
  {
    number: "03",
    label: "TRIALS OF FORCE",
    title: "河马、石船与反复失败的比试",
    body: "争讼不断滑向身体竞赛：两神化作河马潜入水中，又进行造船比赛。荷鲁斯以木船涂成石色，塞特却真的削山造石船，结果船沉入水中。胜负并未自动终止争端，暴力也无法独自制造合法性。",
  },
  {
    number: "04",
    label: "BODY AS EVIDENCE",
    title: "身体也被带进法庭",
    body: "文本并不回避性、羞辱与支配。塞特试图借身体关系证明优势，伊西斯与荷鲁斯则以反制改变证据的归属；托特召唤双方的精液作证。现代概括常删去这一段，但它正显示王权争斗如何进入身体、名誉与公开证明。",
  },
  {
    number: "05",
    label: "THE VERDICT",
    title: "欧西里斯的来信迫使裁决发生",
    body: "漫长拖延最终因欧西里斯从冥界发出的权威而改变。荷鲁斯获得父亲的王位，塞特并未从宇宙结构中彻底消失；在其他传统里，他仍能成为太阳船抵御阿波菲斯的强悍护卫。裁决重新分配力量，而不是把矛盾从世界中删除。",
  },
];

const sources = [
  {
    label: "UCL Digital Egypt：神祇、创世与荷鲁斯—塞特争斗概述",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/religion/deitiescreation.html",
  },
  {
    label: "UCL Digital Egypt：代尔麦地那文书与《切斯特·贝蒂纸草一号》",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/writing/library/dem.html",
  },
  {
    label: "UCL Petrie Museum：拉胡恩《荷鲁斯与塞特之争》残片",
    href: "https://collections.ucl.ac.uk/Details/petrie/40282",
  },
  {
    label: "大都会艺术博物馆：河马、王权与塞特的图像关系",
    href: "https://www.metmuseum.org/es/essays/hippopotami-in-ancient-egypt",
  },
];

export default function EgyptianConflictPage() {
  const hubHref = `${siteBasePath}/myths/egyptian`;

  return (
    <main className="egypt-conflict-page">
      <nav className="myth-atlas-nav" aria-label="荷鲁斯与塞特之争页面导航">
        <a href={hubHref}>← 返回埃及叙事入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="egypt-conflict-hero">
        <div className="egypt-conflict-halves" aria-hidden="true"><i /><i /><i /></div>
        <span>CASE 02 / THE CONTENDINGS / PAPYRUS CHESTER BEATTY I</span>
        <h1><span>荷鲁斯</span><i>与</i><span>塞特之争</span></h1>
        <p>这不是一次决斗，而是一场不断在法庭、河流、宴席、身体与书信之间转换形式的继承权危机。</p>
        <a href="#case-file">展开争讼记录 <b aria-hidden="true">↓</b></a>
        <div className="egypt-conflict-figures" aria-hidden="true">
          <span className="horus-mark">𓂀</span>
          <span className="seth-mark">STẖ</span>
        </div>
      </header>

      <section className="egypt-conflict-thesis" id="case-file">
        <span>THE QUESTION BEFORE THE ENNEAD</span>
        <h2>谁有资格<br />成为下一位王？</h2>
        <p>荷鲁斯的主张来自父子继承，塞特的主张来自力量与既有地位。故事的张力不在于观众能否认出“好人”，而在于神明法庭为什么明知争点却迟迟无法形成有效裁决。</p>
      </section>

      <section className="egypt-conflict-episodes" aria-label="荷鲁斯与塞特之争五个叙事阶段">
        {episodes.map((episode) => (
          <article key={episode.number}>
            <div><span>{episode.number}</span><small>{episode.label}</small></div>
            <h2>{episode.title}</h2>
            <p>{episode.body}</p>
          </article>
        ))}
      </section>

      <aside className="egypt-conflict-caution">
        <span>NOT A SINGLE TIMELESS VERSION</span>
        <p>《切斯特·贝蒂纸草一号》保存了现存最完整的长篇叙述，但拉胡恩残片和其他祭仪、魔法及神庙材料提供了更早或不同的层次。本页以长篇叙事为主线，不把所有版本强行合并。</p>
      </aside>

      <section className="egypt-conflict-sources">
        <header><span>TEXTUAL COORDINATES</span><h2>原典坐标</h2></header>
        {sources.map((source, index) => (
          <a href={source.href} target="_blank" rel="noreferrer" key={source.href}><span>0{index + 1}</span><b>{source.label}</b><i aria-hidden="true">↗</i></a>
        ))}
      </section>

      <a className="egypt-conflict-back" href={hubHref}><span>返回两条叙事入口</span><b aria-hidden="true">↖</b></a>
    </main>
  );
}
