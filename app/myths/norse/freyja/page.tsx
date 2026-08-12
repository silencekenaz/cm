import type { Metadata } from "next";
import GodArchivePage from "../GodArchivePage";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "弗蕾雅｜北欧诸神档案", description: "依据埃达文本整理的弗蕾雅档案。" };
export default function Page() { return <GodArchivePage slug="freyja" />; }
