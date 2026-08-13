const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cast = [
  {
    name: "荷鲁斯",
    role: "THE CLAIMANT / 王位请求人",
    image: "egypt-god-horus.webp",
    body: "伊西斯与欧西里斯之子。文本里的他并非一开始就已是无懈可击的王：他年轻、会失控、会受伤，也一次次把“父亲的合法继承人”这一身份带回法庭。争讼结束后，他的登位把人间王权写成欧西里斯王朝的延续。",
  },
  {
    name: "赛特",
    role: "THE RIVAL / 竞争者",
    image: "egypt-god-seth.webp",
    body: "欧西里斯的兄弟、荷鲁斯的叔父，也是风暴、荒漠与强力的神。故事让他成为王位争夺者，却没有把他从宇宙中抹去：在别的传统里，赛特仍以强悍的力量站在太阳船上抵御阿波菲斯。",
  },
  {
    name: "伊西斯",
    role: "THE STRATEGIST / 保护者与谋略者",
    image: "egypt-god-isis.webp",
    body: "她以魔法、辩辞与母职贯穿整个谱系：取得拉的隐名，寻找欧西里斯，保护幼年荷鲁斯，又在争讼中以化装、寓言与身体证据迫使僵局发生变化。她从来不只是站在旁边哀悼的人。",
  },
  {
    name: "欧西里斯",
    role: "THE ABSENT KING / 缺席的王",
    image: "egypt-god-osiris.webp",
    body: "被杀并进入冥界之后，他不再亲临九神法庭，却仍是继承权的来源。最终从冥界送来的书信提醒诸神：没有对前王与父系继承的承认，地上的裁决就无法成立。",
  },
  {
    name: "拉—哈拉胡提",
    role: "THE PRESIDING POWER / 法庭权威",
    image: "egypt-god-ra.webp",
    body: "在《争斗》长篇里，他主持会议，却多次偏向赛特并质疑年轻的荷鲁斯。正因为最高权威本身也会动摇、发怒与拖延，这个故事才不是一道答案已写好的道德题。",
  },
  {
    name: "托特",
    role: "THE SCRIBE / 书记与证据召唤者",
    image: "egypt-god-thoth.webp",
    body: "他书写神谕、传递文书，也在最离奇的一场证明中召唤双方的精液回答。托特让口头争论变成可记录、可公开、必须被法庭面对的证据。",
  },
];

