"use client";

export const dynamic = "force-static";

import { useEffect, useState } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const oracles = [
  {
    voice: "短颂 · OLIVE",
    form: "写给重新开始的人",
    text: `雅典娜把橄榄种在石缝里，
不是因为土地已经准备好，
而是因为生长本身会准备土地。`,
    signature: "— 今日宜：先种下第一步",
  },
  {
    voice: "三行诗 · SISYPHUS",
    form: "西西弗斯的工作笔记",
    text: `石头还会滚下来，当然。
可你的肩膀已经记住山坡的形状，
下一次，会推得更稳一些。`,
    signature: "— 重复不总是回到原点",
  },
  {
    voice: "线之歌 · ARIADNE",
    form: "阿里阿德涅的提醒",
    text: `那根线不替你走出迷宫，
它只在每一次转弯时告诉你：
大胆向前，你仍然找得到自己。`,
    signature: "— 迷路也可以是一种探索",
  },
  {
    voice: "太阳歌 · ICARUS",
    form: "给伊卡洛斯的第二版结局",
    text: `靠近太阳，不必以坠落收场。
记住蜡的温度，也记住风的方向；
勇敢若学会方法，就能飞得更久。`,
    signature: "— 热情也需要一点工程学",
  },
  {
    voice: "旅歌 · HERMES",
    form: "赫尔墨斯的途中便笺",
    text: `消息偶尔迟到，路标偶尔写反，
但双脚比地图更懂得修正方向。
先出发，世界会补上后半句。`,
    signature: "— 旅途中允许临时改道",
  },
  {
    voice: "归航诗 · ODYSSEUS",
    form: "写给还在海上的人",
    text: `归途从来不是一条直线。
那些使你绕远的岛屿，也教会你
如何认出真正想回去的地方。`,
    signature: "— 慢一点，也仍在归航",
  },
  {
    voice: "回声诗 · ORPHEUS",
    form: "俄耳甫斯没有唱完的歌",
    text: `不要因为一次回头就否定整首歌。
你已经让石头听见旋律；
遗憾证明你曾把爱唱得很认真。`,
    signature: "— 继续唱，下一节仍属于你",
  },
  {
    voice: "火种诗 · PROMETHEUS",
    form: "普罗米修斯的微小火种",
    text: `不必一次照亮整个人间。
先护住手里这一点火，
它足够让身边的人看清彼此。`,
    signature: "— 光明从可传递开始",
  },
  {
    voice: "箴言诗 · MIDAS",
    form: "迈达斯王终于学会的事",
    text: `不是所有触碰都需要变成黄金。
有些普通的面包、拥抱和午后，
本来就比金子更适合被珍惜。`,
    signature: "— 今日宜保留事物原本的价值",
  },
  {
    voice: "水边诗 · NARCISSUS",
    form: "给纳西索斯的一盆清水",
    text: `照见自己，不等于困在自己里面。
看清倒影以后，请抬起头：
岸边还有花，也还有别人。`,
    signature: "— 自省之后，记得回到世界",
  },
  {
    voice: "肩上诗 · ATLAS",
    form: "阿特拉斯的休息日",
    text: `你不必每天独自举起天空。
把一角交给可信的人，
世界不会因此掉下来。`,
    signature: "— 能够求助，也是一种力量",
  },
  {
    voice: "匣中诗 · PANDORA",
    form: "潘多拉把匣子重新打开",
    text: `希望留在匣底，不是要你原地等待。
它是一双仍愿意工作的手，
在事情不完美时继续整理明天。`,
    signature: "— 希望是一种动词",
  },
  {
    voice: "节庆诗 · DIONYSUS",
    form: "狄俄尼索斯的清醒祝酒词",
    text: `认真生活，不妨也认真庆祝。
欢乐不是对责任的逃避；
它提醒你，努力值得拥有回声。`,
    signature: "— 杯中可装葡萄汁，神不会介意",
  },
  {
    voice: "橄榄诗 · ATHENA",
    form: "战神走后，智慧留下",
    text: `并非每场战斗都要靠更响的声音。
有时，一张清楚的地图和一段耐心，
比阿瑞斯的长矛走得更远。`,
    signature: "— 策略是安静的勇气",
  },
  {
    voice: "四季诗 · PERSEPHONE",
    form: "珀耳塞福涅的返程表",
    text: `地下的季节也有结束的时候。
你不必催促春天，
只需在它到来时愿意重新发芽。`,
    signature: "— 休息不是停滞",
  },
  {
    voice: "日光诗 · APOLLO",
    form: "阿波罗的练习建议",
    text: `弓箭手先调整呼吸，再谈命中太阳。
把宏大的愿望留在心里，
今天只需瞄准一个清楚的小目标。`,
    signature: "— 精确，是热情温柔的骨架",
  },
];

