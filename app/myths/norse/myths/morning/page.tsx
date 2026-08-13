import type { Metadata } from "next";
import { CycleArchive } from "../CycleArchive";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "清晨｜北欧神话的一日", description: "创造、血誓、华纳盟约、诗蜜酒、阿斯加德城墙、希芙金发与伊登失踪。" };
export default function Page(){ return <CycleArchive cycleKey="morning" />; }