const chapters = [
  {
    number: "01",
    label: "THE VACANT THRONE",
    title: "王位空缺，争讼开始",
    body: [
      "欧西里斯退出可见世界之后，荷鲁斯以儿子的身份请求父位；赛特则凭自己的成年、力量与神界地位竞争。九神法庭本应确认继承，却在荷鲁斯的血统与赛特的实力之间反复摇摆；荷鲁斯在后段称，这场官司已经拖了八十年。",
      "托特与舒倾向荷鲁斯，拉—哈拉胡提却嫌他年少。法庭甚至写信询问涅伊特；她支持荷鲁斯，并建议以补偿安置赛特。答案已经出现，裁决却没有发生——长篇故事真正讽刺的，正是一个知道什么“正确”却无法执行的制度。",
    ],
    note: "《切斯特·贝蒂纸草一号》把争端写成延宕八十年的听证、往返书信与一次次重新开庭。",
  },
  {
    number: "02",
    label: "THE COUNCIL STALLS",
    title: "最高权威也会动摇",
    body: [
      "诸神的发言不断触怒拉—哈拉胡提。巴巴对他的嘲弄使太阳神退入帐中，不肯继续审理；哈托尔以带有喜剧色彩的身体动作逗他发笑，会议才得以恢复。",
      "这一插曲不是无关的闹剧。它让法庭显出人情化甚至荒谬的一面：宇宙秩序并不自动运转，它也会被面子、偏爱、愤怒与情绪阻塞。",
    ],
  },
  {
    number: "03",
    label: "ISIS IN DISGUISE",
    title: "伊西斯让赛特判决自己",
    body: [
      "赛特要求禁止伊西斯进入审理地点。她于是化装成一位美丽的陌生女子，以金环贿赂守卫安提，并向赛特讲述一宗假案：一个外来者夺走了亡夫留给儿子的牲畜与生计。",
      "赛特立即表示，儿子不应被陌生人剥夺父亲的财产。伊西斯随即显形，指出他已经亲口裁定了荷鲁斯的案件。赛特的怒气并没有终止争斗，却使“父业归子”的原则再也无法被轻易否认。",
    ],
    note: "寓言不是旁枝；它把抽象王权翻译成人人都能理解的继承与财产问题。",
  },
  {
    number: "04",
    label: "THREE MONTHS UNDERWATER",
    title: "河马比试与母子决裂",
    body: [
      "赛特提出两神化作河马，潜在水中三个月；谁先浮出，谁就失去王位。伊西斯担心儿子遇害，制成铜鱼叉刺向水中，却先误中荷鲁斯。她拔出鱼叉后又刺中赛特；赛特以姐弟之情恳求，她便放过了他。",
      "荷鲁斯把这份宽恕视作背叛，暴怒中砍下母亲的头。伊西斯随后被恢复，荷鲁斯也因攻击母亲而遭惩罚。故事在这里拒绝塑造纯洁英雄：王位请求人同样会犯下需要被纠正的暴行。",
    ],
  },
  {
    number: "05",
    label: "THE EYE RESTORED",
    title: "受伤的眼睛重新完整",
    body: [
      "赛特在沙漠中找到荷鲁斯，挖出他的双眼并把它们埋入地下；文本让那里长出莲花。失明的荷鲁斯被哈托尔发现，她以羚羊乳治疗他的眼眶，使他恢复视力。",
      "后来极为重要的“荷鲁斯之眼”在不同传统里拥有不止一种受伤与复原叙事。此处的眼伤既是肉身挫败，也是王权必须经历修复、重新成为完整之物的象征。",
    ],
  },
  {
    number: "06",
    label: "BODY AS EVIDENCE",
    title: "身体被带进法庭",
    body: [
      "赛特邀请荷鲁斯到家中留宿，并试图以性行为把支配关系变成王位证据。荷鲁斯用手接住赛特的精液，向伊西斯求助；她切下被污染的手，并另取荷鲁斯的精液涂在赛特爱吃的莴苣上。",
      "到了法庭，赛特宣称自己已经压倒荷鲁斯。托特先召唤赛特的精液，它从沼泽处回答；再召唤荷鲁斯的精液，它从赛特体内应声，最终从他的头部出现为金色圆盘，并被托特取走。羞辱的证据被反转，赛特企图建立的支配叙事落到自己身上。",
    ],
    note: "拉胡恩的中王国残片保存了不同版本；本节依《切斯特·贝蒂纸草一号》的拉美西斯时期长篇线索概述。",
  },
  {
    number: "07",
    label: "STONE THAT FLOATS",
    title: "一艘看起来像石头的木船",
    body: [
      "赛特再提出造石船竞速。荷鲁斯暗中用杉木造船，再覆以石膏，使它看起来像石头；赛特则真的从山体切下一块巨石，凿成一艘长达一百三十八肘的船。下水后，真正的石船立刻沉没。",
      "赛特化作河马攻击荷鲁斯的船，荷鲁斯举起鱼叉准备反击，却被诸神制止。智谋赢过字面服从，暴力仍然不能单独完成合法的继承。",
    ],
    note: "这场比试有近乎民间故事的机智：规则说“石船”，荷鲁斯赢在理解表象与材料并不是同一件事。",
  },
  {
    number: "08",
    label: "A LETTER FROM BELOW",
    title: "冥界来信终结拖延",
    body: [
      "争端迟迟未决，法庭终于致信欧西里斯。冥界之王反问：为什么他的儿子仍未得到职位？他提醒诸神，自己掌管粮食的生长，也统治死者；任何神与人终究都会进入他的领域。",
      "拉—哈拉胡提召来赛特，赛特最终承认荷鲁斯应得王位。荷鲁斯戴上白冠，被宣布为其父欧西里斯的继承者；赛特则被带到太阳神身边，以雷霆般的力量在天空发声。结局重新分配力量，而不是把赛特从宇宙结构中删除。",
    ],
  },
];

