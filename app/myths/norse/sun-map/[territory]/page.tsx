import type { Metadata } from "next";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

const territories = [
  { slug: "suancai", number: "01", name: "酸菜国", code: "SUANCAI" },
  { slug: "weiguo", number: "02", name: "伪国", code: "MIMIC" },
  { slug: "manyi", number: "03", name: "蛮夷国", code: "BORDER" },
  { slug: "god-realm", number: "04", name: "神之境", code: "ABOVE" },
  { slug: "earth", number: "∞", name: "很远的地球", code: "VERY FAR" },
] as const;

export const dynamic = "force-static";
export function generateStaticParams() { return territories.map(({ slug }) => ({ territory: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ territory: string }> }): Promise<Metadata> {
  const { territory: slug } = await params;
  const territory = territories.find((item) => item.slug === slug);
  return { title: territory ? `${territory.name}｜屑球地图` : "屑球地图" };
}

export default async function Page({ params }: { params: Promise<{ territory: string }> }) {
  const { territory: slug } = await params;
  const territory = territories.find((item) => item.slug === slug);
  if (!territory) return null;
  return <main className={`scrap-territory-page scrap-territory-${territory.slug}`}>
    <nav><a href={`${siteBasePath}/myths/norse/sun-map${staticPageSuffix}`}>← 返回屑球地图</a><span>TERRITORY FILE / {territory.number}</span></nav>
    <header><span>{territory.code} / ARCHIVE PENDING</span><h1>{territory.name}</h1><p>详细档案尚未展开。</p></header>
  </main>;
}
