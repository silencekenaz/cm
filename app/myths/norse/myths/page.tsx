import type { Metadata } from "next";
import MythSystemPage from "../../MythSystemPage";
import { mythSystems } from "../../myth-data";

export const dynamic = "force-static";
const system = mythSystems[1];
export const metadata: Metadata = {
  title: "北欧神话传说｜诸神与命运",
  description: "诸神、巨人、世界树、命运与诸神黄昏的北欧神话篇。",
};

export default function Page() { return <MythSystemPage system={system} norseMythology />; }
