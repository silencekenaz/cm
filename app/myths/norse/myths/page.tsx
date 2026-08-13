import type { Metadata } from "next";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "北欧神话篇｜雷霆与求知",
  description: "沿索尔在巨人国的诸次行动与奥丁的知识探寻，按人物、事件与原典版本阅读北欧神话。",
};

const cast = [
  {
    name: "索尔",
    oldNorse: "ÞÓRR / HAMARR",
    mark: "ᚦ",
    domain: "雷霆、力量与人神世界的防卫者；妙尔尼尔既是武器，也能用于祝圣。",
    position: "他经常离开阿斯加德，直接走进巨人、海与荒野构成的边界，让危险无法轻易越过有人居住的世界。",
    motive: "取回失物、完成诸神共同的任务，也反复证明力量在面对幻术、衰老与宇宙尺度时究竟能走多远。",
  },
  {
    name: "奥丁",
    oldNorse: "ÓÐINN / AUGA",
    mark: "ᚨ",
    domain: "王权、战争、诗歌、符文、亡者与知识；他的能力并不来自静止的全知。",
    position: "作为诸神之父与阿斯加德的统治者，他同时也是不断改名、越界、试探巨人知识的旅行者。",
    motive: "提前理解世界的起源与终局，为诸神黄昏积累知识与力量；为此愿意支付身体、身份乃至道德上的代价。",
  },
  {
    name: "洛基",
    oldNorse: "LOKI / RÁÐ",
    mark: "ᛚ",
    domain: "没有可被一句话固定的单一神职；在诸神故事里常以变形、语言、侦察和临场机变行动。",
    position: "他与诸神同行，却不稳定地站在秩序内部：有时制造危机，有时解决危机，也常同时做这两件事。",
    motive: "依具体文本而变。在乌特加德他参赛，在锤之歌中侦察并圆场；不能把后来故事里的敌对位置倒灌进每一段早期叙事。",
  },
  {
    name: "夏尔菲",
    oldNorse: "ÞJÁLFI / HLAUP",
    mark: "ᛃ",
    domain: "索尔的人类侍从，以脚力和行动速度见长；萝丝克瓦是他的妹妹。",
    position: "他从农家进入神的远行队伍，使乌特加德的较量不只是神与巨人的对峙，也包含人的能力如何被宇宙尺度重新衡量。",
    motive: "作为同行者执行任务并以奔跑接受挑战；他的败局并非普通失速，因为对手“胡吉”就是思想。",
  },
  {
    name: "弗蕾雅",
    oldNorse: "FREYJA / BRÍSINGAMEN",
    mark: "ᚠ",
    domain: "爱欲、丰饶、财富、战争死者与魔法；拥有鹰羽衣与布里辛项链。",
    position: "在《特里姆之歌》中，她既提供能跨越世界侦察的羽衣，也明确拒绝被当成归还神圣武器的交换品。",
    motive: "守住自身意志与尊严。她的拒绝迫使诸神另想办法，也使后续伪装成为集体决策，而不是拿一位女神直接支付赎金。",
  },
  {
    name: "海姆达尔",
    oldNorse: "HEIMDALLR / RÁÐ",
    mark: "ᛗ",
    domain: "诸神的守望者，听觉与视觉敏锐；《特里姆之歌》还说他像华纳神族一样预知未来。",
    position: "当阿斯加德失去妙尔尼尔、正面武力又无法取回时，是他在会议上提出整套新娘伪装方案。",
    motive: "让防卫世界的锤回到索尔手中。他的智慧不是抽象箴言，而是一项会立刻遭当事人反对、却确实可执行的战术。",
  },
  {
    name: "提尔",
    oldNorse: "TÝR / KETILL",
    mark: "ᛏ",
    domain: "与战斗、勇气及誓约秩序相关的神；《希米尔之歌》让他成为寻找巨锅的情报提供者与同行者。",
    position: "他知道希米尔住处与巨锅所在，并在抵达后由自己的母亲保护；诗中又称希米尔为他的父亲，谱系关系带有文本自身的复杂性。",
    motive: "为诸神取得足以酿酒的大锅。他尝试搬锅却失败，最后由索尔完成，但行动的起点和路线都来自他的知识。",
  },
  {
    name: "密米尔",
    oldNorse: "MÍMIR / BRUNNR",
    mark: "ᛇ",
    domain: "智慧与记忆；密米尔之泉位于世界树通向霜巨人领域的一根树根之下。",
    position: "他不是免费发放答案的导师，而是知识地点的守护者；泉水因有代价、有看守，才成为权力关系的一部分。",
    motive: "维持知识交换的门槛。奥丁若要饮泉，就必须留下足以证明这次求知不可撤销的抵押。",
  },
];

