import type { Metadata } from "next";

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
      <p>太阳虽然堕落，王国仍照常开会。酸菜女王、酸菜公主与黄焖鸡丞相守着这片土地，也负责在伪人与蛮夷来敲门时，把门重新关上。</p>
    </header>

    <section className="suancai-origin-note">
      <span>THE CROWN IS NOT A FAMILY TREE</span>
      <div><h2>王座不是<br />一张家谱。</h2><p>酸菜女王和酸菜公主不是母女。公主只比女王小一岁，是女王派黄焖鸡丞相外出巡逻时捡到的孩子。丞相把孩子带回国，从此王宫多了一位公主，也多了一段每逢正式场合都必须重新解释的关系。</p></div>
    </section>

    <section className="suancai-cast">
      <header><span>COURT / 03</span><h2>王国的主要成员</h2><p>三个人，各自负责一部分秩序；凑在一起时，通常还能额外制造一点秩序之外的东西。</p></header>
      <div>
        <article><small>01 / THE QUEEN</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/suancai-queen-transparent-v1.png`} alt="透明底黑白线条画：戴左眼单片镜、扎着高小辫，飒爽而秀美的酸菜女王" /></figure><h3>酸菜女王</h3><h4>王国的决策者</h4><p>与公主并肩对抗伪人与蛮夷。她负责拍板、守住国土，以及在所有人都有第二套计划时，决定究竟执行哪一套。</p></article>
        <article><small>02 / THE PRINCESS</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/suancai-princess-transparent-v1.png`} alt="透明底黑白线条画：长发、笑容天真的酸菜公主" /></figure><h3>酸菜公主</h3><h4>被巡逻队带回的公主</h4><p>只比女王小一岁，不是女王的女儿。她与女王共同守国，也必须时常处理自己那位阵营不太稳定的吉祥物。</p></article>
        <article><small>03 / THE CHANCELLOR</small><figure className="suancai-cast-portrait"><img src={`${siteBasePath}/huangmenji-chancellor-transparent-v1.png`} alt="透明底黑白线条画：戴眼镜、梳低马尾且神情严肃的黄焖鸡女丞相" /></figure><h3>黄焖鸡丞相</h3><h4>女丞相 · 巡逻者</h4><p>她在巡逻途中捡到了后来的酸菜公主。她崇拜阿耳忒弥斯女神，厌恶爱情；在她看来，月光、弓箭和按时交报告都比恋爱可靠。</p></article>
      </div>
    </section>

    <section className="suancai-mascots">
      <header><span>MASCOT FILES / 02</span><h2>两位吉祥物，<br />两种麻烦。</h2></header>
      <div>
        <article><span>QUEEN&apos;S MASCOT</span><div className="suancai-no-portrait" aria-label="小沙沙拒绝出镜"><b>肖像缺席</b><small>TOO HANDSOME TO ARCHIVE</small></div><h3>小沙沙</h3><p>他是酸菜女王的吉祥物。小沙沙演技极好，能力也远不止一项：当档案员试图列出完整清单时，他通常已经换了一个身份、一个表情，并让在场所有人开始怀疑刚才看见的版本。</p><strong>专长 / 演技与尚未登记完的能力</strong></article>
        <article><span>PRINCESS&apos;S MASCOT · KENAZ?</span><figure className="suancai-mascot-portrait"><img src={`${siteBasePath}/kenaz-doodle-light.png`} alt="小红毛用亮色线条画下的滑稽自画像，耳后低低扎着一小撮头发" /></figure><h3>小红毛</h3><p>他传说来自神之境，喜欢恶搞，纯靠脑力制定计划。小红毛没有稳定阵营：有时替酸菜国解围，有时顺手把酸菜国也坑进去；他坚持这不叫背叛，只叫“给方案增加压力测试”。</p><strong>专长 / 智谋、恶作剧与立场漂移</strong></article>
      </div>
    </section>

    <section className="suancai-tavern-callout">
      <span>NEUTRAL-ish STOP / ↔</span><div><h2>边界线上，<br />有人还在卖吃的。</h2><p>酸菜国与伪国之间有一间小酒馆。宝井小姐在那里卖吃的，至于国界究竟穿过门口、柜台还是某张桌子，地图员至今没有统一意见。</p><a href={territoryHref("border-tavern")}>前往交界小酒馆 ↗</a></div>
    </section>
    <footer><a href={mapHref}>← 返回屑球地图</a><span>SUANCAI FILE / OPEN</span></footer>
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
  if (slug === "border-tavern") return <BorderTavernPage />;
  return <main className={`scrap-territory-page scrap-territory-${territory.slug}`}>
    <ArchiveNav number={territory.number} />
    <header><span>{territory.code} / ARCHIVE PENDING</span><h1>{territory.name}</h1><p>详细档案尚未展开。</p></header>
  </main>;
}
