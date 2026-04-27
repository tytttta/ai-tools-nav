import Link from "next/link";

import { LocalToolIcon } from "@/components/local-tool-icon";
import { AITool } from "@/types/tool";

interface ToolDetailContentProps {
  tool: AITool;
  relatedTools: AITool[];
}

function renderList(items: string[] | undefined, fallback: string) {
  if (!items || items.length === 0) {
    return <li className="text-sm text-slate-600">{fallback}</li>;
  }
  return items.map((item) => (
    <li key={item} className="text-sm text-slate-700">
      {item}
    </li>
  ));
}

export function ToolDetailContent({ tool, relatedTools }: ToolDetailContentProps) {
  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-slate-100 p-3">
            <LocalToolIcon icon={tool.icon} className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{tool.name}</h2>
            <p className="text-sm text-brand-600">{tool.category}</p>
          </div>
        </div>

        <p className="mb-4 text-slate-700">{tool.longDescription}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={tool.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            官方链接
          </Link>
          <Link
            href={tool.affiliateUrl}
            target="_blank"
            rel="sponsored noreferrer"
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            注册 / 购买（Affiliate）
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold text-slate-900">功能特点</h3>
        <ul className="list-inside list-disc space-y-2">
          {renderList(tool.features, "暂无详细功能特点，建议先体验基础功能后补充。")}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold text-slate-900">价格方案</h3>
        {tool.pricingPlans && tool.pricingPlans.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full text-left">
              <thead className="bg-slate-50 text-sm text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">套餐</th>
                  <th className="px-4 py-3 font-semibold">价格</th>
                  <th className="px-4 py-3 font-semibold">计费周期</th>
                  <th className="px-4 py-3 font-semibold">权益</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                {tool.pricingPlans.map((plan) => (
                  <tr key={plan.name} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">{plan.name}</td>
                    <td className="px-4 py-3">{plan.price}</td>
                    <td className="px-4 py-3">{plan.billingCycle}</td>
                    <td className="px-4 py-3">{plan.features.join("、")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-slate-600">暂无公开价格表，可通过官方链接查看最新报价。</p>
        )}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="mb-3 text-lg font-semibold text-emerald-900">优点</h3>
          <ul className="list-inside list-disc space-y-2">{renderList(tool.pros, "暂无优点数据")}</ul>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="mb-3 text-lg font-semibold text-rose-900">缺点</h3>
          <ul className="list-inside list-disc space-y-2">{renderList(tool.cons, "暂无缺点数据")}</ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold text-slate-900">适用场景</h3>
        <ul className="list-inside list-disc space-y-2">
          {renderList(tool.useCases, "暂无适用场景数据")}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">相关工具推荐</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedTools.map((item) => (
            <Link
              key={item.slug}
              href={`/tools/${item.slug}`}
              className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50"
            >
              <p className="font-medium text-slate-900">{item.name}</p>
              <p className="mt-1 text-xs text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
