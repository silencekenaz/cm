const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cast = [
  {
    name: "荷鲁斯",
    role: "THE CLAIMANT / 王位请求人",
    image: "egypt-god-horus.webp",
    body: "伊西斯与欧西里斯之子，也是人间王权最重要的神圣模型之一。《争斗》开头故意把他写成坐在法庭前的年轻请求人：他有父子继承的强大名分，却会被拉—哈拉胡提讥为身体软弱的孩子。他会哭泣、受伤、施计，也会因暴怒攻击母亲；直到经历证明、惩罚与复原，他才成为能够戴上白冠的王。这里的成长不是“力量升级”，而是把血统主张转化为公开裁决。",
  },
  {
    name: "塞特",
    role: "THE RIVAL / 竞争者",
    image: "egypt-god-seth.webp",
    body: "欧西里斯的兄弟、荷鲁斯的叔父，也是风暴、荒漠、异域与猛烈力量的神。他的王位论据并不只是“我更强”：他强调自己每日站在百万年之船的前方，击杀太阳神的敌人，而别的神做不到。因此塞特代表一种真实且不可缺少的宇宙能力，只是这种能力不足以取代继承法。故事最终没有消灭他，而是把雷霆与威慑重新安置到天空。",
  },
  {
    name: "伊西斯",
    role: "THE STRATEGIST / 保护者与谋略者",
    image: "egypt-god-isis.webp",
    body: "她以魔法、辩辞与母职贯穿整个谱系：取得拉的隐名，寻找并重整欧西里斯的尸身，在三角洲保护幼年荷鲁斯，又以变形、寓言、贿赂和证据设计迫使法庭前进。她既会算计，也会因亲缘而心软；在河马比试中放过兄弟塞特，反而激怒儿子。伊西斯从来不是站在男性英雄身后哀悼的人，她本身就是继承权得以成立的行动者。",
  },
  {
    name: "欧西里斯",
    role: "THE ABSENT KING / 缺席的王",
    image: "egypt-god-osiris.webp",
    body: "被杀并进入冥界以后，他不再亲临九神法庭，却仍是继承权的来源、谷物丰饶的保障与所有死者最终抵达的王。在长篇末尾，他先以自己供养诸神的谷物反驳法庭，又警告说冥界的使者能够取走作恶者的心。缺席没有削弱他的政治重量；恰恰因为每一位神与人最终都会来到西方，来自地下的信才迫使地上的僵局结束。",
  },
  {
    name: "拉—哈拉胡提",
    role: "THE PRESIDING POWER / 法庭权威",
    image: "egypt-god-ra.webp",
    body: "作为太阳神与会议的最高权威，他主持审理，却明显欣赏塞特保卫太阳船的力量，并多次质疑年轻的荷鲁斯。他会被巴巴一句冒犯的话气得退庭，也会被哈托尔逗笑后重新开庭；他甚至与欧西里斯隔着生死领域互致尖锐书信。正因为最高权威也会偏爱、动摇与维护自尊，这个故事才不是答案预先写好的道德题。",
  },
  {
    name: "托特",
    role: "THE SCRIBE / 书记与证据召唤者",
    image: "egypt-god-thoth.webp",
    body: "他是九神法庭的书记、书信起草者和最稳定的程序维护者。开庭之初，他便称荷鲁斯的主张“正确百万次”；之后又代太阳神写信给涅伊特与欧西里斯。在最离奇的一场证明中，他召唤双方的精液回答，并把从塞特额头出现的金色圆盘取作自己的冠饰。托特并不总能直接裁决，却不断让发言变成文书、身体变成证据、僵局变成可追责的记录。",
  },
];

