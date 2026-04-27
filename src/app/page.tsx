import { SearchFilterBar } from "@/components/search-filter-bar";
import { ToolGrid } from "@/components/tool-grid";
import { filterTools } from "@/lib/tool-utils";
import { ToolCategory } from "@/types/tool";

interface HomePageProps {
  searchParams: {
    q?: string;
    category?: ToolCategory | "全部";
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const filteredTools = filterTools({
    keyword: searchParams.q,
    category: searchParams.category
  });

  return (
    <main className="space-y-6">
      <SearchFilterBar />

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          当前共 <span className="font-semibold text-slate-900">{filteredTools.length}</span>{" "}
          个匹配工具
        </p>
      </div>

      <ToolGrid tools={filteredTools} />
    </main>
  );
}
