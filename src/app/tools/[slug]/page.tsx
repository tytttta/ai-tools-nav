import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ToolDetailContent } from "@/components/tool-detail-content";
import { tools } from "@/data/tools";
import { getToolBySlug } from "@/lib/tool-utils";

interface ToolDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug
  }));
}

export function generateMetadata({ params }: ToolDetailPageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return {
      title: "工具未找到"
    };
  }

  return {
    title: `${tool.name} - AI 工具导航`,
    description: tool.description,
    keywords: tool.seoKeywords ?? [tool.name, "AI工具", tool.category, ...tool.tags]
  };
}

export default function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const relatedTools = tools
    .filter((item) => item.slug !== tool.slug && item.category === tool.category)
    .slice(0, 5);

  return <ToolDetailContent tool={tool} relatedTools={relatedTools} />;
}
