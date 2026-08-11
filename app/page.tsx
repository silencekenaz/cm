"use client";

import { useState } from "react";

const oracles = [
  "当月桂无风而动，向左走。那条看似离题的路，正通往你的答案。",
  "太阳不会替你选择，但会照亮你一直假装没看见的欲望。",
  "你担心的混乱并非灾兆；它只是新秩序诞生前，诸神重新洗牌。",
  "今日不要向唯一答案献祭。阿波罗说：你的第七个念头最接近真相。",
  "一扇门将在笑声中打开。请认出那个让你兴奋、而非安心的方向。",
  "皮提亚看见三团火：一团是野心，一团是好奇，最后一团就是你。",
  "神谕从不命令。它只把你早已知道的事，说得像一道闪电。",
];

const typeCoordinates = [
  { system: "MBTI", code: "ENTP", note: "Ne–Ti｜可能性永动机" },
  { system: "ENNEAGRAM", code: "7w8", note: "快乐与力量，双引擎启动" },
  { system: "TRITYPE", code: "784", note: "脑、腹、心：拒绝无聊联合体" },
  { system: "INSTINCT", code: "sp/so", note: "先建基地，再把世界喊过来" },
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

  const summonOracle = () => {
    setOracleIndex((current) => (current + 1) % oracles.length);
    setOracleOpen(true);
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
            我喜欢<span>发疯</span>，类型学太好玩了望周知。
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
            如果人格是一张星图，<br />
            那我的坐标大概长这样。
          </p>
        </header>

        <div className="type-profile" aria-label="神人 cm 的类型学坐标">
          <div className="type-profile-head">
            <span>TYPE COORDINATES / VERIFIED</span>
            <p>不是盒子，是四组打开方式。</p>
          </div>
          <div className="type-grid">
            {typeCoordinates.map((item) => (
              <article className="type-code" key={item.system}>
                <span>{item.system}</span>
                <strong>{item.code}</strong>
                <p>{item.note}</p>
              </article>
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

        <div className="myth-poster" aria-label="神话阅读信号：命运、变形、混沌">
          <span className="poster-label">ARCHIVE No. 000∞</span>
          <div className="sun-symbol" aria-hidden="true">
            <span>✦</span>
          </div>
          <div className="poster-words" aria-hidden="true">
            <span>FATE</span>
            <span>METAMORPHOSIS</span>
            <span>CHAOS</span>
          </div>
          <p>古老故事<br />持续发生中</p>
        </div>
      </section>

      <section className="oracle-section">
        <div className="delphi-word" aria-hidden="true">ΔΕΛΦΟΙ</div>
        <div className="apollo-seal" aria-hidden="true">
          <span className="apollo-rays" />
          <span className="apollo-sun">☼</span>
          <i>APOLLO</i>
        </div>

        <div className="oracle-heading">
          <span className="section-number">03 / THE ORACLE OF DELPHI</span>
          <p className="greek-motto">ΓΝΩΘΙ ΣΕΑΥΤΟΝ · KNOW THYSELF</p>
          <h2>向皮提亚<br />问一个问题</h2>
          <p className="oracle-lead">
            月桂正在燃烧，裂隙中升起甜雾。<br />
            阿波罗允许你偷听一次命运。
          </p>
        </div>

        <div className="oracle-ritual">
          <div className="temple-pediment" aria-hidden="true">
            <span>☙</span><b>THE SUN SEES ALL</b><span>❧</span>
          </div>
          <div className="oracle-chamber">
            <i className="temple-column" aria-hidden="true" />
            <div className={`oracle-result ${oracleOpen ? "is-open" : ""}`} aria-live="polite">
              <span className="prophecy-label">PYTHIA TRANSMISSION № {String(oracleIndex + 1).padStart(2, "0")}</span>
              <span className="laurel" aria-hidden="true">☙</span>
              <p>{oracleOpen ? oracles[oracleIndex] : "问题在心中成形，然后触碰日轮。"}</p>
              <small>— 德尔斐，神人 cm 私人转译版</small>
            </div>
            <i className="temple-column" aria-hidden="true" />
          </div>
          <button type="button" className="oracle-button" onClick={summonOracle}>
            <span>{oracleOpen ? "再次求问" : "触碰日轮"}</span>
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
    </main>
  );
}
