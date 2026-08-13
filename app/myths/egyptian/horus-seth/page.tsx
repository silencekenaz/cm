import type { Metadata } from "next";
import EgyptianConflictPage from "../EgyptianConflictPage";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "荷鲁斯与塞特之争｜埃及神话", description: "沿原典阅读荷鲁斯与塞特关于欧西里斯王位的漫长争讼。" };
export default function Page() { return <EgyptianConflictPage />; }
