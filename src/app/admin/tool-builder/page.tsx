"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { ToolDetailContent } from "@/components/tool-detail-content";
import { AITool, ToolCategory } from "@/types/tool";

const iconOptions = [
  "chatgpt",
  "claude",
  "gemini",
  "copyai",
  "writesonic",
  "midjourney",
  "copilot",
  "runway",
  "notion",
  "jasper"
];

const categoryOptions: ToolCategory[] = ["写作", "图像", "代码", "视频", "效率", "营销"];

function splitByLine(text: string) {
  return text
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildToolObject(form: Record<string, string>): AITool {
  return {
    id: form.id || "new-id",
    slug: form.slug || "new-tool",
    name: form.name || "新工具",
    description: form.description || "工具简介",
    longDescription: form.longDescription || "详细介绍",
    icon: form.icon || "chatgpt",
    category: (form.category as ToolCategory) || "写作",
    tags: splitByLine(form.tags),
    websiteUrl: form.websiteUrl || "https://example.com",
    affiliateUrl: form.affiliateUrl || "https://example.com/affiliate/new-tool",
    features: splitByLine(form.features),
    useCases: splitByLine(form.useCases),
    pros: splitByLine(form.pros),
    cons: splitByLine(form.cons),
    seoKeywords: splitByLine(form.seoKeywords),
    pricingPlans: splitByLine(form.pricingPlans).map((line) => {
      const [name = "", price = "", billingCycle = "", features = ""] = line
        .split("|")
        .map((part) => part.trim());

      return {
        name: name || "套餐",
        price: price || "$0",
        billingCycle: billingCycle || "月",
        features: features ? features.split("、").map((f) => f.trim()) : ["基础权益"]
      };
    })
  };
}

const initialForm = {
  id: "11",
  slug: "new-writing-tool",
  name: "New Writing Tool",
  description: "一句话简介",
  longDescription: "这里填写工具详细介绍，描述功能、体验和适合人群。",
  icon: "chatgpt",
  category: "写作",
  tags: "写作\n效率",
  websiteUrl: "https://example.com",
  affiliateUrl: "https://example.com/affiliate/new-writing-tool",
  features: "长文生成\n改写润色\n多语言支持",
  useCases: "营销文案\n博客写作\n邮件草拟",
  pros: "上手快\n模板丰富",
  cons: "高级功能需付费",
  seoKeywords: "AI写作\n文案工具\n内容生成",
  pricingPlans: "Free|$0|月|基础额度、社区支持\nPro|$20|月|高额度、优先支持"
};

type BuilderForm = typeof initialForm;
const STORAGE_KEY = "ai-tools-nav:tool-builder-form";

export default function ToolBuilderPage() {
  const [form, setForm] = useState(initialForm);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  const tool = useMemo(() => buildToolObject(form), [form]);

  const generatedSnippet = useMemo(
    () =>
      JSON.stringify(tool, null, 2)
        .replace(/"([^"]+)":/g, "$1:")
        .replace(/"/g, "'"),
    [tool]
  );

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as Partial<BuilderForm>;
      setForm((prev) => ({ ...prev, ...parsed }));
      setMessage("已从本地草稿恢复");
    } catch {
      setMessage("本地草稿读取失败，已使用默认值");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const updateField = (key: keyof BuilderForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const copySnippet = async () => {
    await navigator.clipboard.writeText(generatedSnippet + ",");
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const exportJson = async () => {
    await navigator.clipboard.writeText(JSON.stringify(form, null, 2));
    setMessage("JSON 已复制到剪贴板");
  };

  const resetForm = () => {
    setForm(initialForm);
    localStorage.removeItem(STORAGE_KEY);
    setMessage("已重置为默认示例");
  };

  const importJson = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const raw = event.target.value.trim();
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as Partial<BuilderForm>;
      setForm((prev) => ({ ...prev, ...parsed }));
      setMessage("JSON 导入成功");
      event.target.value = "";
    } catch {
      setMessage("JSON 格式错误，请检查后重试");
    }
  };

  return (
    <main className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">工具信息生成器（Admin）</h2>
        <p className="mt-2 text-sm text-slate-600">
          填写表单后会实时生成详情页预览，以及可直接粘贴到 `src/data/tools.ts` 的数据对象。
        </p>
        <p className="mt-2 text-xs text-brand-700">{message || "表单会自动保存到本地草稿"}</p>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {[
            ["id", "ID"],
            ["slug", "Slug"],
            ["name", "工具名称"],
            ["description", "简介"],
            ["websiteUrl", "官网链接"],
            ["affiliateUrl", "Affiliate 链接"]
          ].map(([key, label]) => (
            <label key={key} className="block">
              <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
              <input
                value={form[key as keyof typeof initialForm]}
                onChange={(e) => updateField(key as keyof BuilderForm, e.target.value)}
                className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              />
            </label>
          ))}

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">图标</span>
            <select
              value={form.icon}
              onChange={(e) => updateField("icon", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-brand-300"
            >
              {iconOptions.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-600">分类</span>
            <select
              value={form.category}
              onChange={(e) => updateField("category", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-brand-300"
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          {[
            ["longDescription", "详细介绍"],
            ["tags", "标签（每行一个）"],
            ["features", "功能特点（每行一个）"],
            ["useCases", "适用场景（每行一个）"],
            ["pros", "优点（每行一个）"],
            ["cons", "缺点（每行一个）"],
            ["seoKeywords", "SEO 关键词（每行一个）"],
            ["pricingPlans", "价格行（格式：套餐|价格|周期|权益1、权益2）"]
          ].map(([key, label]) => (
            <label key={key} className="block">
              <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
              <textarea
                value={form[key as keyof typeof initialForm]}
                onChange={(e) => updateField(key as keyof BuilderForm, e.target.value)}
                rows={key === "longDescription" ? 4 : 3}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              />
            </label>
          ))}

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="mb-2 text-xs font-medium text-slate-600">导入 JSON（粘贴后自动导入）</p>
            <textarea
              rows={4}
              placeholder='{"name":"My Tool","slug":"my-tool"}'
              onBlur={importJson}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-brand-300"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">可粘贴数据对象</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exportJson}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  导出 JSON
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-rose-300 px-3 py-1.5 text-sm font-medium text-rose-700 hover:bg-rose-50"
                >
                  重置
                </button>
                <button
                  type="button"
                  onClick={copySnippet}
                  className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  {copied ? "已复制" : "复制代码"}
                </button>
              </div>
            </div>
            <pre className="max-h-80 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
              {generatedSnippet},
            </pre>
          </div>

          <ToolDetailContent tool={tool} relatedTools={[]} />
        </div>
      </section>
    </main>
  );
}
