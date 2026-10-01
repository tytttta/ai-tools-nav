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
 * 示例对比数据：只包含开源版内置的工具，避免对比表出现死链。
 * 对比页是商业意图最强的页面（用户正在做购买决策），建议给有联盟佣金的工具单独做对比页。
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
    slug: "writesonic",
    name: "Writesonic",
    freeQuota: "有免费试用，按积分和套餐限制",
    monthlyPriceUsd: 16,
    priceLabel: "$16 / 月起",
    features: "SEO 文章生成、博客扩写、内容改写、品牌文案",
    useCases: "SEO 内容、博客运营、内容团队",
    pros: "内容运营场景覆盖广、性价比高",
    cons: "复杂场景需要人工二次润色",
    signupUrl: "https://writesonic.com/"
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
  }
];
