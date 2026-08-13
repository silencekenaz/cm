"use client";

import { useState } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const duckLines = ["鸭脖真好吃", "太阳万岁", "鸭鸭真可怜"] as const;

export default function DuckMascot() {
  const [lineIndex, setLineIndex] = useState<number | null>(null);
  const [speechKey, setSpeechKey] = useState(0);

  const letDuckSpeak = () => {
    setLineIndex((current) => {
      const next = Math.floor(Math.random() * duckLines.length);
      return current === next ? (next + 1) % duckLines.length : next;
    });
    setSpeechKey((current) => current + 1);
  };

  return (
    <div className="easter-duck-mascot">
      {lineIndex !== null && (
        <p key={speechKey} className="easter-duck-speech" role="status">
          {duckLines[lineIndex]}
        </p>
      )}
      <button type="button" onClick={letDuckSpeak} aria-label="听鸭子说话">
        <img src={`${siteBasePath}/easter-duck.png`} alt="戴软帽、披红围巾的白色鸭子" />
      </button>
    </div>
  );
}
