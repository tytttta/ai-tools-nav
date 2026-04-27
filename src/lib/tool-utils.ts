import { tools } from "@/data/tools";
import { AITool, ToolCategory } from "@/types/tool";

export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function filterTools(params: {
  category?: ToolCategory | "全部";
  keyword?: string;
}): AITool[] {
  const { category = "全部", keyword = "" } = params;
  const normalizedKeyword = keyword.trim().toLowerCase();

  return tools.filter((tool) => {
    const inCategory = category === "全部" || tool.category === category;
    const inKeyword =
      !normalizedKeyword ||
      [tool.name, tool.description, ...tool.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedKeyword);

    return inCategory && inKeyword;
  });
}