const counterparts = [
  { name: "斯克里米尔／乌特加德-洛基", role: "ILLUSION & MEASURE", text: "以巨人旅伴和城主两种身份操纵知觉，把索尔一行人的本领换算成火、思想、海、巨蛇和衰老。" },
  { name: "特里姆", role: "THE THIEF OF THE HAMMER", text: "偷走妙尔尼尔并索要弗蕾雅；他把婚姻当交易，却亲手把锤放回伪装成新娘的索尔膝上。" },
  { name: "希米尔", role: "KETTLE & SEA", text: "巨锅的主人，也是索尔出海时的同船者；他以宴食、酒杯、搬运和追击不断设置门槛。" },
  { name: "尘世巨蛇", role: "JÖRMUNGANDR", text: "环绕人类世界的巨蛇，在牛头鱼饵下被拉到海面；这次未终结的相遇预示诸神黄昏。" },
  { name: "瓦夫苏鲁特尼尔", role: "THE WISE JÖTUNN", text: "以宇宙知识著称的巨人，与化名来访的奥丁互相押上头颅，在问答中讲述世界的前后。" },
  { name: "弗丽嘉", role: "COUNSEL BEFORE THE WAGER", text: "知道瓦夫苏鲁特尼尔极其强大，劝奥丁不要去；劝阻无效后，祝愿他的智慧与记忆护送他归来。" },
  { name: "贡萝德", role: "KEEPER OF THE MEAD", text: "在山中看守诗蜜酒。奥丁与她共度三夜，以三口饮尽三只容器；她既是守护者，也是交易中被欺骗的一方。" },
  { name: "包吉与苏图恩", role: "LABOUR, BARGAIN, PURSUIT", text: "包吉接受奥丁一季劳动却未兑现报酬；苏图恩占有蜜酒并追赶逃走的奥丁。两人让“得到诗才”成为一连串劳动、违约与盗取。" },
];

