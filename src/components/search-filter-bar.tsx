"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useTransition } from "react";

import { categories } from "@/data/tools";

export function SearchFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentKeyword = searchParams.get("q") ?? "";
  const currentCategory = searchParams.get("category") ?? "全部";

  const categoryOptions = useMemo(() => ["全部", ...categories], []);

  const updateParams = (next: { q?: string; category?: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (next.q !== undefined) {
      if (next.q.trim()) params.set("q", next.q.trim());
      else params.delete("q");
    }

    if (next.category !== undefined) {
      if (next.category && next.category !== "全部") params.set("category", next.category);
      else params.delete("category");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
        <input
          type="text"
          defaultValue={currentKeyword}
          placeholder="搜索工具名称、描述或标签..."
          className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none ring-brand-300 transition focus:ring-2"
          onChange={(event) => updateParams({ q: event.target.value })}
        />

        <div className="flex flex-wrap items-center gap-2">
          {categoryOptions.map((category) => {
            const active = currentCategory === category;
            return (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                onClick={() => updateParams({ category })}
                disabled={isPending}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