const sources = [
  {
    label: "UCL Digital Egypt：《伊西斯与拉的隐名》原文、转写与译文",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/literature/isisandra.html",
  },
  {
    label: "UCL Digital Egypt：神祇谱系、欧西里斯之死与荷鲁斯继承概述",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/religion/deitiescreation.html",
  },
  {
    label: "UCL Digital Egypt：代尔麦地那与《切斯特·贝蒂纸草一号》",
    href: "https://www.ucl.ac.uk/museums-static/digitalegypt/writing/library/dem.html",
  },
  {
    label: "UCL Petrie Museum：拉胡恩《荷鲁斯与赛特之争》中王国残片",
    href: "https://collections.ucl.ac.uk/Details/petrie/40282",
  },
  {
    label: "大都会艺术博物馆：石船竞赛与托特作为“两位斗士的裁判”",
    href: "https://resources.metmuseum.org/resources/metpublications/pdf/The_Metropolitan_Museum_of_Art_Bulletin_v_25_no_7_March_1967.pdf",
  },
  {
    label: "大都会艺术博物馆：河马、赛特与秩序战胜混沌的图像传统",
    href: "https://www.metmuseum.org/essays/hippopotami-in-ancient-egypt",
  },
];

export default function EgyptianConflictPage() {
  const hubHref = `${siteBasePath}/myths/egyptian`;

  return (
    <main className="egypt-conflict-page">
      <nav className="myth-atlas-nav" aria-label="荷鲁斯与赛特之争页面导航">
        <a href={hubHref}>← 返回埃及叙事入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="egypt-conflict-hero">
        <figure>
          <img src={`${siteBasePath}/egypt-conflict-hero.webp`} alt="荷鲁斯与赛特分立于玛特羽毛两侧的绘画" />
        </figure>
        <div className="egypt-conflict-title-block">
          <span>CASE 02 / THE CONTENDINGS / PAPYRUS CHESTER BEATTY I</span>
          <h1>荷鲁斯与赛特之争</h1>
          <p>一场在王位、血统、力量、身体与书信之间反复改换形式的继承权危机。</p>
          <a href="#prologue">从前言开始 <b aria-hidden="true">↓</b></a>
        </div>
      </header>

      <aside className="egypt-conflict-method">
        <span>READING RULE / 00</span>
        <p><b>这里没有一部从创世写到加冕的古埃及“统一小说”。</b>前言取自《伊西斯与拉的隐名》、欧西里斯传统与荷鲁斯幼年材料；主体则以拉美西斯时期《切斯特·贝蒂纸草一号》的《荷鲁斯与赛特之争》为主。页面把它们按谱系排列，同时标出拼接处。</p>
      </aside>

      <section className="egypt-conflict-prologue" id="prologue">
        <header>
          <span>GENEALOGICAL PROLOGUE / 谱系前言</span>
          <h2>在王位成为争点以前，<br />名字、尸身与继承已经开始流动。</h2>
        </header>
        <figure>
          <img src={`${siteBasePath}/egypt-conflict-secret-name.webp`} alt="伊西斯用泥土与拉的唾液造蛇，并准备为中毒的拉施咒疗愈" />
          <figcaption>THE SECRET NAME / 这是一则解毒咒文中的神话，不是《争斗》长篇的第一章。</figcaption>
        </figure>
        <div className="egypt-conflict-prologue-grid">
          <article>
            <span>00.A / THE SECRET NAME</span>
            <h3>伊西斯骗取拉的隐名</h3>
            <p>年老的拉行经两地时，唾液落在地上。伊西斯收集唾液与泥土，捏成一条活蛇，放在太阳神每日必经的路口。蛇咬中拉后，诸神束手无策；伊西斯声称只要知道他的真正名字，就能让毒离开。</p>
            <p>拉先列举“凯布利、拉、阿图姆”等显名，毒却没有停止。最终，隐名从拉的身体传入伊西斯体内；她立誓只把它交给儿子荷鲁斯，随后以咒语逐毒。这一故事把名字写成可转移的神力，也为伊西斯替儿子积累王权资源提供了一个有力前奏。</p>
          </article>
          <article>
            <span>00.B / THE ABSENT KING</span>
            <h3>欧西里斯当权，赛特夺位</h3>
            <p>欧西里斯作为在世之王建立秩序。赛特因敌意与竞争杀死兄长，并肢解其尸身；不同年代的材料保存了不同片段，后世最连贯的箱棺计谋来自较晚的普鲁塔克叙述，因此这里不把那套细节冒充早期单一原典。</p>
            <p>伊西斯与奈芙蒂斯寻找遗体，使欧西里斯获得新的完整；伊西斯由此受孕，欧西里斯则转入冥界成为死者之王。地上的王位空了出来，但它已经有了一个尚未长成的继承人。</p>
          </article>
          <article>
            <span>00.C / THE HIDDEN HEIR</span>
            <h3>荷鲁斯在沼泽中长大</h3>
            <p>伊西斯把幼年荷鲁斯藏在三角洲的纸莎草沼泽，以躲避仍在寻找他的赛特。幼神会被蝎毒、蛇毒与疾病袭击，伊西斯的呼救与诸神的救治后来成为大量疗愈咒文的神话模型。</p>
            <p>当荷鲁斯长成，他离开隐匿之地，不是去完成一次简单复仇，而是向诸神提出一项制度性请求：把父亲的职位交还给合法继承人。</p>
          </article>
        </div>
      </section>

      <section className="egypt-conflict-cast" aria-labelledby="conflict-cast-title">
        <header>
          <span>DRAMATIS DIVINAE / 神明档案</span>
          <h2 id="conflict-cast-title">谁在这场争讼里说话？</h2>
          <p>荷鲁斯与赛特是两位竞争者；伊西斯、欧西里斯、拉—哈拉胡提与托特则分别改变证据、权威与裁决的走向。</p>
        </header>
        <div className="egypt-conflict-cast-grid">
          {cast.map((figure) => (
            <article key={figure.name}>
              <img src={`${siteBasePath}/${figure.image}`} alt={`${figure.name}的古埃及壁画风格画像`} />
              <div><small>{figure.role}</small><h3>{figure.name}</h3><p>{figure.body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="egypt-conflict-case" id="case-file">
        <header>
          <span>THE CONTENDINGS / 01—08</span>
          <h2>继承权争夺<br />完整阅读版</h2>
          <p>法庭没有一次解决争端，于是案件不断变形：辩论变成寓言，寓言变成河马比试，身体变成证据，最后又回到一封来自冥界的信。</p>
        </header>
        <div className="egypt-conflict-chapters">
          {chapters.map((chapter, index) => (
            <article key={chapter.number}>
              <div className="egypt-conflict-chapter-meta"><b>{chapter.number}</b><small>{chapter.label}</small></div>
              <div className="egypt-conflict-chapter-copy">
                <h3>{chapter.title}</h3>
                {chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {chapter.note ? <aside>{chapter.note}</aside> : null}
              </div>
              <span className="egypt-conflict-chapter-mark" aria-hidden="true">{["𓂀", "☉", "♙", "≋", "◉", "✦", "⌁", "𓇳"][index]}</span>
            </article>
          ))}
        </div>
      </section>

      <figure className="egypt-conflict-trials-figure">
        <img src={`${siteBasePath}/egypt-conflict-trials.webp`} alt="上层为荷鲁斯与赛特化作河马，下层为木制仿石船与真正石船竞赛的绘画" />
        <figcaption><span>TRIALS OF FORCE / 04 + 07</span><b>河马与石船：暴力和字面服从都没能独自制造合法性。</b></figcaption>
      </figure>

      <section className="egypt-conflict-afterword">
        <span>AFTER THE VERDICT</span>
        <h2>结局不是“消灭混沌”，<br />而是给力量安排位置。</h2>
        <p>荷鲁斯成为地上的王，欧西里斯统治冥界，拉继续航行于昼夜；赛特虽然失去王位，却仍能在其他传统里以风暴与武力抵御阿波菲斯。埃及宇宙并不假装冲突从此消失——玛特的工作，是反复把危险的力量放回可维持世界的位置。</p>
      </section>

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
