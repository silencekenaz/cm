const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cast = [
  {
    name: "荷鲁斯",
    role: "THE CLAIMANT / 王位请求人",
    image: "egypt-god-horus.webp",
    domain: "王权、天空与王的守护；在神学语言中，在位君王可被理解为地上的荷鲁斯。",
    position: "他把活着的王与已经成为冥界之王的欧西里斯连成连续的世代，使死亡不会让王位谱系断裂。",
    motive: "要求父位不是单纯替父复仇，而是让父子继承获得诸神公开承认，并把被谋杀与篡位打乱的玛特重新落到人间王权。",
  },
  {
    name: "塞特",
    role: "THE RIVAL / 竞争者",
    image: "egypt-god-seth.webp",
    domain: "荒漠、风暴、异域与破坏性力量；在另一些传统里，他也以强悍武力守卫太阳船、抵御阿波菲斯。",
    position: "他不是可以从宇宙中删去的“恶神”，而是秩序边界上危险却有用的力量：既能威胁玛特，也能被玛特调用。",
    motive: "他把成年、资历、力量与守护太阳秩序的功绩视为统治资格，因此拒绝让一个年轻侄子仅凭血统取得自己正在占有的职位。",
  },
  {
    name: "伊西斯",
    role: "THE STRATEGIST / 保护者与谋略者",
    image: "egypt-god-isis.webp",
    domain: "魔法（赫卡）、疗愈、保护、母职与王座；她的名字与王座符号相连，也是授予和维持王权的神圣力量。",
    position: "她把死去的欧西里斯、隐藏的幼年继承人和未来王权接在一起；谱系若要穿过死亡继续运作，必须经过她的知识与行动。",
    motive: "她要确保儿子承继父位，也要使被打断的家族与王权秩序恢复连续；当法庭长期失灵时，她便以隐名、变形、寓言和证据迫使程序前进。",
  },
  {
    name: "欧西里斯",
    role: "THE ABSENT KING / 缺席的王",
    image: "egypt-god-osiris.webp",
    domain: "死者、冥界、更新、谷物与逝去的王；他既是被杀的前王，也是死亡之后仍然有效的主权。",
    position: "他统治“西方”，所有神与人最终都要进入他的领域；地上的荷鲁斯王权因此不是取代欧西里斯，而是与冥界王权互为两端。",
    motive: "他维护儿子的继承权，也维护死者之王对生者秩序的约束：若诸神可以无视合法后嗣与玛特，死亡领域便会向法庭追索责任。",
  },
  {
    name: "拉—哈拉胡提",
    role: "THE PRESIDING POWER / 法庭权威",
    image: "egypt-god-ra.webp",
    domain: "太阳、创造、天空王权与昼夜航行；拉—哈拉胡提是“地平线中的荷鲁斯”与拉结合的太阳形态。",
    position: "作为会议最高权威，他代表当前仍在运转的天上秩序；太阳船对武力保护的依赖，也使他无法轻易否定塞特。",
    motive: "他优先考虑成熟力量、太阳秩序的安全与自身裁决权，因而反复质疑年轻继承人的能力；这种保守并非无理由，却使他把维持现状置于执行继承原则之前。",
  },
  {
    name: "托特",
    role: "THE SCRIBE / 书记与证据召唤者",
    image: "egypt-god-thoth.webp",
    domain: "知识、书写、计量、历法、月亮与神圣言辞；他让世界可以被命名、计算、记录和复核。",
    position: "他是诸神法庭的书记与调停者，把口头主张变成文书，把身体迹象变成证据，并让不同宇宙领域能够通过书信相互问责。",
    motive: "他要维护可验证的程序与言辞的准确性。支持荷鲁斯并非私人忠诚，而是因为父子继承的主张一次次通过发言、外部意见与证据得到确认。",
  },
];