export const thorChapters = [
  {
    number: "01",
    oldNorse: "GEITR · ÞJÁLFI · RÖSKVA",
    title: "一根被敲裂的骨头，带来两位同行者",
    actions: [
      ["索尔", "在农家借宿时宰杀自己的两只山羊，把肉分给主人一家，并吩咐众人把骨头完整放回铺在地上的羊皮。次日他举锤祝圣，山羊重新站起，其中一只却跛了。"],
      ["夏尔菲", "为了取食骨髓，用刀敲裂一根腿骨。索尔发现山羊受损时怒目握锤，农家全家惊惧求饶。"],
      ["农家与索尔", "家人拿出所有财产请求补偿；索尔见他们恐惧，收敛怒气，留下山羊疗养，并带走夏尔菲与萝丝克瓦作为侍从。"],
    ],
    note: "这一段为远行建立了代价：索尔的祝圣能使生命复归，却不能假装破坏从未发生；两位人类同行者也不是凭空加入队伍。",
    source: "《散文埃达·欺骗古鲁菲》44章",
    rune: "ᚦ",
  },
  {
    number: "02",
    oldNorse: "SKRÝMIR",
    title: "巨人的手套，被误认成一座大厅",
    actions: [
      ["索尔一行", "渡海向东进入森林，夜里找到一座奇怪的大厅：一端开口，旁边还有小房间。深夜地面震动，众人退进侧室，索尔握锤守在入口。"],
      ["斯克里米尔", "天亮后出现，解释昨夜的轰鸣只是自己的鼾声；所谓大厅其实是他的手套，侧室则是拇指。他与众人结伴，还把双方食物装进同一只口袋。"],
      ["洛基与索尔", "洛基一整晚解不开巨人给袋子打的结。索尔于是趁斯克里米尔睡着，三次用妙尔尼尔击打他的头；巨人只问是否落下树叶、橡实或小树枝。"],
      ["斯克里米尔", "临别前提醒他们：乌特加德的随从不会容忍旅人的夸口。后来城主揭晓，锤击其实被幻术引向山岭，留下三道深谷。"],
    ],
    note: "故事先让建筑尺度失真，再让武器效果失真。索尔并非没有用力，而是不知道自己面对的空间已被对手重新布置。",
    source: "《散文埃达·欺骗古鲁菲》45章",
    rune: "ᚲ",
  },
  {
    number: "03",
    oldNorse: "LEIKAR Í ÚTGARÐI",
    title: "五场比赛，每个人都做了自己最擅长的事",
    actions: [
      ["洛基与洛吉", "洛基提出比食量。两人从木槽两端向中间吃；洛基吃光肉，洛吉却连肉、骨头和木槽一起吞尽。揭晓时，洛吉原来是野火。"],
      ["夏尔菲与胡吉", "夏尔菲三次赛跑都落后。胡吉并非普通跑者，而是乌特加德-洛基的思想；没有任何奔跑能快过念头。"],
      ["索尔与饮角", "索尔连续三次举角痛饮，只让水面下降。角的另一端其实通向大海，他的饮量制造了退潮。"],
      ["索尔与猫", "他试图把一只灰猫举离地面，只抬起一只脚。猫是被幻术缩进大厅的尘世巨蛇；能让环绕世界的身体离地，已令在场巨人惊惧。"],
      ["索尔与埃莉", "索尔最后与一位老妪摔跤，被迫单膝着地。埃莉就是衰老；无人能最终战胜她，而索尔能抵抗如此之久，反而暴露了他的力量。"],
      ["乌特加德-洛基", "次日把众人送出城，逐项揭开对手身份，承认若早知索尔如此强大便不会放他进来。索尔举锤欲击，城主与城堡一起消失。"],
    ],
    note: "比赛的关键不是“索尔输了”，而是每项成绩只有在真实对手揭晓后才获得尺度。城主赢得表面赛果，却也被迫承认自己的恐惧。",
    source: "《散文埃达·欺骗古鲁菲》46—47章",
    rune: "ᛇ",
  },
  {
    number: "04",
    oldNorse: "ÞRYMSKVIÐA I",
    title: "锤被埋进地下，阿斯加德先开会",
    actions: [
      ["索尔", "醒来发现妙尔尼尔不见，先抓住洛基说明失窃；锤不仅属于个人，它也是诸神防线的一部分。"],
      ["弗蕾雅", "借出鹰羽衣让洛基跨越世界侦察。特里姆索要她作为交换时，她愤怒得神殿震动、布里辛项链迸裂，明确拒绝前往巨人国。"],
      ["洛基与特里姆", "洛基飞到巨人国。特里姆坐在坟丘为狗编金项圈、修整马鬃，坦白锤被藏在地下八里：除非弗蕾雅成为他的妻子，否则无人能取回。"],
      ["海姆达尔", "诸神召开会议，他提出让索尔披婚纱、戴布里辛项链、挂钥匙、蒙头巾，伪装成新娘。索尔担心因此被讥为软弱，洛基则指出若不取回锤，巨人很快就会住进阿斯加德。"],
    ],
    note: "这不是洛基与索尔两人的私下恶作剧。弗蕾雅的拒绝、诸神会议、海姆达尔的方案与索尔的顾虑共同推动了伪装。",
    source: "《诗体埃达·特里姆之歌》1—20节",
    rune: "ᛗ",
  },
  {
    number: "05",
    oldNorse: "ÞRYMSKVIÐA II",
    title: "婚宴把锤送回了索尔手里",
    actions: [
      ["特里姆", "命巨人铺长凳、布置宴席，得意地展示金角牛与黑色牲畜；他以为财富和婚礼程序都已站在自己一边。"],
      ["索尔", "以“新娘”身份一口气吃掉一整头牛、八条鲑鱼和给女人准备的点心，又喝下三桶蜜酒；特里姆掀头巾时，还被他眼中的火光吓退。"],
      ["洛基", "作为侍女解释异常：弗蕾雅因渴望巨人国，八夜未进食、八夜未合眼。每一次圆场，都让婚礼继续向最关键的仪式推进。"],
      ["特里姆的姐姐", "向新娘索要手上的红金戒指作为礼物；她同样相信婚约已完成，只差最后祝圣。"],
      ["妙尔尼尔与索尔", "特里姆命人把锤放在新娘膝上，以锤祝圣婚姻。索尔握住失物，先击杀特里姆，再击倒巨人宾客和索礼的姐姐。"],
    ],
    note: "妙尔尼尔兼有武器与祝圣器物的双重功能。特里姆试图用它确认婚姻，正因如此亲手取消了自己唯一的优势。",
    source: "《诗体埃达·特里姆之歌》21—32节",
    rune: "ᛏ",
  },
  {
    number: "06",
    oldNorse: "HYMISKVIÐA",
    title: "诸神缺一口锅，于是提尔带索尔去找希米尔",
    actions: [
      ["埃吉尔与诸神", "诸神占卜后认定海神埃吉尔家中适合设宴。埃吉尔答应酿酒，却要求索尔先带来一口足够大的锅。"],
      ["提尔", "指出东方天尽头的希米尔拥有一口深达一里的巨锅，并与索尔出发。他的母亲以金眉迎接两人，九百头的祖母则让巨人之家显得更危险。"],
      ["提尔的母亲", "让客人藏在大锅后方，等希米尔回家后再说明来意。希米尔的目光使屋梁断裂、八口锅坠落，只有一口没有摔碎。"],
      ["索尔与希米尔", "晚餐准备三头牛，索尔独自吃掉两头。希米尔说若继续招待，第二天必须出海捕鱼；索尔便从牛群中扭下巨牛希敏赫里奥特的头作饵。"],
    ],
    note: "《希米尔之歌》像把数个强烈片段接进同一首诗。此处保留其跳跃，不替文本伪造一套过度整齐的家庭谱系。",
    source: "《诗体埃达·希米尔之歌》1—18节",
    rune: "ᚼ",
  },
  {
    number: "07",
    oldNorse: "ORMR · KETILL",
    title: "先把巨蛇拉到船边，再把巨锅背回诸神之宴",
    actions: [
      ["希米尔", "划船出海并钓起两条鲸，随后因为索尔仍要向更深处前进而恐惧。他要求索尔回岸后分担搬船与猎物。"],
      ["索尔", "用牛头钓起尘世巨蛇，把它拉向船沿并举锤击打；诗歌让巨蛇沉回海中，斯诺里的散文叙述则让希米尔因惊惧割断钓线。"],
      ["索尔与巨锅", "回家后接受打碎酒杯的考验。普通柱子无法令杯破裂，希米尔坚硬的额头反而成了破杯的唯一表面；提尔两次搬锅失败，索尔把锅举起背走。"],
      ["希米尔与众巨人", "发现巨锅被带走后追赶。索尔转身举锤击倒追兵，最终把锅带回诸神之会，埃吉尔从此得以为众神酿酒。"],
    ],
    note: "钓蛇情节至少有诗歌与斯诺里散文两套显著不同的收束。页面并列差异，不把“割线”冒充所有原典共同的唯一版本。",
    source: "《诗体埃达·希米尔之歌》19—39节；《欺骗古鲁菲》48章",
    rune: "ᛚ",
  },
];

