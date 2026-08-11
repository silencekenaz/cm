import type { Metadata } from "next";
import MythSystemPage from "../MythSystemPage";
import { mythSystems } from "../myth-data";

export const dynamic = "force-static";
const system = mythSystems[4];
export const metadata: Metadata = { title: `${system.title}｜神话档案`, description: system.framing };
export default function Page() { return <MythSystemPage system={system} />; }
