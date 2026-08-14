"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

type MorningCycle = {
  kicker: string;
  title: string;
  subtitle: string;
  mark: string;
  intro: string;
};

export default function MorningSunEasterEgg({ cycle, storyCount, indexHref }: { cycle: MorningCycle; storyCount: number; indexHref: string }) {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [error, setError] = useState(false);
  const armed = useRef(false);
  const lastSunClick = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const summonSun = () => {
    if (!armed.current) return;
    setOpen(true);
    armed.current = false;
    setCommand("");
    setError(false);
  };

  const touchSun = () => {
    const now = Date.now();
    const isDouble = now - lastSunClick.current < 1200;
    lastSunClick.current = now;
    if (!armed.current || !isDouble) return;
    summonSun();
  };

  const submitCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (command.trim() === "1018sun2324xy") {
      window.location.assign(`${siteBasePath}/myths/norse/sun-map${staticPageSuffix}`);
      return;
    }
    setError(true);
    setCommand("");
  };

  return <>
    <nav className="myth-atlas-nav" aria-label={`${cycle.title}卷导航`}>
      <a href={indexHref}>← 返回神话的一日</a>
      <button className="myth-atlas-wordmark norse-sun-wordmark" type="button" onClick={() => { armed.current = true; }} aria-label="神人 cm">神人<span>cm</span></button>
    </nav>
    <header className="norse-cycle-hero">
      <span>{cycle.kicker} / {storyCount} STORIES</span>
      <button className="norse-morning-secret-sun" type="button" onClick={touchSun} onDoubleClick={summonSun} aria-label="清晨的太阳">{cycle.mark}</button>
      <h1>{cycle.title}</h1><h2>{cycle.subtitle}</h2><p>{cycle.intro}</p><a href="#stories">翻开目录 <i>↓</i></a>
    </header>
    <div className="norse-sun-gate-overlay" role="presentation" hidden={!open}>
      <section className="norse-sun-gate-dialog" role="dialog" aria-modal="true" aria-labelledby="norse-sun-gate-title">
        <button type="button" className="norse-sun-gate-close" onClick={() => setOpen(false)} aria-label="关闭密咒窗口">×</button>
        <span>SOLAR LOCK / MORNING SEQUENCE</span>
        <h2 id="norse-sun-gate-title">酸菜国的太阳<br />需要密咒唤醒</h2>
        <form onSubmit={submitCommand}>
          <label htmlFor="norse-sun-command">SUN SPELL</label>
          <div><b aria-hidden="true">☼</b><input id="norse-sun-command" ref={inputRef} autoComplete="off" spellCheck={false} value={command} onChange={(event) => { setCommand(event.target.value); setError(false); }} aria-invalid={error} /><button type="submit">唤醒太阳 ↗</button></div>
          <p aria-live="polite">{error ? "密咒无效。太阳翻了个身，继续装睡。" : "THE MAP REMAINS UNLIT"}</p>
        </form>
      </section>
    </div>
  </>;
}