export const odinChapters = [
  {
    number: "01",
    oldNorse: "MÍMISBRUNNR",
    title: "密米尔守泉，奥丁留下一只眼",
    actions: [
      ["密米尔", "守护位于世界树根下的泉水，以号角饮用其中的智慧；泉的位置把知识直接系在世界结构与巨人领域上。"],
      ["奥丁", "来到泉边请求饮水，并把一只眼睛留下作为抵押。《女先知的预言》以隐语追问那只眼藏在哪里，斯诺里则更直接写出交换。"],
      ["女先知", "知道奥丁眼睛的所在，也知道密米尔每天饮用泉水。她以“你还想知道什么”反问求知者，提醒读者奥丁仍有未知。"],
    ],
    note: "奥丁不是因为全知才寻求智慧；他正因为知道自身缺失，才愿意让代价永久写在脸上。",
    source: "《女先知的预言》28节；《散文埃达·欺骗古鲁菲》15章",
    rune: "ᛇ",
  },
  {
    number: "02",
    oldNorse: "RÚNATAL",
    title: "奥丁把自己献给自己，在树上悬挂九夜",
    actions: [
      ["奥丁", "被长矛刺伤，悬在风摇的树上九夜；无人以面包或角杯救济。他说这是“我献给我自己”，使献祭者、祭品与受祭者重叠。"],
      ["符文", "并非由教师递交。奥丁向下凝视，在痛苦将要抵达极限时呼喊、拾起符文，随后从树上坠落。"],
      ["掌握者", "诗歌紧接着追问是否知道如何刻、解、染、试、祈求、献祭和毁除。取得字符不等于安全使用；知识从获得之初就附带操作责任。"],
    ],
    note: "《至高者箴言》的悬树段落语言凝练，未把树名直接写出。把它理解为世界树是传统而有力的解释，但页面不把推断伪装成诗句原话。",
    source: "《诗体埃达·至高者箴言》138—145节",
    rune: "ᚱ",
  },
  {
    number: "03",
    oldNorse: "VAFÞRÚÐNISMÁL",
    title: "弗丽嘉劝阻，奥丁仍把头颅押进问答",
    actions: [
      ["奥丁", "告诉弗丽嘉自己要去试探瓦夫苏鲁特尼尔的古老知识，并化名“甘格拉德”进入巨人的大厅。"],
      ["弗丽嘉", "劝他留在家中，因为自己所知巨人里没有谁比瓦夫苏鲁特尼尔更强。奥丁坚持出发，她便祝愿丈夫的智慧、记忆与言辞平安带他回来。"],
      ["瓦夫苏鲁特尼尔", "先让陌生来客站在厅中答题，以日、夜、天地与界河考验他；奥丁全部答对后，提出两人坐下并以头颅为赌注互问。"],
      ["两位问答者", "问题从原初巨人、日月、冬夏，一路延伸到诸神黄昏后的幸存者。巨人给出大量宇宙知识，奥丁则把对话一步步推向只有自己能回答的私人记忆。"],
      ["奥丁的终题", "他问自己曾在巴德尔登上火葬堆前对儿子耳语什么。瓦夫苏鲁特尼尔由此认出奥丁，承认没有任何人知道这句话，并承认败局。"],
    ],
    note: "胜负不只取决于谁知道更多，还取决于谁能规定最后一道题属于哪一种知识。奥丁用身份秘密终结了原本关于公共宇宙知识的竞赛。",
    source: "《诗体埃达·瓦夫苏鲁特尼尔之歌》",
    rune: "ᚨ",
  },
  {
    number: "04",
    oldNorse: "KVASIR · SKÁLDSKAPAR MJAÐAR",
    title: "诗蜜酒先由和解诞生，又在谋杀中被酿成",
    actions: [
      ["阿萨与华纳诸神", "结束战争、缔结和约时共同向容器吐唾液，并用这份混合物造出极有智慧的克瓦希尔，让和解本身获得可以行走和回答问题的身体。"],
      ["克瓦希尔", "遍行世界教导众人，没有问题能难倒他；正因为他的知识可以流动，后来对知识的占有才显得格外残酷。"],
      ["菲亚拉与伽拉尔", "两名矮人杀死克瓦希尔，把血与蜂蜜混合，装进两个罐和一只锅，酿成使饮者成为诗人或智者的蜜酒；他们谎称克瓦希尔因智慧过多而窒息。"],
      ["苏图恩与贡萝德", "矮人又害死巨人吉灵及其妻，吉灵之子苏图恩抓住他们，以蜜酒作为赔偿。苏图恩把酒藏进山中，交由女儿贡萝德看守。"],
    ],
    note: "诗才的来源不是纯洁灵感：和平、共同创造、谋杀、谎言、血与赔偿都在酒中。原典故意让文化能力背负一段不干净的来历。",
    source: "《散文埃达·诗艺语言》诗蜜酒起源段",
    rune: "ᛜ",
  },
  {
    number: "05",
    oldNorse: "BÖLVERKR · BAUGI",
    title: "九个人的劳动、一个失约和钻进山壁的蛇",
    actions: [
      ["奥丁", "化名“博尔韦克”，用磨刀石令包吉的九名割草人争抢，九人在混乱中互相割断喉咙；他随即提出自己可以承担九人的工作。"],
      ["包吉", "作为苏图恩的兄弟雇用陌生人，答应以三口蜜酒作一季劳动的报酬。劳动完成后，他去向苏图恩索酒，却得到拒绝。"],
      ["奥丁与包吉", "两人转向盗取。包吉用钻具打山洞，第一次谎称已钻通，奥丁吹气发现石屑反扑；第二次真正钻穿后，奥丁化蛇钻入孔中，躲过包吉从后刺来的钻头。"],
    ],
    note: "奥丁确实付出劳动，但他的计划从一开始就建立在九名工人的死亡上；包吉又违约并试图杀他。故事没有提供一位道德上干净的交易者。",
    source: "《散文埃达·诗艺语言》奥丁取得诗蜜酒段",
    rune: "ᛒ",
  },
  {
    number: "06",
    oldNorse: "GUNNLÖÐ · ÓÐRERIR",
    title: "贡萝德给三口，奥丁一口饮尽一器",
    actions: [
      ["贡萝德", "在山中守酒，与进入洞穴的奥丁共度三夜，并答应给他三口。她履行了承诺，却没有预料每一“口”的尺度。"],
      ["奥丁", "第一口饮尽奥德雷里尔，第二口饮尽博德恩，第三口饮尽松恩，随后化成鹰飞向阿斯加德。"],
      ["苏图恩", "发现蜜酒被盗，化鹰追赶。阿萨诸神看到奥丁飞来，摆出容器承接他吐回的酒，使诗蜜酒进入诸神与有才智的诗人手中。"],
      ["《至高者箴言》的说话者", "回望贡萝德时并不只歌颂胜利：她让他坐上金座并给他珍贵酒液，他却用欺骗回报善意。这段自述保留了成功者无法完全抹去的亏欠。"],
    ],
    note: "诗歌与散文把同一事件照出不同侧面：前者更接近背叛后的反省，后者解释蜜酒如何成为诗才来源。两者并读，奥丁的“获得”才完整。",
    source: "《散文埃达·诗艺语言》；《至高者箴言》103—110节",
    rune: "ᛟ",
  },
];