const seventhSeal = {
  voice: "第七次回答 · VII",
  form: "你找到了藏在神谕里的小纸条",
  text: `你已经第七次来到这里。
也许现在需要的不是更神秘的答案：
先去做那件最小、最确定的事。`,
  signature: "— 彩蛋：阿波罗批准你暂时退出网页",
};

const apolloStories = [
  {
    title: "德尔斐与巨蟒",
    greek: "ΠΥΘΩ · PYTHO",
    text: "传说阿波罗来到帕耳那索斯山，击败守护此地的巨蟒皮同，并在德尔斐建立自己的神谕。皮提亚之名也被认为保留了皮同的回声：新神接管了圣地，却没有让旧名字彻底消失。",
    note: "有些胜利不会抹去过去，而会把过去写进新的仪式。",
    sourceLabel: "《荷马颂歌·致阿波罗》",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D3",
    fullText: [
      "阿波罗离开出生的岛屿时，弓已经长成，琴还没有找到自己的声音。他沿着希腊的山脊行走，想为神谕寻找一处不会被市集喧声淹没的地方。许多泉水向他发亮，许多城市愿意替他筑墙；他都没有停下。预言需要一处足够安静的中心，让人走了很远以后，才肯承认自己真正想问什么。",
      "帕耳那索斯山下，峡谷像一道没有合拢的门。那里盘踞着一条古老的巨蟒，身体压过泉边的石块，鳞片带着湿土与腐叶的颜色。它守护旧秩序，也吞没误入山谷的人。阿波罗站在远处，先听见它的呼吸，随后才看见它抬起头来。",
      "“这里已经有主人。”巨蟒的声音贴着地面传来。阿波罗搭箭，金色弓弦在阴影里绷紧：“那么让山谷自己决定，谁的声音能够留下。”第一支箭落在鳞片上，像光撞上岩壁；第二支、第三支紧随其后。战斗持续到泉水被震出波纹，最后，巨蟒倒在裂谷旁，庞大的身体慢慢回到泥土与草根之间。",
      "阿波罗没有替它抹去名字。他把此地称作皮托，让旧守护者留在新圣所的语言里；后来坐在三脚祭坛上传达神意的女祭司，也被称作皮提亚。胜者建立了神殿，败者却成为每一次问答背后的暗音。",
      "可神殿还缺少祭司。阿波罗于是走向海边，化作一只巨大的海豚，跃上从克里特驶来的船。水手们惊惧地放开船桨，船却被无形的风带向克里萨港。上岸时，神重新显出光明的形体，命他们循着琴声进入山谷，照看香火，也照看那些带着疑问远道而来的人。",
      "从此，人们登上德尔斐。有人问战争，有人问归期，也有人只问自己是否应该迈出第一步。月桂在火中发出清苦的香气，泉水照见低下的脸。阿波罗很少直接回答；他让皮提亚说出多义的句子，因为命运不是一扇替人打开的门，而是一束照亮门把手的光。",
    ],
  },
  {
    title: "赫尔墨斯的里拉琴",
    greek: "ΛΥΡΑ · LYRE",
    text: "刚出生不久的赫尔墨斯偷走了阿波罗的牛，又用龟甲做成里拉琴。阿波罗听见琴声后，怒气竟被好奇心截走：他收下琴，把象征信使身份的权杖交给赫尔墨斯。一次神界盗窃案，最后变成了乐器交换会。",
    note: "真正动听的新事物，偶尔也能为混乱找到和解的形式。",
    sourceLabel: "《荷马颂歌·致赫尔墨斯》",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D4",
    fullText: [
      "赫尔墨斯出生在基勒涅山的清晨。到中午，他已经对摇篮失去兴趣。他从襁褓里钻出来，在洞口遇见一只乌龟，便像遇见一件等待被发明的东西那样端详它。龟甲被掏空，芦秆与弦被安上去；当第一声琴音在山洞里弹开时，连发明者自己都安静了一瞬。",
      "傍晚，他又想起另一件事：阿波罗的牛群正在远方吃草。这个刚学会走路的孩子穿过夜色，把牛赶离牧场，还设法扰乱足迹，让追踪者分不清来路与去路。他生火、献祭、藏好余下的牛，然后在天亮前赶回母亲迈亚的洞穴，把自己重新塞进襁褓，摆出一个对世界毫无意见的婴儿表情。",
      "阿波罗当然找来了。他站在摇篮前，身上带着长途追踪留下的尘土。“我的牛在哪里？”赫尔墨斯睁大眼睛：“牛是什么？我昨天才出生。”迈亚看着他们，一个怒火发亮，一个无辜得过于用力，知道这场争论只能交给宙斯。",
      "奥林匹斯山上，赫尔墨斯仍坚持自己只是婴儿。宙斯听完辩词，几乎笑出来，却仍命他归还牛群。回程途中，赫尔墨斯取出那把新琴。弦音一响，阿波罗忽然停步；那声音像为秩序开了一扇侧门，使所有规整的光线都愿意弯一下。",
      "“把它给我。”阿波罗说。赫尔墨斯抱紧琴：“那牛群归我。”于是交易成立。阿波罗接过里拉琴，把牧杖交给弟弟，又承认他对道路、交换、牲畜与消息的权柄。怒气没有被道歉消除，而是被一件更有趣的新事物重新安排。",
      "后来，阿波罗在宴席上弹琴，赫尔墨斯替众神传信。谁也不再提那桩盗窃案究竟如何结案。只有琴弦记得：世界上第一场完美的和解，有时并不始于认错，而始于双方终于发现，对方手里恰好有自己尚未拥有的东西。",
    ],
  },
  {
    title: "月桂",
    greek: "ΔΑΦΝΗ · DAPHNE",
    text: "达芙妮为了逃离阿波罗的追逐，请求河神将自己变成月桂。阿波罗于是把月桂视为圣树。这个故事并不只关于爱，更关于拒绝、边界与变形：即使无法改变追逐者，也仍可以改变自己存在的方式。",
    note: "月桂冠纪念光荣，也保存着一个没有被收回的“不”。",
    sourceLabel: "奥维德《变形记》第一卷",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D1%3Acard%3D452",
    fullText: [
      "故事开始于一场胜利之后。阿波罗刚射杀皮同，弓上还留着战斗的骄傲。他看见爱神厄洛斯也拿着弓，便笑那孩子的武器只是玩具。厄洛斯没有争辩。他从箭囊里取出两支箭：一支金光锋利，使被射中的人渴望靠近；一支铅灰沉重，使被射中的人只想远离。",
      "金箭进入阿波罗心口，铅箭落向河神珀涅俄斯的女儿达芙妮。于是一个人的世界忽然充满追逐，另一个人的世界只剩下出口。达芙妮原本就喜欢山林、狩猎与不被婚约安排的生活。她向父亲请求像阿耳忒弥斯一样保持自由，父亲虽然叹息，仍答应了。",
      "阿波罗在林间看见她，立刻把欲望误认成命运。他追上去，报出自己的名字、神职与荣光，仿佛光明、音乐和预言足以构成一份必须接受的邀请。达芙妮没有停步。风把她的头发吹向身后，树枝划过手臂；她不需要证明追逐者多么尊贵，只需要知道自己不愿意。",
      "“别怕，我不是敌人。”阿波罗喊。可对于正在逃跑的人，身后的脚步本身就是答案。神跑得更快，河岸在前方变窄。达芙妮听见他的呼吸逼近，只得向父亲的河流伸出双臂：“如果水仍认得我，请改变这副使我被追逐的形体。”",
      "她的脚先沉入泥土，皮肤覆上树皮，手指分成细枝，头发化作颤动的叶。阿波罗赶到时，只能抱住一株刚刚长成的月桂。他仍感觉树干深处有心跳，也感觉枝叶在触碰下退缩。那不是终于得到，而是拒绝以另一种形态完成。",
      "阿波罗宣布月桂将成为自己的圣树，让它常青，让诗人、竞技者与胜利者佩戴它的枝叶。后来人们把月桂冠看作荣耀，却很少记得第一株月桂来自一次逃离。可树记得。每当风穿过叶片，沙沙声都像一个没有被权力改写的词：不。",
    ],
  },
  {
    title: "太阳神去放牧",
    greek: "ΑΔΜΗΤΟΣ · ADMETUS",
    text: "阿波罗也曾受罚离开奥林匹斯，为凡人阿德墨托斯放牧。神明暂时放下弓与琴，照料牛群、学习人的时间。传说在他的照看下，牲畜格外兴旺——看来光明之神的职业范围一直相当灵活。",
    note: "身份再耀眼，也不妨认真完成眼前那件普通的工作。",
    sourceLabel: "欧里庇得斯《阿尔刻提斯》及阿波罗多洛斯《书库》",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0088",
    fullText: [
      "阿斯克勒庇俄斯死于宙斯的雷霆后，阿波罗把悲痛变成报复，射杀了锻造雷电的独眼巨人。宙斯没有把儿子的愤怒称作正义，只判他离开奥林匹斯，去凡人家中服役。于是某个清晨，色萨利的国王阿德墨托斯在门外看见一个陌生牧人：金发束起，弓藏在斗篷下，眼神却像正午。",
      "阿德墨托斯没有追问神的过错，也没有利用他的落难。他给他面包、住处和一群需要照看的牲畜。阿波罗便在安菲律索斯河边放牧。羊群从不空怀，母牛常产双犊；夜里，牧人靠着石头弹琴，凡人的屋瓦安静地接住神乐。那段时间里，他第一次按季节而不是神意生活。",
      "国王爱上了伊俄尔科斯的公主阿尔刻提斯。她的父亲提出近乎不可能的条件：求婚者必须让狮子与野猪同拉一辆战车。阿德墨托斯回来时沉默良久。阿波罗只问：“你待一个失去神位的人如朋友；现在，要不要让朋友替你套一次车？”第二天，两头彼此敌对的猛兽并肩踏入王宫，婚约因此成立。",
      "可婚礼不能取消死亡。命运女神为阿德墨托斯定下早逝，阿波罗设法争得一个例外：若有人自愿替他走入冥府，他便可以继续活着。国王询问年迈的父母、亲友与臣属，所有人都爱他，却没有人愿意交出自己的太阳。最后，阿尔刻提斯站出来。",
      "她死去的那天，阿波罗离开宫门，因为死亡之神正在靠近。旅途中的赫拉克勒斯后来来到此处，得知真相后追上死神，以力量夺回阿尔刻提斯。她重新站在丈夫面前时暂不能说话，像一个刚从漫长黑夜中醒来的人。阿德墨托斯终于明白，被赐予第二次生命并不等于从未付出代价。",
      "服役期满，阿波罗回到奥林匹斯。河边的羊仍在吃草，王宫仍会经历争吵、庆典和衰老。神没有把凡人的日子变得无伤，只在其中留下几次援手。也许这正是他放牧时学到的事：光明不是替谁取消黑夜，而是在黑夜到来以前，认真照看彼此。",
    ],
  },
  {
    title: "风信子",
    greek: "ΥΑΚΙΝΘΟΣ · HYACINTHUS",
    text: "阿波罗喜爱的青年雅辛托斯在掷铁饼时意外身亡。神无法逆转死亡，便让花从血落下的地方长出；花瓣上的纹路被古人读作哀叹。于是悲伤没有消失，却获得了每年重新开放的形状。",
    note: "纪念不是停留在失去里，而是让爱继续拥有可见的季节。",
    sourceLabel: "奥维德《变形记》第十卷",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0028%3Abook%3D10%3Acard%3D143",
    fullText: [
      "为了雅辛托斯，阿波罗一度离开德尔斐。神谕的烟仍从山谷升起，琴与弓却被搁在一旁。他住到没有城墙的斯巴达，跟随青年越过山脊，替他牵猎犬、收网，也允许自己的长发被树枝刮乱。光明之神暂时不必照耀世界，只照耀一个人的午后。",
      "那天阳光正处在清晨与黄昏之间。他们脱下外衣，在皮肤上抹油，比赛投掷铁饼。阿波罗先来：他旋身、放手，铁饼切开空气，升得像要进入云层，随后落向坚硬的地面。雅辛托斯为那力量欢呼，急着跑去捡回它。",
      "铁饼撞上土石，又高高弹起。阿波罗只来得及喊他的名字。沉重的圆盘击中青年的脸，他倒下时没有第二个声音。神跪在地上，用手捂住伤口，取来所有通晓的药草；可掌管医治的神也有无法医治的时刻。血从指缝间渗下去，雅辛托斯的头垂在他的肩上。",
      "“是我的手投出了它。”阿波罗说，“如果命运允许，我愿意把自己的生命放在这里。”可不死者无法用不死交换凡人的死亡。他能做的，只是拒绝让这次离别变成没有回声的空白。",
      "血落过的草地上长出一朵深色的花，花瓣仿佛写着希腊语的哀叹：AI，AI。阿波罗让琴声记住青年，让花在春天回来。斯巴达人后来每年举行雅辛提亚节；哀悼与庆典相邻，如同死亡和重新生长从来没有真正分开。",
      "阿波罗最终返回德尔斐。新的求问者在神殿外排队，没有人知道神曾经失败于一场普通的游戏。可当他拨动琴弦，音色里多了一点从前没有的阴影。永恒并没有使他免于失去；它只让他比凡人更久地携带记忆。",
    ],
  },
];

