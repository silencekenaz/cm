import type { Metadata } from "next";
import MythSystemPage from "../../MythSystemPage";
import { mythSystems } from "../../myth-data";

export const dynamic = "force-static";
const system = mythSystems[2];
export const metadata: Metadata = { title: `拉的旅程｜${system.title}`, description: "沿太阳船进入拉的昼夜航程、杜亚特与每日再生。" };
export default function Page() { return <MythSystemPage system={system} egyptianJourney />; }
