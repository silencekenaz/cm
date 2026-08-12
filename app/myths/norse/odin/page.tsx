import type { Metadata } from "next";
import GodArchivePage from "../GodArchivePage";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "奥丁｜北欧诸神档案", description: "依据埃达文本整理的奥丁档案。" };
export default function Page() { return <GodArchivePage slug="odin" />; }
