import Link from "next/link";

export default function NotFound() {
  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
      <h2 className="mb-3 text-2xl font-bold text-slate-900">页面不存在</h2>
      <p className="mb-6 text-slate-600">你访问的工具详情页可能已下线或地址错误。</p>
      <Link
        href="/"
        className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        返回首页
      </Link>
    </main>
  );
}
