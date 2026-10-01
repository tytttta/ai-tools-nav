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
    description: "AI 视频生成与编辑平台，从文本或图片生成视频，并提供完整的后期编辑工具链。",
    longDescription:
      "Runway 是面向创作者的 AI 视频平台：支持文本生成视频、图生视频、背景替换、镜头扩展与 4K 放大，并提供帧级精确的协作评论。所有套餐按积分（credits）计费，不同档位对应不同的并行生成数量、项目数和素材存储。个人档适合独立创作者，团队档适合有高产能需求的制作团队。",
    icon: "runway",
    category: "视频",
    tags: ["短视频", "剪辑", "生成式视频", "AI 视频"],
    websiteUrl: "https://runway.com/",
    affiliateUrl: "https://example.com/affiliate/runway",
    features: [
      "文本生成视频、图生视频",
      "并行生成多条视频与图像",
      "音乐、配音与音效生成",
      "4K 画质放大",
      "帧级精确的协作评论（@ 提及）",
      "品牌套件与自定义语音克隆"
    ],
    useCases: [
      "短视频与社媒内容制作",
      "广告与创意短片",
      "概念视觉与分镜预览",
      "团队协作的视频生产流程"
    ],
    pros: [
      "生成质量在同类工具中领先",
      "编辑工具链完整，从生成到后期一站完成",
      "免费档含 125 一次性积分，可直接试跑"
    ],
    cons: [
      "按积分计费，高频使用成本上升较快",
      "免费档积分是一次性的，不是每月刷新",
      "团队档按席位计费，$69/席位/月门槛不低"
    ],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月付",
        features: ["125 一次性积分", "部分生成模型试用", "5GB 素材存储"]
      },
      {
        name: "Standard",
        price: "$15（年付 $12）",
        billingCycle: "月付",
        features: ["625 积分/月", "并行生成 5 条视频与图像", "最多 3 个项目", "去水印", "4K 放大", "20GB 存储"]
      },
      {
        name: "Pro",
        price: "$35（年付 $28）",
        billingCycle: "月付",
        features: ["2250 积分/月", "并行生成 15 条视频与图像", "最多 5 个项目", "1 个品牌套件", "1 个自定义语音克隆"]
      },
      {
        name: "Max",
        price: "$95（年付 $76）",
        billingCycle: "月付",
        features: ["9500 积分/月", "并行生成 20 条视频与图像", "最多 10 个项目", "3 个品牌套件", "3 个自定义语音克隆", "未用积分可结转 1 个月"]
      }
    ],
    seoKeywords: ["Runway", "AI 视频生成", "文生视频", "AI 剪辑工具", "Runway 价格"]
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
    description: "面向营销团队的 AI 平台：用 AI Agents 维持品牌一致性，并把内容生产流程规模化。",
    longDescription:
      "Jasper 是面向营销团队的企业级 AI 平台。它围绕品牌一致性设计：通过 Brand Voices、Knowledge assets（知识资产）和 Audiences（受众）三类配置，让 AI 产出始终符合品牌语气。Pro 档按席位计费，含 Canvas 内容创作平台与核心营销工作流的 AI Agents；Business 档在其之上加入复杂营销工作流（GEO、翻译、深度研究）、无代码 AI Agent 构建器、Jasper Grid 与 API 访问。提供 7 天免费试用。",
    icon: "jasper",
    category: "营销",
    tags: ["营销", "品牌一致性", "AI Agent", "内容规模化"],
    websiteUrl: "https://www.jasper.ai/",
    affiliateUrl: "https://example.com/affiliate/jasper",
    features: [
      "Canvas 平台，加速品牌一致的内容创作",
      "核心营销工作流的 AI Agents",
      "品牌语气与知识资产管理",
      "多受众定向（Audiences）",
      "无代码 AI Agent 构建器（Business）",
      "Jasper Grid 系统性内容执行（Business）",
      "API 访问（Business）"
    ],
    useCases: [
      "营销团队规模化内容生产",
      "品牌语气统一管理",
      "代理商为客户批量产出内容",
      "复杂营销工作流自动化"
    ],
    pros: [
      "品牌一致性控制强，适合多人协作的营销团队",
      "提供 7 天免费试用，可先验证再付费",
      "Business 档可自建 AI Agent，扩展性高"
    ],
    cons: [
      "按席位计费，Pro 档 $69/席位/月，小团队成本不低",
      "没有长期免费档，只有 7 天试用",
      "面向团队设计，个人创作者性价比低"
    ],
    pricingPlans: [
      {
        name: "Pro",
        price: "$69（年付 $59）",
        billingCycle: "每席位/月",
        features: ["含 1 个席位", "Canvas 内容创作平台", "核心营销工作流 AI Agents", "2 个品牌语气、5 个知识资产、3 个受众"]
      },
      {
        name: "Business",
        price: "定制报价",
        billingCycle: "按需报价",
        features: ["包含 Pro 全部功能", "复杂工作流 Agent（GEO、翻译、深度研究）", "无代码 AI Agent 构建器", "Jasper Grid", "无限品牌语气/知识资产/受众", "API 访问"]
      }
    ],
    seoKeywords: ["Jasper", "Jasper AI 价格", "AI 营销平台", "品牌一致性工具"]
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
  },

  {
    id: "20",
    slug: "gamma",
    name: "Gamma",
    description: "用 AI 生成演示文稿、文档与网页，按席位计费的团队协作型创作工具。",
    longDescription:
      "Gamma 用 AI 把想法直接变成可演示的内容：输入主题即可生成演示文稿、文档或网页，并支持从 PDF 与 PPTX 导入既有材料。所有套餐按使用额度（credits）计费——免费档注册即得 400 额度，付费档为每月额度并逐级提升单次生成上限（10 张 / 100 张幻灯片）。高级档位加入自定义品牌、详细分析、API 访问与自定义域名。按年付费最多可节省 28%。",
    icon: "gamma",
    category: "效率",
    tags: ["演示文稿", "PPT", "AI 生成", "文档"],
    websiteUrl: "https://gamma.app/",
    affiliateUrl: "https://example.com/affiliate/gamma",
    features: [
      "一句话生成演示文稿、文档与网页",
      "支持从 PDF 与 PPTX 导入",
      "单次提示最多生成 100 张幻灯片",
      "自定义品牌与主题",
      "详细分析与高级分享",
      "API 访问与自定义域名（高级档）"
    ],
    useCases: [
      "快速产出汇报与提案演示",
      "社交媒体与营销素材",
      "把既有 PPT / PDF 转成新格式",
      "团队统一品牌模板"
    ],
    pros: [
      "免费档无需信用卡，注册即得 400 额度，上手门槛低",
      "从 PDF / PPTX 导入，迁移既有材料方便",
      "按年付费可省约 28%，团队规模越大越划算"
    ],
    cons: [
      "免费档带 Gamma 品牌标识，去标需升级 Plus",
      "按席位计费，团队使用成本随人数线性上升",
      "额度按月计算，重度使用可能提前耗尽"
    ],
    pricingPlans: [
      {
        name: "Free",
        price: "US$0",
        billingCycle: "月付",
        features: ["注册即得 400 使用额度", "单次提示最多 10 张幻灯片", "演示文稿 / 文档 / 网页 / 社交媒体", "支持从 PDF 与 PPTX 导入"]
      },
      {
        name: "Plus",
        price: "US$12（按年付 US$9）",
        billingCycle: "每席位/月",
        features: ["每月 1,000 使用额度", "单次提示最多 100 张幻灯片", "移除 Gamma 品牌标识", "先进的 AI 图像模型"]
      },
      {
        name: "Pro",
        price: "US$25（按年付 US$18）",
        billingCycle: "每席位/月",
        features: ["每月 4,000 使用额度", "高级 AI 图像模型", "自定义品牌", "详细分析和高级分享", "发布多达 10 个自定义域名", "API 访问权限"]
      },
      {
        name: "Ultra",
        price: "US$100（按年付 US$90）",
        billingCycle: "每席位/月",
        features: ["每月 20,000 使用额度", "访问最先进的 AI 模型（文本、图像、视频）", "发布多达 100 个自定义域名", "抢先体验新功能"]
      }
    ],
    seoKeywords: ["Gamma", "Gamma 价格", "AI 生成 PPT", "AI 演示文稿工具"]
  },

  {
    id: "14",
    slug: "heygen",
    name: "HeyGen",
    description: "AI 数字人与口播视频生成平台，支持语音克隆与 175+ 种语言，适合营销与出海内容。",
    longDescription:
      "HeyGen 用 AI 数字人把文本变成口播视频：支持自定义视频形象（Avatar）、语音克隆与 175+ 种语言配音，适合做产品讲解、营销投放与多语言出海内容。个人档按积分（credits）计费，免费档每月 3 条视频、最长 1 分钟；付费档解锁 30 分钟长视频、1080p / 4K 导出、去水印与积分结转。另有面向团队与企业的档位。",
    icon: "heygen",
    category: "视频",
    tags: ["数字人", "口播视频", "语音克隆", "多语言"],
    websiteUrl: "https://www.heygen.com/",
    affiliateUrl: "https://example.com/affiliate/heygen",
    features: [
      "AI 数字人口播视频生成",
      "自定义视频形象（Avatar）与照片数字人",
      "语音克隆与 175+ 种语言配音",
      "最长 30 分钟视频、4K 导出",
      "视频翻译与脚本校对",
      "积分结转（付费档）"
    ],
    useCases: [
      "产品讲解与营销投放视频",
      "多语言出海内容本地化",
      "无需出镜的知识类口播内容",
      "企业培训与内部说明视频"
    ],
    pros: [
      "数字人效果自然，支持自定义形象与语音克隆",
      "175+ 语言配音，做多语言出海内容省事",
      "免费档可零成本试跑（每月 3 条、最长 1 分钟）"
    ],
    cons: [
      "免费档限制明显：3 条/月、最长 1 分钟、带水印",
      "按积分计费，长视频消耗快，重度使用需升档",
      "4K 导出需 Pro 档（$49/月起）"
    ],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月付",
        features: ["每月 3 条视频", "视频最长 1 分钟", "Avatar IV 访问权限", "500+ 库存视频形象", "1 个自定义视频形象", "30+ 种语言"]
      },
      {
        name: "Creator",
        price: "$29（年付 $24）",
        billingCycle: "月付",
        features: ["600 credits", "视频最长 30 分钟", "1080p 导出", "照片数字人无限制", "去水印", "语音克隆", "175+ 种语言与方言", "积分可结转"]
      },
      {
        name: "Pro",
        price: "$49（年付 $41）",
        billingCycle: "月付",
        features: ["1,000 credits", "视频最长 30 分钟", "4K 视频导出", "可自定义每月用量", "编辑与校对翻译脚本", "可访问全部高级 AI 模型"]
      }
    ],
    seoKeywords: ["HeyGen", "HeyGen 价格", "AI 数字人", "AI 口播视频", "视频翻译工具"]
  },

  {
    id: "19",
    slug: "canva-magic-studio",
    name: "Canva Magic Studio",
    description: "将设计模板与 AI 生成功能结合的一体化创意平台。",
    longDescription:
      "Canva Magic Studio 支持文案生成、图片扩展、素材替换和品牌套版，适合营销与设计团队高效产出视觉内容。",
    icon: "canva",
    category: "图像",
    tags: ["平面设计", "营销素材", "模板"],
    websiteUrl: "https://www.canva.com/magic-studio/",
    affiliateUrl: "https://example.com/affiliate/canva-magic-studio",
    features: ["模板化设计", "AI 图像编辑", "品牌套件"],
    useCases: ["社媒海报", "活动视觉", "品牌素材"],
    pros: ["模板资源丰富", "团队协作方便"],
    cons: ["高度定制设计仍需专业工具"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础模板与编辑", "有限 AI 功能"]
      },
      {
        name: "Pro",
        price: "$14.99",
        billingCycle: "月起",
        features: ["更多高级模板", "更完整 AI 能力"]
      }
    ],
    seoKeywords: ["Canva Magic Studio", "AI设计", "营销素材"]
  },

  {
    id: "13",
    slug: "leonardo-ai",
    name: "Leonardo AI",
    description: "适合营销和设计团队的 AI 图像生成工具。",
    longDescription:
      "Leonardo AI 提供模型风格控制、素材批量生成和图像细节调整，适合电商素材、品牌视觉和社媒创意制作。",
    icon: "leonardo",
    category: "图像",
    tags: ["设计", "电商", "视觉素材"],
    websiteUrl: "https://leonardo.ai/",
    affiliateUrl: "https://example.com/affiliate/leonardo-ai",
    features: ["风格控制", "批量出图", "图像增强"],
    useCases: ["电商主图", "社媒海报", "品牌视觉"],
    pros: ["产出效率高", "参数控制灵活"],
    cons: ["复杂风格需多轮调参"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础额度", "标准图像生成"]
      },
      {
        name: "Apprentice",
        price: "$12",
        billingCycle: "月起",
        features: ["更高积分", "更多高级功能"]
      }
    ],
    seoKeywords: ["Leonardo AI", "AI绘图", "设计工具"]
  }
];