const typeCoordinates = [
  {
    system: "MBTI",
    code: "ENTP",
    note: "Ne–Ti 类型动力｜直觉感知 × 思维判断",
    definition: "MBTI 的类型动力学不把四个字母当作四项孤立特质，而关注感知与判断过程的层级和内／外倾方向。ENTP 的常用功能序列写作 Ne–Ti–Fe–Si：主导外倾直觉，辅助内倾思维，随后是情感与内倾感觉过程。",
    sections: [
      { title: "主导 · Ne", text: "外倾直觉是一种感知过程：它扫描对象之间的新联系、潜在用途与尚未实现的变化。重点是信息如何扩展，而非“爱幻想”这一表面印象。" },
      { title: "辅助 · Ti", text: "内倾思维承担判断和平衡：澄清概念、检验内部一致性、拆分前提，并让 Ne 产生的大量可能性形成可讨论的模型。" },
      { title: "层级与发展", text: "官方类型动力学将功能理解为有层级、会发展的过程；第三与第四过程较不偏好，并不等于缺失，也不能简化为固定弱点。" },
    ],
    sources: [
      { label: "Myers & Briggs Foundation · Type Dynamics", url: "https://www.myersbriggs.org/unique-features-of-myers-briggs/type-dynamics-overview/home.htm" },
    ],
    caveat: "MBTI 描述偏好与类型动力，不代表能力高低，也不用于临床诊断；功能序列是该体系内部的理论语言。",
  },
  {
    system: "ENNEAGRAM / TRITYPE®",
    code: "7w8·784",
    note: "核心 7 与 8 翼｜三中心顺序 7–8–4",
    definition: "这里包含两个不同层级：7w8 表示九型核心为 7、受相邻 8 型翼影响；784 则在 Tritype® 框架中，以头中心的 7 为核心，并依次采用腹中心 8、心中心 4 的防御与注意力策略。两者都出现“8”，但翼与中心固定点并不是同一个概念。",
    sections: [
      { title: "核心 7 与 8 翼", text: "九型研究所将 7 的基本恐惧概括为匮乏与痛苦，基本欲望是获得满足；8 翼作为邻近影响，改变表达方式，却不取代 7 的核心动机。" },
      { title: "784 的三中心", text: "784 依次调用头中心 7 的认知策略、腹中心 8 的行动与边界策略、心中心 4 的身份与意义策略；顺序表示相对优先级。" },
      { title: "Messenger 交集", text: "Fauvre 将 478／784 等排列归入 Messenger：交集主题是原创、革新、保护性与表达所学。它描述策略汇合，不等于一份行为刻板印象。" },
    ],
    sources: [
      { label: "The Enneagram Institute · Type Seven", url: "https://www.enneagraminstitute.com/type-7/" },
      { label: "Katherine Fauvre · Tritype® & 27 Archetypes", url: "https://katherine-fauvre.squarespace.com/tritype" },
    ],
    caveat: "九型关注动机与防御策略；Tritype® 是其延伸框架。两者适合自我观察，不应被当作经验心理学诊断。",
  },
  {
    system: "INSTINCT",
    code: "sp/so",
    note: "自保主导｜社交次位｜亲密本能后置",
    definition: "九型的本能层讨论三种生存驱力如何分配注意力：sp 指向安全、保障与身心福祉；so 指向他人、群体与共同体；sx 指向配偶、兴奋、亲近与一对一联结。sp/so 表示前两者依次更具自动优先级，而不是社交水平或关系能力的排名。",
    sections: [
      { title: "sp · 主导驱力", text: "当安全、资源或福祉被感知为受威胁时，自保本能更容易进入“红色警报”；它首先组织生存层面的注意力。" },
      { title: "so · 次级驱力", text: "社交本能将注意力扩展到他人、群体、归属与共同体。处于次位意味着它支持主导驱力，而不是缺席或被动。" },
      { title: "堆叠，而非标签", text: "三种本能都会在日常中运作，只是影响强度不同；后置的 sx 也不能被直接译成“缺乏亲密”或“没有激情”。" },
    ],
    sources: [
      { label: "Fauvre · Exploring Enneagram Tritype®, pp.13–14", url: "https://static1.squarespace.com/static/547fd0b2e4b002e3c080f770/t/665a7937d586e3069346a38e/1717205303722/IEA%2BJournal%2BExploring%2BTritype%2B5-31-24%2BKK%2Bwebsite.pdf" },
    ],
    caveat: "本能堆叠是九型体系内部的生存注意力模型；不同流派对三本能的命名与边界存在差异。",
  },
  {
    system: "PSYCHOSOPHY / AP",
    code: "VLEF",
    note: "1V · 2L · 3E · 4F｜意志—逻辑—情感—物理",
    definition: "心理智学及其衍生体系 Attitudinal Psyche 以四个方面及其位置描述态度结构。此处采用 AP 的 VLEF 解释：Volition（意志）第一、Logic（逻辑）第二、Expression／Emotion（表达／情感）第三、Physics（物理）第四。字母顺序表示态度位置，不表示能力排序。",
    sections: [
      { title: "1V · 意志", text: "第一位置把大量自觉能量投向方向、时间路径、身份与未来欲望；在 VLEF 描述中，个人方向与自我决定具有较高主权。" },
      { title: "2L · 逻辑", text: "第二位置较偏过程与交换：借由论证、询问和共同推演使用逻辑。VLEF 页面特别强调信息交流既可呈学术式，也可作为邀请他人进入其观念世界的媒介。" },
      { title: "3E · 4F", text: "第三情感位置对表达与评价更易警觉，第四物理位置对身体、物质和环境较少持续固守。它们描述态度的敏感度与投入方式，不是“情商低”或“不顾身体”。" },
    ],
    sources: [
      { label: "Attitudinal Psyche · Theory & Four Aspects", url: "https://www.attitudinalpsyche.com/theory/" },
      { label: "Attitudinal Psyche · VLEF Profile", url: "https://www.attitudinalpsyche.com/personality-profiles/vlef/" },
    ],
    caveat: "心理智学与 Attitudinal Psyche 是相近但并非完全相同的流派；这里明确采用 AP 定义。该框架不用于临床评估。",
  },
];