function CastCard({ figure, index }: { figure: (typeof cast)[number]; index: number }) {
  return (
    <article className="norse-cast-card">
      <div><span>{String(index + 1).padStart(2, "0")}</span><b aria-hidden="true">{figure.mark}</b></div>
      <small>{figure.oldNorse}</small>
      <h3>{figure.name}</h3>
      <dl>
        <div><dt>神职 / DOMAIN</dt><dd>{figure.domain}</dd></div>
        <div><dt>世界位置 / POSITION</dt><dd>{figure.position}</dd></div>
        <div><dt>行动动机 / MOTIVE</dt><dd>{figure.motive}</dd></div>
      </dl>
    </article>
  );
}

export function StoryChapter({ chapter }: { chapter: (typeof thorChapters)[number] | (typeof odinChapters)[number] }) {
  return (
    <article>
      <div className="norse-story-number">
        <span>{chapter.number}</span><small>{chapter.oldNorse}</small><b aria-hidden="true">{chapter.rune}</b>
      </div>
      <div className="norse-story-copy">
        <h3>{chapter.title}</h3>
        <div className="norse-action-ledger">
          {chapter.actions.map(([actor, action], index) => (
            <div key={`${chapter.number}-${actor}-${index}`}><b>{actor}</b><p>{action}</p></div>
          ))}
        </div>
        <aside className="norse-story-note"><b>READING NOTE / 文本提示</b><p>{chapter.note}</p></aside>
        <small>SOURCE / {chapter.source}</small>
      </div>
    </article>
  );
}

