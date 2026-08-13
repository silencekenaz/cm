import type { Metadata } from "next";
import EgyptianHubPage from "./EgyptianHubPage";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "埃及神话｜选择叙事入口", description: "从拉的旅程或荷鲁斯与塞特之争进入埃及神话。" };
export default function Page() { return <EgyptianHubPage />; }
