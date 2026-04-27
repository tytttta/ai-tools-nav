import { ToolCard } from "@/components/tool-card";
import { AITool } from "@/types/tool";

interface ToolGridProps {
  tools: AITool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  if (!tools.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        没有匹配到工具，试试更换关键词或分类。
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </section>
  );
}
