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
    signupUrl: "https://example.com/affiliate/chatgpt"
  },
  {
    slug: "claude",
    name: "Claude",
    freeQuota: "有免费版，长文本处理额度有限",
    monthlyPriceUsd: 20,
    priceLabel: "$20 / 月",
    features: "长文本总结、风格改写、知识问答、内容规划",
    useCases: "长文写作、研究整理、商务文稿",
    pros: "长文理解强、输出稳定",
    cons: "部分功能需订阅体验更好",
    signupUrl: "https://example.com/affiliate/claude"
  },
  {
    slug: "gemini",
    name: "Gemini",
    freeQuota: "有免费层，配额随地区和版本变化",
    monthlyPriceUsd: 19.99,
    priceLabel: "$19.99 / 月",
    features: "写作生成、多模态问答、Google 生态协同",
    useCases: "办公写作、信息检索、轻量协作",
    pros: "与 Google 服务整合好",
    cons: "不同地区可用性差异较大",
    signupUrl: "https://example.com/affiliate/gemini"
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    freeQuota: "有免费试用，正式版按席位计费",
    monthlyPriceUsd: 36,
    priceLabel: "$36 / 月起",
    features: "营销模板、销售文案、邮件序列、品牌语气",
    useCases: "营销团队、销售团队、广告投放",
    pros: "营销模板丰富、上手快",
    cons: "通用推理能力不如通用大模型",
    signupUrl: "https://example.com/affiliate/copy-ai"
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
    signupUrl: "https://example.com/affiliate/writesonic"
  }
];
