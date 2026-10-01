import Link from "next/link";

import { LocalToolIcon } from "@/components/local-tool-icon";
import { AITool } from "@/types/tool";

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-slate-100 p-2">
            <LocalToolIcon icon={tool.icon} className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{tool.name}</h3>
            <span className="text-sm text-brand-600">{tool.category}</span>
          </div>
        </div>
      </div>

      <p className="mb-4 line-clamp-2 text-sm text-slate-600">{tool.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        <Link
          href={`/tools/${tool.slug}`}
          className="text-sm font-medium text-brand-700 group-hover:text-brand-600"
        >
          查看详情
        </Link>
        <Link
          href={tool.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-500 hover:text-slate-800"
        >
          官网
        </Link>
      </div>
    </article>
  );
}
