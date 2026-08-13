import type { Metadata } from "next";
import { stories, StoryPage } from "../StoryArchive";

export const dynamic = "force-static";
export function generateStaticParams() { return stories.map((story) => ({ story: story.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ story: string }> }): Promise<Metadata> { const {story:slug}=await params; const story=stories.find((item)=>item.slug===slug); return {title: story ? `${story.title}｜北欧神话` : "北欧神话", description: story?.lead}; }
export default async function Page({ params }: { params: Promise<{ story: string }> }) { const {story:slug}=await params; const story=stories.find((item)=>item.slug===slug); if (!story) return null; return <StoryPage story={story}/>; }
