import type { Metadata } from "next";
import NorseHubPage from "./NorseHubPage";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "北欧传统｜冰与火、神话与英雄",
  description: "从整体世界观进入北欧神话传说与英雄传说两条阅读路线。",
};
export default function Page() { return <NorseHubPage />; }