const supportingFigures = [
  { name: "舒", role: "AIR / GENERATIONAL ORDER", domain: "空气、生命与天地分离", motive: "支持父位传子，因为世代有序更接近他所维持的宇宙间隔与秩序。" },
  { name: "涅伊特", role: "PRIMORDIAL ELDER / SAIS", domain: "原初水域、创造、战争与织造", motive: "作为法庭外的古老权威，她寻求兼顾继承与危险力量的方案：王位归荷鲁斯，同时补偿并安置塞特。" },
  { name: "巴涅布杰代特", role: "RAM OF MENDES / BA", domain: "门德斯的公羊神、丰饶与神圣显现", motive: "他拒绝在不了解案件时仓促背书，因而把程序转向资历更古老的涅伊特。" },
  { name: "安赫尔", role: "ANHUR / ONURIS · WARRIOR", domain: "战争、狩猎与把远方危险带回秩序", motive: "他承认武力的必要，却主张武力必须服务合法秩序，因而在法庭中支持荷鲁斯。" },
  { name: "哈托尔", role: "SOLAR DAUGHTER / RESTORATION", domain: "天空、欢愉、性爱、母性、太阳力量与疗愈", motive: "她使失衡的神重新获得生命力：既修复会议的情绪，也修复荷鲁斯受损的视觉。" },
  { name: "安提", role: "NEMTY / THE THRESHOLD", domain: "渡口、通行边界与执行禁令", motive: "他体现守门者的两难：职责要求阻止伊西斯，黄金诱惑却让边界失效；因此也是程序会被收买的警示。" },
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
    art: "egypt-vignette-eye-restored.webp",
    artAlt: "哈托尔手持羚羊乳容器，为受伤的荷鲁斯恢复视力",
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
    art: "egypt-vignette-settlement.webp",
    artAlt: "戴白冠的荷鲁斯与手持权杖的塞特分立于天平两侧",
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
        <figure className="egypt-conflict-prologue-vignette" aria-label="隐名故事叙事图章">
          <img src={`${siteBasePath}/egypt-vignette-secret-name.webp`} alt="伊西斯持卷面对衰老的拉，泥土所造的蛇伏在两神之间" />
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
          <h2 id="conflict-cast-title">他们为何站在这里？</h2>
          <p>人物档案不再复述情节，而是回答三件事：神明掌管什么、在宇宙秩序中处于哪里，以及什么动机使他／她介入王位争讼。</p>
        </header>
        <div className="egypt-conflict-cast-grid">
          {cast.map((figure) => (
            <article key={figure.name}>
              <img src={`${siteBasePath}/${figure.image}`} alt={`${figure.name}的古埃及壁画风格画像`} />
              <div>
                <small>{figure.role}</small><h3>{figure.name}</h3>
                <dl>
                  <div><dt>神职 / DOMAIN</dt><dd>{figure.domain}</dd></div>
                  <div><dt>宇宙位置 / POSITION</dt><dd>{figure.position}</dd></div>
                  <div><dt>争讼动机 / MOTIVE</dt><dd>{figure.motive}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <section className="egypt-conflict-supporting" aria-labelledby="supporting-cast-title">
          <header><span>THE COUNCIL &amp; ITS EDGES</span><h3 id="supporting-cast-title">法庭并不只有六位神</h3></header>
          <div>
            {supportingFigures.map((figure, index) => (
              <article key={figure.name}>
                <b>0{index + 1}</b><small>{figure.role}</small><h4>{figure.name}</h4>
                <dl><div><dt>神职</dt><dd>{figure.domain}</dd></div><div><dt>立场动机</dt><dd>{figure.motive}</dd></div></dl>
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
              {chapter.art ? (
                <figure className="egypt-conflict-chapter-art">
                  <img src={`${siteBasePath}/${chapter.art}`} alt={chapter.artAlt} />
                </figure>
              ) : (
                <span className="egypt-conflict-chapter-mark" aria-hidden="true">{["𓂀", "☉", "♙", "≋", "◉", "✦", "⌁", "𓇳"][index]}</span>
              )}
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
