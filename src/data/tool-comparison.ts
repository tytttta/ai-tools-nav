export interface ToolComparisonItem {
  slug: string;
  name: string;
  freeQuota: string;
  monthlyPriceUsd: number;
  priceLabel: string;
  features: string;
  useCases: string;
  pros: string;
  cons: string;
  signupUrl: string;
}

/**
 * 示例对比数据：只包含开源版内置的示例工具，避免对比表出现死链。
 * 你可以按同样的结构添加自己的对比组合（例如「AI 视频工具」「AI 编程工具」）。
 */
export const aiWritingComparison: ToolComparisonItem[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    freeQuota: "有免费版，含基础模型与限额调用",
    monthlyPriceUsd: 20,
    priceLabel: "$20 / 月",
    features: "多轮对话、写作改写、代码辅助、文档总结",
    useCases: "通用写作、学习辅助、产品文档",
    pros: "生态成熟、能力全面、学习资料丰富",
    cons: "高峰时段速度可能波动",
    signupUrl: "https://chat.openai.com/"
  },
  {
    slug: "jasper",
    name: "Jasper",
    freeQuota: "无长期免费版，提供试用额度",
    monthlyPriceUsd: 39,
    priceLabel: "$39 / 月起",
    features: "品牌语气管理、广告文案、SEO 内容扩展、活动素材",
    useCases: "增长团队、营销文案、广告投放",
    pros: "营销场景模板丰富、品牌一致性控制强",
    cons: "价格偏高，通用推理能力不如通用大模型",
    signupUrl: "https://www.jasper.ai/"
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    freeQuota: "随 Notion 套餐提供，无独立免费版",
    monthlyPriceUsd: 10,
    priceLabel: "$10 / 月起",
    features: "会议纪要整理、文档润色、任务摘要、知识库问答",
    useCases: "团队协作、知识管理、文档写作",
    pros: "与笔记和数据库深度结合，团队协作顺畅",
    cons: "脱离 Notion 生态后价值有限",
    signupUrl: "https://www.notion.so/product/ai"
  },
  {
    slug: "runway",
    name: "Runway",
    freeQuota: "有免费额度，按积分消耗",
    monthlyPriceUsd: 15,
    priceLabel: "$15 / 月起",
    features: "文生视频、图生视频、视频编辑、绿幕抠像",
    useCases: "短视频制作、创意短片、广告素材",
    pros: "生成质量领先，编辑工具链完整",
    cons: "按积分计费，高频使用成本上升明显",
    signupUrl: "https://runwayml.com/"
  }
];
