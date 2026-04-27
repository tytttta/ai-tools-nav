"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ToolComparisonItem } from "@/data/tool-comparison";

type SortField = "name" | "monthlyPriceUsd" | "freeQuota";
type SortOrder = "asc" | "desc";

interface ComparisonTableProps {
  items: ToolComparisonItem[];
}

function compareText(a: string, b: string, order: SortOrder) {
  return order === "asc" ? a.localeCompare(b, "zh-CN") : b.localeCompare(a, "zh-CN");
}

export function ComparisonTable({ items }: ComparisonTableProps) {
  const [sortField, setSortField] = useState<SortField>("monthlyPriceUsd");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedItems = useMemo(() => {
    const cloned = [...items];

    cloned.sort((a, b) => {
      if (sortField === "name") return compareText(a.name, b.name, sortOrder);
      if (sortField === "freeQuota") return compareText(a.freeQuota, b.freeQuota, sortOrder);

      return sortOrder === "asc"
        ? a.monthlyPriceUsd - b.monthlyPriceUsd
        : b.monthlyPriceUsd - a.monthlyPriceUsd;
    });

    return cloned;
  }, [items, sortField, sortOrder]);

  const setSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }
    setSortField(field);
    setSortOrder("asc");
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span>当前排序：</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800">
          {sortField === "name" && "名称"}
          {sortField === "monthlyPriceUsd" && "价格"}
          {sortField === "freeQuota" && "免费额度"}
          {" · "}
          {sortOrder === "asc" ? "升序" : "降序"}
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-[1100px] w-full text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-4 py-3">
                <button type="button" onClick={() => setSort("name")} className="font-semibold hover:text-slate-900">
                  名称
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => setSort("freeQuota")}
                  className="font-semibold hover:text-slate-900"
                >
                  免费额度
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => setSort("monthlyPriceUsd")}
                  className="font-semibold hover:text-slate-900"
                >
                  价格
                </button>
              </th>
              <th className="px-4 py-3 font-semibold">功能</th>
              <th className="px-4 py-3 font-semibold">适用场景</th>
              <th className="px-4 py-3 font-semibold">优缺点</th>
              <th className="px-4 py-3 font-semibold">注册链接</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {sortedItems.map((item) => (
              <tr key={item.slug} className="border-t border-slate-100 align-top">
                <td className="px-4 py-4">
                  <Link href={`/tools/${item.slug}`} className="font-semibold text-brand-700 hover:text-brand-600">
                    {item.name}
                  </Link>
                </td>
                <td className="px-4 py-4">{item.freeQuota}</td>
                <td className="px-4 py-4">
                  <span className="font-medium text-slate-900">{item.priceLabel}</span>
                </td>
                <td className="px-4 py-4">{item.features}</td>
                <td className="px-4 py-4">{item.useCases}</td>
                <td className="px-4 py-4">
                  <p className="mb-1 text-emerald-700">优：{item.pros}</p>
                  <p className="text-rose-700">缺：{item.cons}</p>
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={item.signupUrl}
                    target="_blank"
                    rel="sponsored noreferrer"
                    className="inline-flex rounded-lg bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700"
                  >
                    去注册
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
