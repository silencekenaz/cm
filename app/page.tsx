"use client";

import { useState } from "react";

const oracles = [
  "你不是想太多，你只是一次性看见了十七种可能。",
  "今日宜：把无聊的规则改写成神话。",
  "灵感已经敲门了。别问是谁，先让它进来。",
  "宇宙没有跑题，它只是在进行超长联想。",
  "保持怪诞。正常只是尚未展开的支线。",
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

      <section className="oracle-section" aria-live="polite">
        <div className="oracle-heading">
          <span className="section-number">03 / DAILY TRANSMISSION</span>
          <h2>要不要接收<br />一条今日神谕？</h2>
        </div>
        <div className={`oracle-result ${oracleOpen ? "is-open" : ""}`}>
          <span aria-hidden="true">“</span>
          <p>{oracleOpen ? oracles[oracleIndex] : "信号等待接收……"}</p>
          <small>— 来自神人 cm 的随机脑电波</small>
        </div>
        <button type="button" className="oracle-button" onClick={summonOracle}>
          <span>{oracleOpen ? "再来一条" : "点击接收"}</span>
          <b aria-hidden="true">↻</b>
        </button>
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