export default function Page() {
  const hubHref = `${siteBasePath}/myths/norse${staticPageSuffix}`;
  const heroesHref = `${siteBasePath}/myths/norse/heroes${staticPageSuffix}`;
  const thorHref = `${siteBasePath}/myths/norse/myths/thor${staticPageSuffix}`;
  const odinHref = `${siteBasePath}/myths/norse/myths/odin${staticPageSuffix}`;

  return (
    <main className="norse-myth-threads-page">
      <nav className="myth-atlas-nav" aria-label="北欧神话篇页面导航">
        <a href={hubHref}>← 返回北欧总览</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="norse-threads-hero">
        <div className="norse-threads-storm" aria-hidden="true"><i /><i /><i /></div>
        <div className="norse-threads-ravens" aria-hidden="true"><span>◆</span><span>◆</span></div>
        <span>PATH 01 / GOÐ · JÖTNAR · WISDOM</span>
        <h1><em>雷霆</em>向外，<br /><b>目光</b>向内。</h1>
        <p>这不是只追着一位神走的角色年表，而是两组行动档案：索尔一线记录诸神如何进入巨人领域、取回武器、索取巨锅并触及海中巨蛇；奥丁一线记录知识如何被守护、交换、赢取与偷走。</p>
        <div className="norse-thread-hero-index">
          <a href={thorHref}><span>01 / HAMARR</span><b>巨人国诸行</b><i>↗</i></a>
          <a href={odinHref}><span>02 / AUGA</span><b>知识的价码</b><i>↗</i></a>
        </div>
      </header>

      <aside className="norse-thread-method">
        <b>READING NOTE / 不是一条时间线</b>
        <p>以下“主线”是阅读编排，不把独立诗篇缝成一部现代连续小说。每个节点都会写明谁采取了什么行动，并在诗歌、斯诺里散文或后世常见讲法出现差异时保留版本边界。</p>
      </aside>

      <section className="norse-thread-cast" aria-labelledby="norse-cast-title">
        <header><span>DRAMATIS NORDICAE / 人物坐标</span><h2 id="norse-cast-title">他们为何<br />走进故事？</h2><p>人物档案回答神职、世界位置与行动动机；具体事件则留到后面的行动记录，不用一件著名轶事替代一个人物。</p></header>
        <div className="norse-cast-grid">{cast.map((figure, index) => <CastCard figure={figure} index={index} key={figure.name} />)}</div>
        <section className="norse-counterparts" aria-labelledby="norse-counterparts-title">
          <header><span>GIANTS, KEEPERS &amp; COUNSEL</span><h3 id="norse-counterparts-title">另一边也不是布景</h3></header>
          <div>{counterparts.map((figure, index) => <article key={figure.name}><b>{String(index + 1).padStart(2, "0")}</b><small>{figure.role}</small><h4>{figure.name}</h4><p>{figure.text}</p></article>)}</div>
        </section>
      </section>

      <section className="norse-thread-gates" aria-labelledby="norse-thread-gates-title">
        <header><span>CHOOSE A CASE FILE / 两卷分读</span><h2 id="norse-thread-gates-title">从这里，<br />故事分开。</h2><p>两卷共享同一组人物坐标，但不再挤进一条长页面。每个入口都会进入独立子页面，按行动者与原典次序展开。</p></header>
        <div>
          <a href={thorHref} className="norse-thread-gate norse-thread-gate-thor">
            <div><span>CASE FILE 01 / HAMARR</span><b aria-hidden="true">ᚦ</b></div>
            <small>7 ACTION CHAPTERS</small><h3>巨人国诸行</h3>
            <p>山羊复生、斯克里米尔、乌特加德诸赛、妙尔尼尔失窃、巨人婚宴、希米尔的锅与海中巨蛇。</p>
            <strong>打开雷霆卷 <i aria-hidden="true">↗</i></strong>
          </a>
          <a href={odinHref} className="norse-thread-gate norse-thread-gate-odin">
            <div><span>CASE FILE 02 / AUGA</span><b aria-hidden="true">ᛟ</b></div>
            <small>6 ACTION CHAPTERS</small><h3>知识的价码</h3>
            <p>密米尔之泉、悬树得符文、巨人问答，以及从克瓦希尔之血到贡萝德山洞的诗蜜酒。</p>
            <strong>打开独眼卷 <i aria-hidden="true">↗</i></strong>
          </a>
        </div>
      </section>

      <section className="norse-thread-compare">
        <span>WHAT THE TWO THREADS REVEAL</span>
        <h2>力量需要尺度，<br />知识需要代价。</h2>
        <div>
          <p><b>巨人国诸行</b><br />谁掌握赛场、信息与仪式，谁就能暂时改变力量的意义；而妙尔尼尔往往在众人已经把道路铺到最后一步后才落下。</p>
          <p><b>知识的价码</b><br />眼睛、疼痛、劳动、赌命和欺骗都能让知识流动，但“终于得到”从不自动等于正当，也不能保证逃离命运。</p>
        </div>
      </section>

      <div className="norse-thread-footer-links">
        <a href={hubHref}>← 返回九界与北欧总览</a>
        <a href={heroesHref}>前往英雄传说 →</a>
      </div>
    </main>
  );
}
