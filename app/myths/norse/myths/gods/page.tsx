import type { Metadata } from "next";
import NorseGodsDirectory from "./NorseGodsDirectory";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "十二位主要神祇｜北欧神话篇",
  description: "从神职、关系与代表故事认识十二位反复出现在埃达文本中的北欧神祇。",
};

export default function Page() {
  return <NorseGodsDirectory />;
}
