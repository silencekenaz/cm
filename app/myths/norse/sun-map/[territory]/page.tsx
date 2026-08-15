import type { Metadata } from "next";
import GodRealmArchive from "./GodRealmArchive";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";
const mapHref = `${siteBasePath}/myths/norse/sun-map${staticPageSuffix}`;
const territoryHref = (slug: string) => `${siteBasePath}/myths/norse/sun-map/${slug}${staticPageSuffix}`;

const territories = [
  { slug: "suancai", number: "01", name: "酸菜国", code: "SUANCAI" },
  { slug: "weiguo", number: "02", name: "伪国", code: "MIMIC" },
  { slug: "manyi", number: "03", name: "蛮夷国", code: "BORDER" },
  { slug: "god-realm", number: "04", name: "神之境", code: "ABOVE" },
  { slug: "earth", number: "∞", name: "很远的地球", code: "VERY FAR" },
  { slug: "happy-world", number: "☆", name: "欢乐世界", code: "HAPPY WORLD" },
  { slug: "border-tavern", number: "↔", name: "交界小酒馆", code: "BORDER TAVERN" },
] as const;

export const dynamic = "force-static";
export function generateStaticParams() { return territories.map(({ slug }) => ({ territory: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ territory: string }> }): Promise<Metadata> {
  const { territory: slug } = await params;
  const territory = territories.find((item) => item.slug === slug);
  return { title: territory ? `${territory.name}｜屑球地图` : "屑球地图" };
}

function ArchiveNav({ number }: { number: string }) {
  return <nav><a href={mapHref}>← 返回屑球地图</a><span>TERRITORY FILE / {number}</span></nav>;
}

function SuancaiPage() {
  return <main className="suancai-country-page">
    <ArchiveNav number="01" />
    <header className="suancai-country-hero">
      <span>SUANCAI / ROYAL ARCHIVE</span>
      <div className="suancai-country-seal" aria-hidden="true"><b>酸</b><i>01</i></div>
      <h1>酸菜国</h1>
      <p>酸菜国的政务效率高得近乎可疑：女王拍板，丞相执行，通常一顿饭前就能把边境、财政和闯门的伪人一起处理完。唯一无法写进流程的是公主和小红毛——前者会认真相信恶作剧，后者会更认真地策划下一场。</p>
    </header>

    <section className="suancai-origin-note">
      <span>THE CROWN IS NOT A FAMILY TREE</span>
      <div><h2>王座不是<br />一张家谱。</h2><p>酸菜女王和酸菜公主不是母女，公主只比女王小一岁。当年女王派黄焖鸡丞相外出巡逻，丞相按计划带回了边境报告，顺便捡回一个孩子。女王看了看报告，又看了看孩子，最后两样都签收了：王宫从此多了一位公主，户籍部门从此少睡一点。</p></div>
    </section>

    <section className="suancai-cast">
      <header><span>COURT / 03</span><h2>两位行动派，<br />和一位傻白甜</h2><p>女王决定今天该做什么，丞相确保今天一定做完，公主则负责问一句：“他们看起来很友善，真的会打我们吗？”</p></header>
      <div>
        <article><small>01 / THE QUEEN</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/suancai-queen-transparent-v1.png`} alt="透明底黑白线条画：戴左眼单片镜、扎着高小辫，飒爽而秀美的酸菜女王" /></figure><h3>酸菜女王</h3><h4>先拍板，后解释</h4><p>她说“处理一下”，通常意味着事情已经处理完了。别人还在讨论要不要开会，她已经宣布散会；敌人若想发表战前宣言，最好控制在三十秒内，因为女王的耐心和边境预算一样按季度结算。</p></article>
        <article><small>02 / THE PRINCESS</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/suancai-princess-transparent-v1.png`} alt="透明底黑白线条画：长发、笑容天真的酸菜公主" /></figure><h3>酸菜公主</h3><h4>对世界抱有过量善意</h4><p>她傻白甜得十分真诚。敌军只要说一句“我们没有恶意”，她就会先点头，再被女王从城门口拎回来。她并不缺勇气，只是常把阴谋理解成惊喜，把埋伏理解成大家想一起玩。</p></article>
        <article><small>03 / THE CHANCELLOR</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/huangmenji-chancellor-transparent-v1.png`} alt="透明底黑白线条画：戴眼镜、梳低马尾且神情严肃的黄焖鸡女丞相" /></figure><h3>黄焖鸡丞相</h3><h4>女丞相 · 绝不拖延</h4><p>她的巡逻路线直、报告结论直、拒绝爱情时说话更直。她崇拜阿耳忒弥斯女神，相信月光、弓箭和按时交报告都比恋爱可靠；人生唯一一次偏离路线，就是出门巡逻时顺手捡回了公主。</p></article>
      </div>
    </section>

    <section className="suancai-mascots">
      <header><span>MASCOT FILES / 02</span><h2>一个负责演，<br />一个负责闹。</h2></header>
      <div>
        <article><span>QUEEN&apos;S MASCOT</span><figure className="suancai-mascot-portrait suancai-xiaoshasha-portrait"><img src={`${siteBasePath}/xiaoshasha-simple-transparent-v1.png`} alt="小沙沙低头侧望的简笔线稿肖像，半扎长发并戴着细圆框眼镜" /></figure><h3>小沙沙</h3><p>他是酸菜女王的吉祥物，也是王宫最难统计的战力。小沙沙演什么像什么：使者、证人、路过群众，必要时甚至能演成“今天绝对没有发生任何事”。档案员每次以为摸清了他的能力，第二天都会发现那只是第一幕。</p><strong>专长 / 演技、能力很多，以及拒绝剧透</strong></article>
        <article><span>PRINCESS&apos;S MASCOT · NAME WITHHELD</span><figure className="suancai-mascot-portrait"><img src={`${siteBasePath}/kenaz-doodle-light.png`} alt="小红毛用亮色线条画下的滑稽自画像，耳后低低扎着一小撮头发" /></figure><h3>小红毛</h3><p>“小红毛”只是公主替他取的外号。他传说来自神之境，本人拒绝对外公开真名，只允许档案写一个像火炬的 ᚲ。此男靠智谋生活，靠恶作剧保持精神健康；有时帮酸菜国解决危机，有时就是危机本人。</p><strong>真名 / 本人拒绝回答<br />专长 / 启动、搞事，以及给自己制造的麻烦收尾</strong></article>
      </div>
    </section>

    <section className="suancai-tavern-callout">
      <span>NEUTRAL-ish STOP / ↔</span><div><h2>边界线上，<br />有人还在卖吃的。</h2><p>酸菜国与伪国之间有一间小酒馆。两国为边界吵了很久，宝井小姐只问了一句“还点不点菜”，于是争端暂时休庭。国界究竟穿过门口、柜台还是某张桌子仍无定论，饭倒是已经上了。</p><a href={territoryHref("border-tavern")}>前往交界小酒馆 ↗</a></div>
    </section>
    <footer><a href={mapHref}>← 返回屑球地图</a><span>SUANCAI FILE / OPEN</span></footer>
  </main>;
}

function InvertedPentagram({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
    <path d="M50 95 23.5 13.6 92.8 63.9 7.2 63.9 76.5 13.6 50 95Z" />
  </svg>;
}

function WeiguoPage() {
  return <main className="weiguo-country-page">
    <ArchiveNav number="02" />
    <header className="weiguo-country-hero">
      <div className="weiguo-sigil-orbit" aria-hidden="true"><InvertedPentagram /><i /><i /><i /></div>
      <span>MIMIC / PUBLIC RECORD</span>
      <h1><span>伪</span>国</h1>
      <p>伪国被外宾评为屑球上最和谐、最文明的国家。街上人人衣冠整齐，见面微笑，说话轻声——因为所有伪人都在努力扮演人类。礼貌通常能维持到第一个人忘记眨眼，或者第二个人问出那句：“你瞅啥？”</p>
      <div className="weiguo-hero-index"><b>02</b><span>POLITE / MIMIC / FIGHT</span></div>
    </header>

    <section className="weiguo-two-files">
      <header><span>ONE THRONE / TWO NAMES</span><h2><b>传说写着昀昀。</b><br /><b>真相写着晚霞。</b></h2><p>伪国的档案没有撒谎，只是把真话放在最后一页。更重要的是，昀昀与晚霞是少数真身也很好看的伪人——这项事实令全国其余人口一致要求继续封存档案。</p></header>
      <div>
        <article className="weiguo-yunyun-file">
          <small>PUBLIC FILE / 伪神传说</small>
          <span aria-hidden="true">01</span>
          <figure className="weiguo-person-portrait weiguo-yunyun-portrait">
            <img src={`${siteBasePath}/weiguo-yunyun-transparent-v1.png`} alt="短发、戴方框眼镜的昀昀线条胸像" />
          </figure>
          <h3>昀昀</h3>
          <h4>传说中的伪神</h4>
          <p>人人都听说伪神名叫昀昀。她的智商很 <b>good</b>，这在伪国是极其显眼的优点：当别人准备直接开打时，她至少会先问清楚要打谁。武力同样不弱，只是与晚霞相比，仍要稍逊一筹。</p>
          <strong>判断力 / 很 good<br />开打前思考 / 会<br />武力 / 略低于晚霞</strong>
        </article>
        <article className="weiguo-wanxia-file">
          <small>SEALED FILE / 真实更正</small>
          <InvertedPentagram className="weiguo-card-sigil" />
          <figure className="weiguo-person-portrait weiguo-wanxia-portrait">
            <img src={`${siteBasePath}/weiguo-wanxia-transparent-v1.png`} alt="高马尾、神情奶凶的晚霞线条胸像" />
          </figure>
          <h3>晚霞</h3>
          <h4>真正的伪神</h4>
          <p>被藏起来的答案是晚霞。她的武力值极高，智识也高于普通伪人，因此通常不必参与伪国漫长的互殴流程：她看一眼，流程就可以结束。晚霞还是酸菜公主的好友，两国最危险与最天真的名字有时会坐在一张桌前聊天。</p>
          <strong>武力 / 极高<br />智识 / 高于普通伪人<br />关系 / 酸菜公主的好友</strong>
        </article>
      </div>
    </section>

    <section className="weiguo-mimic-field">
      <div className="weiguo-mimic-echo" aria-hidden="true"><i>人</i><i>伪</i><i>人</i><i>伪</i></div>
      <header><span>SPECIES NOTE / MIMICS</span><h2>全国都很文明。<br /><em>至少还没动手时。</em></h2></header>
      <div className="weiguo-traits">
        <article><small>01 / CIVILIZATION</small><h3>表面和谐</h3><p>为了像人，伪人认真学习握手、让路、排队和微笑，于是意外建成了屑球上表面最文明的国家。至于人皮下面的真身，大多不宜在饭前公开；昀昀和晚霞是罕见例外。</p></article>
        <article><small>02 / BRAINS</small><h3>智力节约</h3><p>大部分伪人把脑力用在维持人设上，剩下的一点只够判断“是不是他先瞪我”。复杂争议很少需要辩论，因为大家通常还没理解问题，就已经同意用拳头简化题目。</p></article>
        <article><small>03 / COMBAT</small><h3>撕脸即开打</h3><p>伪人的武力普遍很高，脾气也很配套。只要有人拆穿伪装、踩到尾巴，或者单纯把礼貌用完，和谐社会便会当场休息；打完以后，双方整理衣领，重新互道您好。</p></article>
      </div>
    </section>

    <section className="weiguo-goose-file">
      <span>COMPANION FILE / GOOSE</span>
      <figure className="weiguo-goose-portrait">
        <img src={`${siteBasePath}/weiguo-goose-transparent-v1.png`} alt="昂着头、佩戴倒五芒星项圈的大鹅线条画" />
      </figure>
      <div><h2>大鹅</h2><h3>全境唯一懒得伪装的居民</h3><p>伪神的宠物直接叫大鹅。全国都忙着扮演人类，只有它坦然做鹅，昂着头巡视街道，对任何可疑人物实施注视、逼近和啄。奇怪的是，它反而成了伪国最容易理解的公民。</p><strong>人类伪装 / 拒绝<br />执法方式 / 注视、逼近，以及啄<br />文明程度 / 视心情而定</strong></div>
    </section>

    <section className="weiguo-emblem-file">
      <div><span>STATE EMBLEM / INVERTED PENTAGRAM</span><h2>一颗向下的星，<br />提醒大家继续装。</h2><p>倒置五芒星是伪神的标志。它出现在封存档案、边境记号和刚修好的公共设施上，象征伪国的共同理想：无论真身长成什么样，出门以前请先把人类外表穿好。</p></div>
      <InvertedPentagram className="weiguo-emblem-star" />
    </section>

    <footer><a href={mapHref}>← 返回屑球地图</a><a href={territoryHref("border-tavern")}>前往交界小酒馆 ↗</a></footer>
  </main>;
}

function GodRealmPage() {
  return <main className="godrealm-country-page">
    <ArchiveNav number="04" />
    <GodRealmArchive suancaiHref={territoryHref("suancai")} conflictHref={`${siteBasePath}/myths/egyptian/horus-seth${staticPageSuffix}`} />

    <section className="godrealm-chaos-note">
      <span>ORDER REPORT / NOT FOUND</span><div><h2>真是混乱的<br />地方啊！</h2><p>有人寻兄弟，有人寻美女，有人忙着拯救人类，有人抱着植物哭，还有两位把王位之争吵出了粉红色。神之境今日照常运转——这里所谓的秩序，大概就是所有混乱都能准时发生。</p></div>
    </section>
    <footer><a href={mapHref}>← 返回屑球地图</a><span>GOD REALM / EVERYONE IS FINE*</span></footer>
  </main>;
}

function ManyiPage() {
  return <main className="manyi-country-page">
    <ArchiveNav number="03" />
    <header className="manyi-country-hero">
      <div className="manyi-hero-balls" aria-hidden="true"><i>8</i><i>3</i><i>?</i></div>
      <span>MANYI / DISORDER REGISTER</span>
      <h1><em>蛮</em>夷国</h1>
      <p>这里的子民不是龟，就是蛆。有人伏案做题，有人趴在台球桌边瞄准，还有人刚写完半张卷子便宣布起义——三件事时常在同一间屋里发生。</p>
      <div className="manyi-hero-index"><b>03</b><span>TURTLES / MAGGOTS / REVOLT</span></div>
    </header>

    <section className="manyi-king-file">
      <span>THRONE FILE / THE PROBLEM SET</span>
      <figure><img src={`${siteBasePath}/manyi-king-transparent-v2.png`} alt="戴着歪眼镜、同时握着两支笔做题的丑萌蛮夷龟王" /></figure>
      <div><h2>蛮夷国王<br />沉迷做题。</h2><p>国王醒来做题，开会时做题，听见殿外传来起义的脚步声，先把当前小问写完再说。他的王冠很小，题册却堆得像城墙；大臣递来的军报若背面空白，也会立刻获得一道辅助线。</p><p>这份执念意外成了国家最后的秩序。战乱每次闹到王宫门口，国王便抬起头，用做题时练出的拆解、排除与反证手法，把叛军的计划逐项算错、逐层击破。等他重新低头，起义已经被镇压，只剩下一张卷子还没写完。</p><strong>统治方式 / 审题、列式、镇压<br />停笔条件 / 暂未发现</strong></div>
    </section>

    <section className="manyi-citizen-file">
      <header><span>POPULATION / TURTLES &amp; MAGGOTS</span><h2>做题，台球，<br />以及随时起义。</h2><p>龟与蛆构成了蛮夷国全部人口。物种不同，爱好倒很统一；因此任何安静的下午，都可能在一声球响后变成临时革命。</p></header>
      <figure><img src={`${siteBasePath}/manyi-citizens-transparent-v1.png`} alt="龟与蛆一边打台球、做题，一边举起破布旗起义的混乱线条画" /></figure>
      <div className="manyi-habits">
        <article><small>01 / BILLIARDS</small><h3>打台球</h3><p>球桌是娱乐设施、会议现场，也是争论谁先开球时最容易爆发冲突的地方。</p></article>
        <article><small>02 / PROBLEMS</small><h3>做题</h3><p>从王宫到街口，到处都有人埋头计算。答不出来不丢脸，承认不会才比较危险。</p></article>
        <article><small>03 / REVOLT</small><h3>起义</h3><p>起义通常没有统一口号，也没有统一时间；参与者甚至可能先打一局，再决定推翻谁。</p></article>
      </div>
    </section>

    <section className="manyi-disorder-note">
      <span>PUBLIC ORDER / UNSTABLE</span><div><h2>国家一片混乱。<br />但题目有标准答案。</h2><p>蛮夷国的战乱从不缺少热情，只缺少计划。所幸国王做题手法过于高明：他把战场当成一道条件冗余的大题，把每支队伍当成未知数，算着算着，就把所有人重新送回了座位。</p></div>
    </section>

    <section className="manyi-sun-son-file">
      <div><span>FALLEN SUN / DESCENDANT</span><h2>堕日之子</h2><h3>住在蛮夷国的台球爱好者</h3><p>传说堕落的太阳有一个儿子，后来住进蛮夷国。他喜欢台球，也喜欢在任何证据面前先说一句“我不信”。若局势继续不利，他便会迅速红温：脸上虽然看不出颜色，头顶的热气却足以替他完成说明。</p><p>没有人知道他为何离太阳那么远。蛮夷国只知道，他来之后，球桌旁多了一位永远要求重赛的选手。</p><strong>常用语 / 我不信<br />升温速度 / 极快<br />主要爱好 / 台球与要求重赛</strong></div>
      <figure><img src={`${siteBasePath}/fallen-sun-son-transparent-v2.png`} alt="背着龟壳、抱着台球杆，头顶破损太阳环且正在红温的丑萌堕日之子" /></figure>
    </section>

    <footer><a href={mapHref}>← 返回屑球地图</a><span>MANYI FILE / STILL REVOLTING</span></footer>
  </main>;
}

function BorderTavernPage() {
  return <main className="border-tavern-page">
    <ArchiveNav number="↔" />
    <header><span>BORDER TAVERN / BETWEEN TWO LINES</span><h1>交界<br /><b>小酒馆</b></h1><p>它卡在酸菜国与伪国之间。两边的国界线都声称酒馆属于自己，宝井小姐则只关心来客有没有排队。</p></header>
    <section><span>MISS BAOJING / COUNTER</span><div><h2>宝井小姐<br />在这里卖吃的。</h2><p>谁从哪一边来都可以进门。酒馆不替任何一国宣布胜利，也不负责解释路牌为什么一夜之间换了方向；它只在饭点开火，并努力让边境争端不要占用所有桌子。</p><p>菜单、客人和酒馆里发生过的事，留待下一次展开。</p></div></section>
    <footer><a href={territoryHref("suancai")}>← 回酸菜国</a><a href={mapHref}>返回屑球地图 ↑</a></footer>
  </main>;
}

export default async function Page({ params }: { params: Promise<{ territory: string }> }) {
  const { territory: slug } = await params;
  const territory = territories.find((item) => item.slug === slug);
  if (!territory) return null;
  if (slug === "suancai") return <SuancaiPage />;
  if (slug === "weiguo") return <WeiguoPage />;
  if (slug === "manyi") return <ManyiPage />;
  if (slug === "god-realm") return <GodRealmPage />;
  if (slug === "border-tavern") return <BorderTavernPage />;
  return <main className={`scrap-territory-page scrap-territory-${territory.slug}`}>
    <ArchiveNav number={territory.number} />
    <header><span>{territory.code} / ARCHIVE PENDING</span><h1>{territory.name}</h1><p>详细档案尚未展开。</p></header>
  </main>;
}