const constellations = [
  { index: "01", title: "发疯", note: "不是失控，是精神世界的超频模式。", symbol: "↗" },
  { index: "02", title: "类型学", note: "观察、拆解、乱炖：人类说明书真好玩。", symbol: "⌁" },
  { index: "03", title: "Ne 夯爆", note: "从一个点出发，同时撞向一百种可能。", symbol: "✳" },
  { index: "04", title: "神话", note: "古老故事不是过去，是反复重启的精神原型。", symbol: "☼" },
];

export default function Home() {
  const [oracleIndex, setOracleIndex] = useState(0);
  const [oracleOpen, setOracleOpen] = useState(false);
  const [oracleCount, setOracleCount] = useState(0);
  const [activeTheory, setActiveTheory] = useState<(typeof typeCoordinates)[number] | null>(null);
  const [apolloStoryIndex, setApolloStoryIndex] = useState(0);
  const [apolloStoryOpen, setApolloStoryOpen] = useState(false);
  const [apolloStoryExpanded, setApolloStoryExpanded] = useState(false);

  const isSeventhSeal = oracleCount > 0 && oracleCount % 7 === 0;
  const currentOracle = isSeventhSeal ? seventhSeal : oracles[oracleIndex];

  useEffect(() => {
    if (!activeTheory && !apolloStoryOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTheory(null);
        setApolloStoryOpen(false);
        setApolloStoryExpanded(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeTheory, apolloStoryOpen]);

  const summonOracle = () => {
    setOracleIndex((current) => {
      const next = Math.floor(Math.random() * oracles.length);
      return next === current ? (next + 1) % oracles.length : next;
    });
    setOracleCount((count) => count + 1);
    setOracleOpen(true);
  };

  const revealApolloStory = () => {
    setApolloStoryIndex((current) => {
      const next = Math.floor(Math.random() * apolloStories.length);
      return next === current ? (next + 1) % apolloStories.length : next;
    });
    setApolloStoryExpanded(false);
    setApolloStoryOpen(true);
  };

  return (
    <main>
      <nav className="site-nav" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="回到首页">
          神人<span>cm</span>
        </a>
        <div className="nav-status" aria-label="当前状态">
          <span className="status-dot" aria-hidden="true" />
          ONLINE &amp; UNHINGED
        </div>
        <div className="nav-links">
          <a href="#about">关于本体</a>
          <a href="#myth">精神宇宙</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">HELLO, WORLD — 欢迎误入我的脑内现场</p>
          <h1>
            MY NAME IS
            <span className="name-line">
              神人<em>cm</em><i>!</i>
            </span>
          </h1>
          <p className="hero-intro">
            我喜欢<span>发疯</span>，哈哈哈哈。
            <br />
            <strong>Ne 夯爆了</strong>，神话也太好看了。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#about">
              进入精神宇宙 <span aria-hidden="true">↘</span>
            </a>
            <span className="tiny-note">CAUTION: IDEAS MAY MULTIPLY</span>
          </div>
        </div>

        <div className="oracle-card" aria-label="神人 cm 的脑内信号接收器">
          <span className="corner corner-one" aria-hidden="true">⌜</span>
          <span className="corner corner-two" aria-hidden="true">⌟</span>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="oracle-eye" aria-hidden="true">
            <span />
          </div>
          <p>BRAIN SIGNAL</p>
          <strong>NE / ∞</strong>
          <small>RECEIVING ALL POSSIBILITIES</small>
          <span className="spark spark-one" aria-hidden="true">✦</span>
          <span className="spark spark-two" aria-hidden="true">✶</span>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO GO FERAL</span>
          <i>↓</i>
        </div>
      </section>

      <div className="ticker" aria-label="个人关键词">
        <div className="ticker-track">
          <span>发疯是一种高效表达</span><i>✦</i>
          <span>NE DOMINATION</span><i>✦</i>
          <span>类型学民间研究员</span><i>✦</i>
          <span>MYTHOLOGY ENJOYER</span><i>✦</i>
          <span aria-hidden="true">发疯是一种高效表达</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">NE DOMINATION</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">类型学民间研究员</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">MYTHOLOGY ENJOYER</span><i aria-hidden="true">✦</i>
        </div>
      </div>

      <section className="about-section" id="about">
        <header className="section-heading">
          <div>
            <span className="section-number">01 / ABOUT THE ENTITY</span>
            <h2>本体<br />观测报告</h2>
          </div>
          <p>
            偏好、动机、注意力与态度结构，<br />
            四套体系描述四种不同维度。
          </p>
        </header>

        <div className="type-profile" aria-label="神人 cm 的类型学坐标">
          <div className="type-profile-head">
            <span>TYPE COORDINATES / VERIFIED</span>
            <p>并置观察，不作相互换算。</p>
          </div>
          <div className="type-grid">
            {typeCoordinates.map((item) => (
              <button
                className="type-code"
                key={item.system}
                type="button"
                onClick={() => setActiveTheory(item)}
                aria-haspopup="dialog"
              >
                <span className="type-system">{item.system}</span>
                <strong>{item.code}</strong>
                <p>{item.note}</p>
                <span className="type-read">展开理论介绍 <b aria-hidden="true">↗</b></span>
              </button>
            ))}
          </div>
        </div>

        <div className="constellation-grid">
          {constellations.map((item) => (
            <article className="trait-card" key={item.index}>
              <div className="trait-topline">
                <span>{item.index}</span>
                <b aria-hidden="true">{item.symbol}</b>
              </div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="myth-section" id="myth">
        <div className="myth-copy">
          <span className="section-number">02 / CURRENT OBSESSION</span>
          <p className="myth-kicker">最近正在被</p>
          <h2>
            神话
            <span>狠狠</span>
            击中
          </h2>
          <p className="myth-description">
            英雄、怪物、诸神与命运——看似离谱，实则精准。每一个古老母题，
            都像人类给自己的灵魂写下的一封匿名信。
          </p>
        </div>

        <a className="myth-poster" href={siteBasePath ? `${siteBasePath}/myths.html` : "/myths"} aria-label="进入神话体系索引">
          <span className="poster-label">ARCHIVE No. 000∞</span>
          <span className="myth-entry-cue">ENTER ARCHIVE <b aria-hidden="true">↗</b></span>
          <div className="sun-symbol" aria-hidden="true">
            <span>✦</span>
          </div>
          <div className="poster-words" aria-hidden="true">
            <span>FATE</span>
            <span>METAMORPHOSIS</span>
            <span>CHAOS</span>
          </div>
          <p>古老故事<br />持续发生中</p>
        </a>
      </section>

      <section className="oracle-section">
        <div className="delphi-word" aria-hidden="true">ΔΕΛΦΟΙ</div>
        <div className="apollo-seal" aria-hidden="true">
          <span className="apollo-rays" />
          <span className="apollo-sun">☼</span>
          <i>APOLLO</i>
        </div>

        <div className="oracle-heading">
          <div className="oracle-heading-copy">
            <span className="section-number">03 / THE ORACLE OF DELPHI</span>
            <p className="greek-motto">ΓΝΩΘΙ ΣΕΑΥΤΟΝ · KNOW THYSELF</p>
            <h2>向皮提亚<br />献上问题</h2>
            <p className="oracle-lead">
              净手，折月桂。让问题在心中保持完整。<br />
              当泉水静止，神殿才开始说话。
            </p>
          </div>

          <button
            className="apollo-portrait-panel"
            type="button"
            onClick={revealApolloStory}
            aria-label="阿波罗画像"
            aria-haspopup="dialog"
          >
            <img
              src={`${siteBasePath}/apollo-portrait.png`}
              alt="简笔色块风格的阿波罗月桂冠侧像"
            />
            <span className="apollo-portrait-caption">
              <b>ΑΠΟΛΛΩΝ</b>
              <small>光明 · 诗歌 · 预言</small>
            </span>
          </button>
        </div>

        <div className="oracle-ritual">
          <div className="temple-pediment" aria-hidden="true">
            <span>☙</span><b>ΜΗΔΕΝ ΑΓΑΝ · NOTHING IN EXCESS</b><span>❧</span>
          </div>
          <div className="oracle-chamber">
            <div className={`oracle-result ${oracleOpen ? "is-open" : ""} ${isSeventhSeal ? "is-secret" : ""}`} aria-live="polite">
              <span className="prophecy-label">
                {oracleOpen ? currentOracle.voice : "PYTHIA · ORACLE CHAMBER"}
              </span>
              <span className="laurel" aria-hidden="true">☙</span>
              <span className="oracle-form">
                {oracleOpen ? currentOracle.form : "静心 · 提问 · 聆听"}
              </span>
              <p>{oracleOpen ? currentOracle.text : "请在心中完整地说出问题，然后请示神意。"}</p>
              <small>{oracleOpen ? currentOracle.signature : "— 卡斯塔利亚泉边的安静片刻"}</small>
            </div>
            <div className="sanctum-foot" aria-hidden="true">
              <span>CASTALIA</span><i>☼</i><span>DELPHI</span>
            </div>
          </div>
          <button type="button" className="oracle-button" onClick={summonOracle}>
            <span>{oracleOpen ? "再次请示" : "请示神意"}</span>
            <b aria-hidden="true">☼</b>
          </button>
        </div>
      </section>

      <footer>
        <div className="footer-mark">神人<span>cm</span></div>
        <p>
          保持好奇，允许跑题，<br />
          随时准备被下一个想法击中。
        </p>
        <div className="footer-meta">
          <span>MADE WITH 100% NE ENERGY</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      {activeTheory && (
        <div className="theory-overlay">
          <section
            className="theory-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="theory-title"
          >
            <button
              className="theory-close"
              type="button"
              onClick={() => setActiveTheory(null)}
              aria-label="关闭理论介绍"
            >
              CLOSE <span aria-hidden="true">×</span>
            </button>

            <header className="theory-header">
              <div>
                <span>{activeTheory.system} / THEORY NOTE</span>
                <h2 id="theory-title">{activeTheory.code}</h2>
              </div>
              <p>{activeTheory.note}</p>
            </header>

            <p className="theory-definition">{activeTheory.definition}</p>

            <div className="theory-sections">
              {activeTheory.sections.map((section, index) => (
                <article key={section.title}>
                  <span>0{index + 1}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>

            <div className="theory-sources">
              <span>THEORY SOURCES</span>
              <div>
                {activeTheory.sources.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <footer className="theory-caveat">
              <span>FRAMEWORK NOTE</span>
              <p>{activeTheory.caveat}</p>
            </footer>
          </section>
        </div>
      )}

      {apolloStoryOpen && (
        <div className="apollo-story-overlay">
          <article
            className={`apollo-story-dialog ${apolloStoryExpanded ? "is-expanded" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="apollo-story-title"
          >
            <button
              className="apollo-story-close"
              type="button"
              onClick={() => {
                setApolloStoryOpen(false);
                setApolloStoryExpanded(false);
              }}
              aria-label="关闭阿波罗故事"
            >
              ×
            </button>
            <span className="apollo-story-sun" aria-hidden="true">☼</span>
            <header>
              <span>APOLLO ARCHIVE · 0{apolloStoryIndex + 1}</span>
              <h2 id="apollo-story-title">{apolloStories[apolloStoryIndex].title}</h2>
              <p>{apolloStories[apolloStoryIndex].greek}</p>
            </header>
            {apolloStoryExpanded ? (
              <div className="apollo-story-full">
                <div className="apollo-story-full-label">
                  <span>THE FULL ACCOUNT</span>
                  <i aria-hidden="true">☙</i>
                </div>
                {apolloStories[apolloStoryIndex].fullText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="apollo-story-source">
                  叙事底本：
                  <a href={apolloStories[apolloStoryIndex].sourceUrl} target="_blank" rel="noreferrer">
                    {apolloStories[apolloStoryIndex].sourceLabel} <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>
            ) : (
              <p className="apollo-story-text">{apolloStories[apolloStoryIndex].text}</p>
            )}
            <div className="apollo-story-foot">
              <p>{apolloStories[apolloStoryIndex].note}</p>
              <div className="apollo-story-actions">
                <button type="button" onClick={() => setApolloStoryExpanded((expanded) => !expanded)}>
                  {apolloStoryExpanded ? "BACK" : "KNOW MORE"} <span aria-hidden="true">↗</span>
                </button>
                <button type="button" onClick={revealApolloStory}>
                  下一则 <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