const supportingFigures = [
  ["舒", "FIRST OPINION", "最早公开支持荷鲁斯的发言者之一。他把问题表述为“正义具有力量”，并在末段赞同向欧西里斯发函。"],
  ["涅伊特", "THE ELDER VERDICT", "居于塞易斯的古老女神。她在回信中要求把欧西里斯的职位交给荷鲁斯，同时以加倍财产和阿娜特、阿斯塔蒂安置塞特。"],
  ["巴涅布杰代特", "THE HESITANT ARBITER", "门德斯的羊神，被召来判断两位竞争者，却拒绝在无知中仓促行动，转而建议询问涅伊特。"],
  ["安赫尔", "ANHUR / ONURIS · THE PARTISAN", "又称奥努里斯，是提尼斯的战士与猎神，代表制服危险和混沌的武力。他在法庭上多次站在荷鲁斯一方；当太阳神轻视年轻请求人时，他与法庭成员一同激烈反对。"],
  ["哈托尔", "THE RESTORER", "她先用喜剧性的举动让负气退庭的太阳神重新发笑，后来又以羚羊乳治愈荷鲁斯被挖出的双眼。"],
  ["安提", "THE FERRYMAN", "奉命阻止伊西斯渡河，却收下她的金环。阴谋败露后，他受到惩罚，并在故事中立誓让自己的城厌弃黄金。"],
];

