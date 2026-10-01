import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

export const metadata: Metadata = {
  title: "AI 工具导航",
  description: "精选 AI 工具导航站，快速发现与筛选高价值 AI 产品。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Next.js 14 App Router
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                AI 工具导航
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                一个可搜索、可分类、可扩展 affiliate 变现位的 AI 工具聚合站
              </p>
            </div>
            <div className="flex w-fit items-center gap-2">
              <Link
                href="/compare/ai-writing"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                工具对比
              </Link>
              <Link
                href="/"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回首页
              </Link>
            </div>
          </header>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
