import type { Metadata } from "next";
import { CycleArchive } from "../CycleArchive";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "黄昏｜北欧神话的一日", description: "巴德尔之死、洛卡塞纳、洛基的惩罚、诸神黄昏与世界更新。" };
export default function Page(){ return <CycleArchive cycleKey="dusk" />; }
