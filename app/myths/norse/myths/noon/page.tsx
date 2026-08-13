import type { Metadata } from "next";
import { CycleArchive } from "../CycleArchive";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "正午｜北欧神话的一日", description: "洛基的三个孩子、芬里尔的束缚、巨人国诸行与弗蕾雅项链的残篇。" };
export default function Page(){ return <CycleArchive cycleKey="noon" />; }
