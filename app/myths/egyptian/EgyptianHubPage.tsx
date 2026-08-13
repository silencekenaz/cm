const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stories = [
  {
    index: "01",
    slug: "solar-journey",
    eyebrow: "COSMIC CYCLE / DAY → DUAT → DAWN",
    title: "拉的旅程",
    subtitle: "太阳为何必须每天重新升起",
    body: "沿太阳船进入十二夜时：玛特如何被持续维持，阿波菲斯如何使航程停滞，拉又如何在杜亚特深处与欧西里斯的再生领域接近。",
    image: "egypt-god-ra.webp",
    alt: "鹰隼头、佩戴日轮的拉",
    mark: "☀",
  },
  {
    index: "02",
    slug: "horus-seth",
    eyebrow: "SUCCESSION CASE / CLAIM → TRIAL → VERDICT",
    title: "荷鲁斯与塞特之争",
    subtitle: "谁有资格继承欧西里斯的王位",
    body: "进入九神法庭与漫长的继承权争讼：伊西斯的介入、变形与竞赛、身体和言语的证据，以及神明社会如何将冲突转化为王权裁决。",
    image: "egypt-god-seth.webp",
    alt: "持矛、具有塞特动物复合头形的塞特",
    mark: "𓂀",
  },
];

export default function EgyptianHubPage() {
  const atlasHref = siteBasePath ? `${siteBasePath}/myths.html#systems` : "/myths#systems";

  return (
    <main className="egypt-story-hub">
      <nav className="myth-atlas-nav" aria-label="埃及神话档案导航">
        <a href={atlasHref}>← 返回六个入口</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>

      <header className="egypt-hub-hero">
        <div className="egypt-hub-cosmos" aria-hidden="true"><i /><i /><i /></div>
        <span>ARCHIVE 03 / NILE VALLEY / TWO WAYS IN</span>
        <div>
          <b aria-hidden="true">☥</b>
          <h1>埃及神话<br />叙事入口</h1>
        </div>
        <p>没有一条故事线足以代表三千年的传统。这里先从两种“秩序如何成立”进入：太阳每日恢复宇宙运行，王位争讼则重新安排神与王权的关系。</p>
      </header>

      <section className="egypt-story-choices" aria-label="选择埃及神话叙事专题">
        {stories.map((story) => (
          <a href={`${siteBasePath}/myths/egyptian/${story.slug}`} className={`is-${story.slug}`} key={story.slug}>
            <div className="egypt-story-choice-head">
              <span>{story.index}</span>
              <small>{story.eyebrow}</small>
              <b aria-hidden="true">{story.mark}</b>
            </div>
            <figure><img src={`${siteBasePath}/${story.image}`} alt={story.alt} /></figure>
            <div className="egypt-story-choice-copy">
              <h2>{story.title}</h2>
              <h3>{story.subtitle}</h3>
              <p>{story.body}</p>
            </div>
            <div className="egypt-story-choice-enter"><span>进入独立专题</span><b aria-hidden="true">↗</b></div>
          </a>
        ))}
      </section>

      <footer className="egypt-hub-method">
        <span>READING METHOD / 阅读方法</span>
        <p>两条路径互相照亮，却不会被拼成一部虚构的统一史诗。每个专题保留自己的文本来源、时间层次与叙事逻辑。</p>
      </footer>
    </main>
  );
}
