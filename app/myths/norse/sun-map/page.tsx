import type { Metadata } from "next";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "屑球地图｜未列入档案", description: "太阳密咒唤醒后显现的屑球地图。" };

const territories = [
  ["01", "酸菜国", "汤锅仍热，太阳勉强复工。国界以酸香能飘到的最远处为准。"],
  ["02", "伪国", "伪神统领的盟国。地图员无法确认每一条道路是不是道路本人。"],
  ["03", "蛮夷国", "与伪国保持危险而稳定的同盟，边境线每天都比昨天多一个拐角。"],
  ["04", "神之境", "悬在诸国上方，不接受比例尺、关税以及普通人的合理提问。"],
  ["∞", "很远的地球", "真的很远。远到地图画完以后，它仍然只肯占一个小圆点。"],
] as const;

export default function Page() {
  return <main className="scrap-globe-page">
    <nav><a href={`${siteBasePath}/myths/norse/myths/morning${staticPageSuffix}`}>← 返回清晨</a><span>UNLISTED MAP / 1018—2324</span></nav>
    <header><span>SOLAR CARTOGRAPHY / 屑球档案</span><h1>屑球<br /><b>地图</b></h1><p>太阳醒来以后，四片国土才从暗处浮出；至于地球，它离这里远得像一个已经退出群聊的旁观者。</p></header>
    <section className="scrap-globe-chart" aria-labelledby="scrap-map-title">
      <div className="scrap-map-heading"><span>KNOWN TERRITORIES / 04 + 01</span><h2 id="scrap-map-title">太阳照得到的地方，<br />暂时都画在这里。</h2></div>
      <figure>
        <svg viewBox="0 0 1600 960" role="img" aria-labelledby="scrap-map-svg-title scrap-map-svg-desc">
          <title id="scrap-map-svg-title">屑球地图</title><desc id="scrap-map-svg-desc">地图标出酸菜国、伪国、蛮夷国、神之境，以及位于遥远轨道外的地球。</desc>
          <defs><filter id="rough-shadow"><feDropShadow dx="12" dy="14" stdDeviation="0" floodColor="#091522" floodOpacity=".28" /></filter></defs>
          <g className="scrap-orbits" aria-hidden="true"><ellipse cx="760" cy="485" rx="650" ry="355" /><ellipse cx="760" cy="485" rx="510" ry="276" /><path d="M70 770C430 645 1040 710 1530 470" /></g>
          <g className="scrap-sun" aria-hidden="true" transform="translate(764 470)"><circle r="70" /><path d="M0-112V-82M0 82V112M-112 0H-82M82 0H112M-80-80L-58-58M58 58L80 80M80-80L58-58M-58 58L-80 80" /></g>
          <g className="scrap-land scrap-land-sour" filter="url(#rough-shadow)"><title>酸菜国</title><path d="M165 528L212 431 328 383 451 415 523 493 487 587 405 653 268 635 187 595Z" /><text x="316" y="508">酸菜国</text><text className="scrap-map-code" x="316" y="548">SUANCAI / 01</text></g>
          <g className="scrap-land scrap-land-false" filter="url(#rough-shadow)"><title>伪国</title><path d="M528 260L621 204 744 229 818 319 774 405 653 414 554 357Z" /><text x="662" y="310">伪国</text><text className="scrap-map-code" x="662" y="348">MIMIC / 02</text></g>
          <g className="scrap-land scrap-land-barbarian" filter="url(#rough-shadow)"><title>蛮夷国</title><path d="M903 472L1018 401 1158 438 1235 543 1167 639 1028 660 924 591Z" /><text x="1068" y="522">蛮夷国</text><text className="scrap-map-code" x="1068" y="562">BORDER / 03</text></g>
          <g className="scrap-land scrap-land-divine" filter="url(#rough-shadow)"><title>神之境</title><path d="M590 91L755 47 919 91 872 158 758 183 637 154Z" /><text x="758" y="108">神之境</text><text className="scrap-map-code" x="758" y="143">ABOVE / 04</text></g>
          <g className="scrap-earth"><title>很远的地球</title><path className="scrap-earth-line" d="M1235 543C1365 520 1434 395 1490 249" /><circle cx="1500" cy="226" r="34" /><path d="M1480 207C1494 197 1515 200 1521 211M1473 229C1488 226 1496 239 1508 242M1507 212C1500 222 1502 232 1512 238" /><text x="1452" y="304">很远的地球</text><text className="scrap-map-code" x="1452" y="327">VERY FAR / ∞</text></g>
          <g className="scrap-map-notes" aria-hidden="true"><text x="92" y="106">N ↑</text><text x="92" y="135">SCALE / REFUSED</text><text x="1260" y="838">THE SUN IS AWAKE — FOR NOW</text></g>
        </svg>
        <figcaption><span>MAP STATUS / UNRELIABLE</span><p>这不是一张值得拿来指路的地图。它只负责证明：酸菜国、伪国、蛮夷国与神之境确实在同一颗屑球上互相添乱，而地球选择离得很远，大概很有先见之明。</p></figcaption>
      </figure>
    </section>
    <section className="scrap-globe-ledger" aria-label="屑球地图地域索引">{territories.map(([number, name, text]) => <article key={name}><span>{number}</span><h2>{name}</h2><p>{text}</p></article>)}</section>
    <footer><p>地图已点亮。<br />太阳是否愿意继续工作，另议。</p><a href={`${siteBasePath}/myths/norse/myths/morning${staticPageSuffix}`}>收起地图，返回清晨 ↑</a></footer>
  </main>;
}
