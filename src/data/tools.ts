import { AITool, ToolCategory } from "@/types/tool";

export const categories: ToolCategory[] = ["写作", "图像", "代码", "视频", "效率", "营销"];

export const tools: AITool[] = [

  {
    id: "1",
    slug: "chatgpt",
    name: "ChatGPT",
    description: "多场景智能助手，支持问答、写作和代码生成。",
    longDescription:
      "ChatGPT 适合内容创作、学习辅助、业务自动化等场景。你可以通过提示词快速生成文章大纲、营销文案、产品说明，或处理日常文本任务。",
    icon: "chatgpt",
    category: "写作",
    tags: ["文案", "问答", "效率"],
    websiteUrl: "https://chat.openai.com/",
    affiliateUrl: "https://example.com/affiliate/chatgpt",
    features: ["多轮对话", "长文改写", "内容总结", "代码与文档辅助"],
    useCases: ["内容创作", "营销文案", "知识问答", "产品文档"],
    pros: ["能力全面，适配场景广", "资料生态完善，易上手"],
    cons: ["免费版高峰时段可能受限", "复杂业务仍需人工审核"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础模型访问", "有限额度使用"]
      },
      {
        name: "Plus",
        price: "$20",
        billingCycle: "月",
        features: ["更高额度", "更快响应", "优先体验新能力"]
      }
    ],
    seoKeywords: ["ChatGPT", "AI写作", "AI助手", "文案生成"]
  },
  {
    id: "2",
    slug: "midjourney",
    name: "Midjourney",
    description: "高质量 AI 绘图工具，擅长创意与艺术风格图像。",
    longDescription:
      "Midjourney 适用于品牌视觉、海报设计、概念图制作等。通过自然语言描述生成图像，并可持续迭代风格与细节。",
    icon: "midjourney",
    category: "图像",
    tags: ["设计", "视觉", "创意"],
    websiteUrl: "https://www.midjourney.com/",
    affiliateUrl: "https://example.com/affiliate/midjourney"
  },
  {
    id: "3",
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "开发者智能编程助手，提升编码速度与代码质量。",
    longDescription:
      "GitHub Copilot 可以在编辑器内提供代码补全、函数建议、测试样例与重构建议，帮助开发团队快速交付。",
    icon: "copilot",
    category: "代码",
    tags: ["编程", "开发", "IDE"],
    websiteUrl: "https://github.com/features/copilot",
    affiliateUrl: "https://example.com/affiliate/copilot"
  },
  {
    id: "4",
    slug: "runway",
    name: "Runway",
    description: "AI 视频生成与编辑平台，适合短视频和创意制作。",
    longDescription:
      "Runway 提供文本生成视频、背景替换、镜头扩展等能力，适合内容团队快速完成视频创作和后期处理。",
    icon: "runway",
    category: "视频",
    tags: ["短视频", "剪辑", "生成式视频"],
    websiteUrl: "https://runwayml.com/",
    affiliateUrl: "https://example.com/affiliate/runway"
  },
  {
    id: "5",
    slug: "notion-ai",
    name: "Notion AI",
    description: "知识管理与内容整理的智能助手。",
    longDescription:
      "Notion AI 可用于会议纪要整理、文档润色、任务摘要与知识库提问，帮助团队统一信息流并提高协作效率。",
    icon: "notion",
    category: "效率",
    tags: ["知识库", "协作", "团队"],
    websiteUrl: "https://www.notion.so/product/ai",
    affiliateUrl: "https://example.com/affiliate/notion-ai"
  },
  {
    id: "6",
    slug: "jasper",
    name: "Jasper",
    description: "面向营销团队的 AI 内容生产平台。",
    longDescription:
      "Jasper 支持品牌语气管理、广告文案生成、SEO 内容扩展与活动推广素材制作，适合增长和营销团队。",
    icon: "jasper",
    category: "营销",
    tags: ["SEO", "广告", "内容营销"],
    websiteUrl: "https://www.jasper.ai/",
    affiliateUrl: "https://example.com/affiliate/jasper"
  },

  {
    id: "10",
    slug: "writesonic",
    name: "Writesonic",
    description: "AI 搜索增长引擎（GEO 平台）：跟踪品牌在 ChatGPT、Gemini、Google AI Overviews 等 AI 中的可见性，并用内容与引用修复缺口。",
    longDescription:
      "Writesonic 现在的定位是「AI 搜索增长引擎」，已不是早期的 AI 写作工具。它的主张是 SEO 工具不管 AI、AI 追踪工具不管 SEO，而它两者都做：先追踪你的品牌在 ChatGPT、Gemini、Google AI Overviews 等 AI 平台中被提及和推荐的情况，找出哪些提问在推荐竞品而不是你，然后按影响排序给出待办（内容改写、外部引用、技术修复），由 AI Agent 执行并在第 14 / 28 天验证提升效果，再进入下一轮循环。适合需要监测品牌 AI 曝光并把可见性变成获客渠道的品牌方、代理商与增长团队。",
    icon: "writesonic",
    category: "营销",
    tags: ["GEO", "AI 可见性", "品牌监测", "SEO"],
    websiteUrl: "https://writesonic.com/",
    affiliateUrl: "https://example.com/affiliate/writesonic",
    features: [
      "追踪品牌在多个 AI 平台中的可见性",
      "分析 AI 引用来源并获取外部引用",
      "Action Center 按影响排序待修复项",
      "AI Agent 改写内容以适配 GEO",
      "技术项审计（robots.txt / schema / 索引）",
      "修复后按 Day 14 / Day 28 衡量提升"
    ],
    useCases: [
      "品牌 AI 曝光监测",
      "GEO 与 SEO 一体化优化",
      "代理商多客户管理与白标报告",
      "增长团队补齐 AI 搜索渠道",
      "电商产品进入 AI 推荐"
    ],
    pros: [
      "把 AI 可见性从「只看数据」推进到「自动执行修复」",
      "SEO 与 GEO 统一评分，不用在多个工具间来回切",
      "覆盖企业、代理商、增长团队与电商四类场景"
    ],
    cons: [
      "定价面向企业，入门档即 $99/月，个人用户性价比低",
      "依赖人工判断的营销策略，不能全自动替代运营",
      "侧重 AI 搜索单一渠道，通用写作能力不是它的强项"
    ],
    pricingPlans: [
      {
        name: "Starter",
        price: "$99",
        billingCycle: "月付",
        features: ["品牌在 ChatGPT / Gemini / Google AI Overviews 的跟踪", "AI 文章与站点审计"]
      },
      {
        name: "Basic",
        price: "$249",
        billingCycle: "月付",
        features: ["SEO + GEO 一体化", "品牌跟踪与可见性缺口修复"]
      },
      {
        name: "Growth",
        price: "$499",
        billingCycle: "月付",
        features: ["AI 可见性跟踪并可直接执行优化", "舆情分析、Action Center、Agent 工作流"]
      },
      {
        name: "Enterprise",
        price: "定制",
        billingCycle: "按需报价",
        features: ["全量 SEO + GEO", "全部 10 个 AI 平台", "专属策略团队"]
      }
    ],
    seoKeywords: ["Writesonic", "GEO 优化", "AI 搜索可见性", "AI Search Growth Engine", "品牌 AI 监测"]
  }
];
