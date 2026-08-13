import type { Metadata } from "next";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticPageSuffix = siteBasePath ? ".html" : "";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "北欧神话传说｜重建中",
  description: "北欧神话篇正在从原典重新整理。",
};

export default function Page() {
  return (
    <main className="norse-myth-empty-page">
      <nav className="myth-atlas-nav" aria-label="北欧神话篇页面导航">
        <a href={`${siteBasePath}/myths/norse${staticPageSuffix}`}>← 返回北欧总览</a>
        <a className="myth-atlas-wordmark" href={`${siteBasePath}/`} aria-label="返回神人 cm 首页">神人<span>cm</span></a>
      </nav>
      <section>
        <span>PATH 01 / MYTHOLOGICAL TRADITIONS</span>
        <b aria-hidden="true">ᚨ</b>
        <h1>神话篇<br />从原典重建中</h1>
        <p>旧版五章内容已经清除。下一次从诸神、巨人、创世材料与命运结构重新开始，不沿用原来的章节和结论。</p>
        <a href={`${siteBasePath}/myths/norse${staticPageSuffix}#nine-worlds`}>先返回九界档案 <i aria-hidden="true">↖</i></a>
      </section>
    </main>
  );
}