const chapters = [
  {
    number: "01",
    label: "THE VACANT THRONE",
    title: "王位空缺，争讼开始",
    body: [
      "故事开始时，荷鲁斯像一位年轻的诉讼人坐在“宇宙之主”面前，请求得到父亲欧西里斯的王位。舒首先主张把职位交给他，托特立即赞成，说这项判断“正确百万次”；伊西斯欣喜若狂，甚至请北风把好消息送往西方的欧西里斯。法庭一度已经为荷鲁斯戴上白冠，拉—哈拉胡提却对众神擅自行动感到愤怒，塞特也要求以双手的力量当庭决胜。",
      "双方的论据并不完全处于同一层面。荷鲁斯强调父子继承：一个身体所生的儿子仍然活着，叔父便不能夺走父位。塞特则强调成年、资历与功能：他自称九神中最强者，每天站在百万年之船前方击杀太阳神的敌人，只有他能承担最危险的宇宙工作。血统的合法性与力量的有效性由此正面冲突。",
      "为了避免在无知中裁断，巴涅布杰代特建议询问居于塞易斯的涅伊特。托特以太阳神名义写信时说，两位竞争者已在法庭前站了八十年，竟仍无人知道如何判决。涅伊特的回信十分明确：把欧西里斯的职位交给荷鲁斯；同时加倍塞特的财产，并把阿娜特与阿斯塔蒂给予他作为补偿。全体九神称她正确，拉—哈拉胡提却依然嫌荷鲁斯四肢软弱、年纪太轻。答案已经出现，执行仍被权威的偏爱挡住。",
    ],
    note: "文本把法庭写得异常现代：有口头陈述、程序争议、外部咨询、书面意见与补偿方案。问题不是没有判例，而是判决无法约束所有掌权者。",
  },
  {
    number: "02",
    label: "THE COUNCIL STALLS",
    title: "最高权威也会动摇",
    body: [
      "拉—哈拉胡提轻视荷鲁斯的年轻，使安赫尔（希腊化名称为奥努里斯）与整个九神法庭群情激愤。巴巴用一句近乎亵渎的嘲讽刺伤太阳神的尊严，法庭立即把巴巴赶出会议；拉—哈拉胡提则仰面躺进凉亭，独自闷了一整天，审理也随之停摆。",
      "过了很久，南方无花果树之女哈托尔来到父亲面前，以直接而带有民间喜剧色彩的身体动作使他发笑。太阳神终于重新坐到诸神中间，要求双方再次陈述。塞特于是提出自己最有分量的论据：他每天击杀太阳船的敌人，九神中无人能代替。众神一度被说服，托特与安赫尔马上反问：儿子尚在，职位怎能交给母系一侧的兄弟？会议再次分裂。",
      "塞特随后以沉重权杖威胁每天杀死一名法庭成员，并要求伊西斯不得出席。最高权威接受了这一条件，把审判迁到“中央之岛”。这不是无关的闹剧，而是一幅尖锐的制度画像：情绪可以令法庭休会，威胁可以改变地点，程序本身也可能被强者操纵。",
    ],
    note: "《争斗》的叙述不断在庄严称号与日常喜剧之间切换；诸神越像会负气、偏袒和怕麻烦的人，漫长拖延就越具有讽刺性。",
  },
  {
    number: "03",
    label: "ISIS IN DISGUISE",
    title: "伊西斯让塞特判决自己",
    body: [
      "伊西斯先变成一位弯腰的老妇，带着一罐面粉来到渡口。摆渡神安提牢记禁令，不肯让任何像伊西斯的女人登船；一块面包无法打动他，伊西斯便亮出手上的小金环。安提收下黄金，把她渡到中央之岛。她躲在树林间，看见九神正在太阳神的凉亭前吃面包，便再次施法，化作全境无人可比的年轻女子。",
      "塞特独自追到树后。伊西斯向他讲述一宗假案：自己的牧人丈夫死了，儿子本应接管父亲的牲畜；一个外来者却闯进牛栏，扬言殴打孩子、夺走牛群并把他赶出去。塞特毫不犹豫地回答：父亲的牲畜怎能交给外人，而让亲生儿子活着受夺？外人应受杖击，儿子应被安置在父亲的位置。",
      "伊西斯立刻化为鸢，飞上金合欢树，宣告是塞特自己的嘴和聪明才智判决了他。塞特哭着回到拉—哈拉胡提面前复述经过，太阳神也只能指出：你已经裁定了自己。安提因受贿被拖来惩罚；文本说他的脚掌被除去，并让他立誓从此憎恶黄金。一次继承寓言由此顺带解释了地方性的禁金传统。",
    ],
    note: "原文在“牲畜”与“王位／职位”之间使用双关。伊西斯不是说服塞特接受新原则，而是让他在认不出自身案件时说出早已承认的原则。",
  },
  {
    number: "04",
    label: "THREE MONTHS UNDERWATER",
    title: "河马比试与母子决裂",
    body: [
      "自我判决之后，太阳神与阿图姆终于下令把白冠戴在荷鲁斯头上。塞特却拒绝承认第一次加冕，要求取下王冠、把荷鲁斯投入水中，再以比赛决定职位。他提出两神化作河马，潜入“大绿海”三个月；谁在期限前浮出，谁就被取消王位资格。法庭竟再次接受了把已经做出的裁决交给身体竞赛。",
      "伊西斯坐在岸边哭泣，以纱线搓绳，熔化一磅铜铸成带倒钩的水中武器。她投出鱼叉，第一击误中荷鲁斯；听见儿子呼喊，她命鱼叉松开。第二击刺中塞特，塞特不是凭政治理由求情，而是唤她“同母的姐姐”。伊西斯对兄弟生出怜悯，再次命鱼叉松开。",
      "荷鲁斯无法接受母亲饶恕杀父仇人。他带着斧刀冲上山，盛怒中砍下伊西斯的头；伊西斯化作一尊无头燧石像。托特认出她以后，拉—哈拉胡提命九神追捕荷鲁斯。文本在这里让母亲的策略与儿子的复仇伦理彻底分裂，也拒绝把未来的王塑造成从未犯错的完美英雄。",
    ],
    note: "另一份《吉凶日历》保存了相近但不完全相同的河马情节。长篇作者把既有神话材料嵌入自己的叙事，因此细节间有时并不严丝合缝。",
  },
  {
    number: "05",
    label: "THE EYE RESTORED",
    title: "受伤的眼睛重新完整",
    body: [
      "九神进入山地搜捕荷鲁斯时，他正躺在绿洲的一棵树下。塞特先找到他，把他仰面按倒，挖出两只眼睛并埋在山中，然后回到太阳神面前谎称没有找到荷鲁斯。被埋的眼球却化作两枚球茎，长成莲花，仿佛失去的天体之光转入大地，又从植物中重新出现。",
      "哈托尔在沙漠中找到哭泣的荷鲁斯。她挤取羚羊乳，依次滴入他的左右眼眶，命他睁眼；荷鲁斯恢复视力以后，她才回到法庭揭露塞特的所为。太阳神要求两人停止每日争吵、同桌吃喝、重新和解，这一过早的和平提议随即把故事引向下一场更隐秘的攻击。",
      "后来极为重要的“荷鲁斯之眼”在不同传统里拥有不止一种受伤与复原叙事：更古老的材料常说塞特夺去一眼，荷鲁斯则伤害塞特的睾丸；本长篇却写双眼被挖，并让哈托尔而非托特完成治疗。差异提醒读者，神话意象会被不同文本反复重组。",
    ],
    note: "“完整之眼”并不对应唯一一场固定事故。它更像一个可被多种故事解释的宗教符号：损伤、寻找、复原与重新供奉共同构成其意义。",
  },
  {
    number: "06",
    label: "BODY AS EVIDENCE",
    title: "身体被带进法庭",
    body: [
      "在太阳神要求两人和平相处之后，塞特邀请荷鲁斯到自己家中“快乐地过一天”。夜里，他试图通过性行为把主动支配变成王位资格的证据；荷鲁斯却用双手接住塞特的精液，没有让它进入身体。他回到伊西斯身边展示证据，伊西斯惊叫着切下受污染的手，把它扔进沼泽，并以魔法为儿子补造一只等值的新手。",
      "伊西斯随后取得荷鲁斯的精液，清晨来到塞特的菜园。她询问园丁塞特平日唯一会吃什么植物，答案是莴苣；她便把精液放在莴苣上。塞特照常吃下，文本直言他因此怀上荷鲁斯的种子。古埃及莴苣切口会流出乳白汁液，又与生殖神敏相关，所以这项反制并非随意选择的现代笑料。",
      "到了法庭，塞特宣称自己对荷鲁斯完成了“勇士之事”。众神朝荷鲁斯吐唾沫，荷鲁斯却笑着要求召唤双方的精液。托特呼唤塞特的精液，它从沼泽中的弃手回答；呼唤荷鲁斯的精液时，它拒绝从塞特耳朵出来，选择从额头升起，化作一轮金色太阳。塞特伸手抢夺，托特却把圆盘取走，戴在自己头上。法庭再次宣布荷鲁斯正确、塞特错误。",
    ],
    note: "这段处理的是古代男性支配、羞辱与公开名誉，而非现代意义上的恋爱关系。拉胡恩的中王国残片保存了不同版本；这里依拉美西斯时期长篇叙述，不把版本差异磨平。",
  },
  {
    number: "07",
    label: "STONE THAT FLOATS",
    title: "一艘看起来像石头的木船",
    body: [
      "身体证据再次判塞特败诉，他却立誓在与荷鲁斯完成另一场比试以前绝不交出职位：两人各造一艘石船赛航，胜者才成为统治者。荷鲁斯没有正面违抗规则。他趁夜用杉木造船，外覆石膏，使旁人看见的材料与船真正的材料分离。塞特看到船身，以为对手果然造了石船。",
      "塞特走向山中，切下一块山峰，凿成一艘一百三十八肘长的石船。当两人在九神面前下水，塞特的真石船立刻沉没；他随即化作河马，让荷鲁斯的船也倾覆。荷鲁斯举起鱼叉，准备把比赛重新变成杀戮，九神却命令他不得投掷。",
      "荷鲁斯收起水中武器，亲自前往塞易斯向涅伊特申诉。他列举自己在“真理之路”“角前的荷鲁斯”“芦苇原”等多个审判厅一次次获判正确，却仍得不到执行。这一串地点让八十年不再只是夸张数字：案件仿佛已经遍历整个神圣司法地理。",
    ],
    note: "这场比试有近乎民间故事的机智。荷鲁斯没有比赛谁更能搬动石头，而是识别出塞特把“服从规则的字面”误当成“实现规则的目的”。",
  },
  {
    number: "08",
    label: "A LETTER FROM BELOW",
    title: "冥界来信终结拖延",
    body: [
      "托特终于建议向死去的前王本人发函。欧西里斯的第一封回信直截了当：为什么欺骗我的儿子？是我使诸神强健，也是我创造大麦与斯佩耳特小麦供养诸神和其后的生灵。拉—哈拉胡提不肯退让，回信讥刺说，即使欧西里斯从未出生，谷物也照样存在。两位宇宙君王隔着昼世与冥界发生了一次并不客气的权威冲突。",
      "欧西里斯第二次回信，把争论提高到死亡秩序。他责问诸神为何让玛特沉入冥界，声称西方充满面目凶猛的使者，他们会取走作恶者的心；天上的星每夜都要到欧西里斯处休息，而神、贵族和平民最终也无一例外。太阳神可以轻视谷物论据，却不能否认所有存在都会进入死亡领域。",
      "众神承认欧西里斯正确。塞特仍要求再到中央之岛争辩，但这一次荷鲁斯正式胜诉。阿图姆命伊西斯把塞特捆成囚徒带来，问他为何持续阻挠裁决、攫取荷鲁斯的职位。塞特终于亲口请求召来荷鲁斯，把父位交给他。白冠再次落在荷鲁斯头上，诸神称他为两地的好王；伊西斯高声欢呼，九神戴上花环，整片土地一同庆祝。",
      "普塔最后追问该如何处置塞特。拉—哈拉胡提把他收作身边的儿子，让他在天空发出雷鸣，使人敬畏。荷鲁斯取得王位，塞特取得与其危险力量相称的位置；故事以“在底比斯、真理之地圆满结束”的抄写语收尾。结局不是善把恶抹去，而是让继承、死亡、太阳与风暴重新各居其位。",
    ],
    note: "最终裁决之所以有效，不只是因为又出现一条新证据，而是塞特被强制带到权威面前，并亲口停止阻挠。程序终于获得了执行力。",
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
    label: "UCL Petrie Museum：拉胡恩《荷鲁斯与塞特之争》中王国残片",
    href: "https://collections.ucl.ac.uk/Details/petrie/40282",
  },
  {
    label: "大都会艺术博物馆：石船竞赛与托特作为“两位斗士的裁判”",
    href: "https://resources.metmuseum.org/resources/metpublications/pdf/The_Metropolitan_Museum_of_Art_Bulletin_v_25_no_7_March_1967.pdf",
  },
  {
    label: "大都会艺术博物馆：河马、塞特与秩序战胜混沌的图像传统",
    href: "https://www.metmuseum.org/essays/hippopotami-in-ancient-egypt",
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
        <figure>
          <img src={`${siteBasePath}/egypt-conflict-hero.webp`} alt="荷鲁斯与塞特分立于玛特羽毛两侧的绘画" />
        </figure>
        <div className="egypt-conflict-title-block">
          <span>CASE 02 / THE CONTENDINGS / PAPYRUS CHESTER BEATTY I</span>
          <h1>荷鲁斯与塞特之争</h1>
          <p>一场在王位、血统、力量、身体与书信之间反复改换形式的继承权危机。</p>
          <a href="#prologue">从前言开始 <b aria-hidden="true">↓</b></a>
        </div>
      </header>

      <aside className="egypt-conflict-method">
        <span>READING RULE / 00</span>
        <p><b>这里没有一部从创世写到加冕的古埃及“统一小说”。</b>前言取自《伊西斯与拉的隐名》、欧西里斯传统与荷鲁斯幼年材料；主体则以拉美西斯时期《切斯特·贝蒂纸草一号》的《荷鲁斯与塞特之争》为主。页面把它们按谱系排列，同时标出拼接处。</p>
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
            <h3>欧西里斯当权，塞特夺位</h3>
            <p>欧西里斯作为在世之王建立秩序。塞特因敌意与竞争杀死兄长，并肢解其尸身；不同年代的材料保存了不同片段，后世最连贯的箱棺计谋来自较晚的普鲁塔克叙述，因此这里不把那套细节冒充早期单一原典。</p>
            <p>伊西斯与奈芙蒂斯寻找遗体，使欧西里斯获得新的完整；伊西斯由此受孕，欧西里斯则转入冥界成为死者之王。地上的王位空了出来，但它已经有了一个尚未长成的继承人。</p>
          </article>
          <article>
            <span>00.C / THE HIDDEN HEIR</span>
            <h3>荷鲁斯在沼泽中长大</h3>
            <p>伊西斯把幼年荷鲁斯藏在三角洲的纸莎草沼泽，以躲避仍在寻找他的塞特。幼神会被蝎毒、蛇毒与疾病袭击，伊西斯的呼救与诸神的救治后来成为大量疗愈咒文的神话模型。</p>
            <p>当荷鲁斯长成，他离开隐匿之地，不是去完成一次简单复仇，而是向诸神提出一项制度性请求：把父亲的职位交还给合法继承人。</p>
          </article>
        </div>
      </section>

      <section className="egypt-conflict-cast" aria-labelledby="conflict-cast-title">
        <header>
          <span>DRAMATIS DIVINAE / 神明档案</span>
          <h2 id="conflict-cast-title">谁在这场争讼里说话？</h2>
          <p>荷鲁斯与塞特是两位竞争者；伊西斯、欧西里斯、拉—哈拉胡提与托特则分别改变证据、权威与裁决的走向。</p>
        </header>
        <div className="egypt-conflict-cast-grid">
          {cast.map((figure) => (
            <article key={figure.name}>
              <img src={`${siteBasePath}/${figure.image}`} alt={`${figure.name}的古埃及壁画风格画像`} />
              <div><small>{figure.role}</small><h3>{figure.name}</h3><p>{figure.body}</p></div>
            </article>
          ))}
        </div>
        <section className="egypt-conflict-supporting" aria-labelledby="supporting-cast-title">
          <header><span>THE COUNCIL &amp; ITS EDGES</span><h3 id="supporting-cast-title">法庭并不只有六位神</h3></header>
          <div>
            {supportingFigures.map(([name, role, body], index) => (
              <article key={name}>
                <b>0{index + 1}</b><small>{role}</small><h4>{name}</h4><p>{body}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="egypt-conflict-case" id="case-file">
        <header>
          <span>THE CONTENDINGS / 01—08 / EXPANDED READING</span>
          <h2>继承权争夺<br />完整阅读版</h2>
          <p>法庭没有一次解决争端，于是案件不断变形：辩论变成寓言，寓言变成河马比试，身体变成证据，最后又回到一组来自冥界的信。以下不是“主旨摘要”，而是沿着原文行动顺序展开的阅读版本。</p>
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
        <img src={`${siteBasePath}/egypt-conflict-trials.webp`} alt="上层为荷鲁斯与塞特化作河马，下层为木制仿石船与真正石船竞赛的绘画" />
        <figcaption><span>TRIALS OF FORCE / 04 + 07</span><b>河马与石船：暴力和字面服从都没能独自制造合法性。</b></figcaption>
      </figure>

      <section className="egypt-conflict-afterword">
        <span>AFTER THE VERDICT</span>
        <h2>结局不是“消灭混沌”，<br />而是给力量安排位置。</h2>
        <p>荷鲁斯成为地上的王，欧西里斯统治冥界，拉继续航行于昼夜；塞特虽然失去王位，却仍能在其他传统里以风暴与武力抵御阿波菲斯。埃及宇宙并不假装冲突从此消失——玛特的工作，是反复把危险的力量放回可维持世界的位置。</p>
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
