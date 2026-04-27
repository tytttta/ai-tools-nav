import type { Metadata } from "next";

import { ComparisonTable } from "@/components/comparison-table";
import { aiWritingComparison } from "@/data/tool-comparison";

export const metadata: Metadata = {
  title: "AI写作工具对比 - AI 工具导航",
  description: "对比主流 AI 写作工具的价格、免费额度、适用场景、优缺点与注册链接。"
};

export default function AIWritingComparisonPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-2 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          工具类型：AI写作工具
        </p>
        <h2 className="text-2xl font-bold text-slate-900">AI写作工具对比</h2>
        <p className="mt-2 text-sm text-slate-600">
          对比维度：价格、免费额度、适用场景、优缺点、注册链接。支持点击列头排序，点击工具名可进入对应详情页。
        </p>
      </section>

      <ComparisonTable items={aiWritingComparison} />
    </main>
  );
}
