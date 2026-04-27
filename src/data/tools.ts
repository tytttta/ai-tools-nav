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
    id: "7",
    slug: "claude",
    name: "Claude",
    description: "擅长长文本理解与高质量写作的 AI 助手。",
    longDescription:
      "Claude 在长文总结、内容改写、商务邮件与知识问答方面表现稳定，适合内容团队和产品团队进行深度文本处理。",
    icon: "claude",
    category: "写作",
    tags: ["长文本", "总结", "内容创作"],
    websiteUrl: "https://claude.ai/",
    affiliateUrl: "https://example.com/affiliate/claude",
    features: ["长文本理解", "结构化写作", "语气改写"],
    useCases: ["研究整理", "商务写作", "知识库问答"],
    pros: ["长文处理能力强", "表达风格稳定"],
    cons: ["高级能力偏向订阅版本"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础额度", "标准写作能力"]
      },
      {
        name: "Pro",
        price: "$20",
        billingCycle: "月",
        features: ["更高配额", "优先模型访问"]
      }
    ],
    seoKeywords: ["Claude", "AI写作工具", "长文本总结"]
  },
  {
    id: "8",
    slug: "gemini",
    name: "Gemini",
    description: "Google 提供的多模态 AI 助手，覆盖写作与检索场景。",
    longDescription:
      "Gemini 支持文档处理、内容写作和信息查询，适合需要与 Google 生态协作的团队，提高办公与内容产出效率。",
    icon: "gemini",
    category: "写作",
    tags: ["多模态", "检索", "办公"],
    websiteUrl: "https://gemini.google.com/",
    affiliateUrl: "https://example.com/affiliate/gemini",
    features: ["多模态问答", "写作辅助", "信息检索"],
    useCases: ["办公写作", "报告初稿", "资料整合"],
    pros: ["Google 生态协同便利", "多模态能力实用"],
    cons: ["不同地区能力可用性差异"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["免费层访问", "基础额度"]
      },
      {
        name: "Advanced",
        price: "$19.99",
        billingCycle: "月",
        features: ["更高使用额度", "更强模型能力"]
      }
    ],
    seoKeywords: ["Gemini", "AI写作", "Google AI"]
  },
  {
    id: "9",
    slug: "copy-ai",
    name: "Copy.ai",
    description: "聚焦营销文案与销售素材生成的 AI 写作工具。",
    longDescription:
      "Copy.ai 面向市场与销售团队，提供广告文案、邮件模板、落地页文案与品牌内容生成，帮助提升内容产出效率。",
    icon: "copyai",
    category: "写作",
    tags: ["营销文案", "销售", "模板"],
    websiteUrl: "https://www.copy.ai/",
    affiliateUrl: "https://example.com/affiliate/copy-ai",
    features: ["营销模板", "销售邮件", "品牌语气管理"],
    useCases: ["广告文案", "销售拓客", "品牌运营"],
    pros: ["模板丰富", "业务导向强"],
    cons: ["通用推理能力较弱"],
    pricingPlans: [
      {
        name: "Starter",
        price: "$36",
        billingCycle: "月起",
        features: ["基础工作流", "内容模板库"]
      }
    ],
    seoKeywords: ["Copy.ai", "营销文案", "AI销售助手"]
  },
  {
    id: "10",
    slug: "writesonic",
    name: "Writesonic",
    description: "支持博客、SEO 和品牌内容生成的一体化写作平台。",
    longDescription:
      "Writesonic 适合内容运营与 SEO 团队，能快速生成文章草稿、标题方案和改写版本，缩短内容生产周期。",
    icon: "writesonic",
    category: "写作",
    tags: ["SEO", "博客", "内容运营"],
    websiteUrl: "https://writesonic.com/",
    affiliateUrl: "https://example.com/affiliate/writesonic",
    features: ["SEO 文章生成", "博客改写", "内容扩展"],
    useCases: ["内容运营", "SEO 团队", "站点增长"],
    pros: ["内容场景覆盖广", "价格门槛较低"],
    cons: ["专业内容需人工润色"],
    pricingPlans: [
      {
        name: "Basic",
        price: "$16",
        billingCycle: "月起",
        features: ["基础生成额度", "SEO 写作工具"]
      }
    ],
    seoKeywords: ["Writesonic", "SEO写作", "博客生成"]
  },
  {
    id: "11",
    slug: "perplexity",
    name: "Perplexity",
    description: "以检索增强见长的 AI 问答工具，适合快速查资料与总结。",
    longDescription:
      "Perplexity 结合实时检索与答案生成，支持来源引用与追问，适合研究、竞品分析和信息整合等场景。",
    icon: "perplexity",
    category: "写作",
    tags: ["检索", "研究", "问答"],
    websiteUrl: "https://www.perplexity.ai/",
    affiliateUrl: "https://example.com/affiliate/perplexity",
    features: ["联网检索", "来源引用", "多轮追问"],
    useCases: ["行业研究", "竞品分析", "资料整理"],
    pros: ["信息更新快", "引用来源便于校验"],
    cons: ["复杂结论仍需人工复核"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础检索问答", "有限使用额度"]
      },
      {
        name: "Pro",
        price: "$20",
        billingCycle: "月",
        features: ["更高额度", "高级模型访问"]
      }
    ],
    seoKeywords: ["Perplexity", "AI检索", "AI问答"]
  },
  {
    id: "12",
    slug: "cursor",
    name: "Cursor",
    description: "面向开发者的 AI 编辑器，支持代码生成、理解与重构。",
    longDescription:
      "Cursor 将 AI 能力深度集成到代码编辑流程中，可用于生成代码、解释项目结构、修复报错和批量重构，提高开发效率。",
    icon: "cursor",
    category: "代码",
    tags: ["IDE", "代码生成", "重构"],
    websiteUrl: "https://www.cursor.com/",
    affiliateUrl: "https://example.com/affiliate/cursor",
    features: ["项目级问答", "代码编辑建议", "重构辅助"],
    useCases: ["需求开发", "代码审查", "问题排查"],
    pros: ["与开发流程结合紧密", "大型项目理解更高效"],
    cons: ["高频使用依赖订阅与配额"],
    pricingPlans: [
      {
        name: "Hobby",
        price: "$0",
        billingCycle: "月",
        features: ["基础功能", "有限快速请求"]
      },
      {
        name: "Pro",
        price: "$20",
        billingCycle: "月",
        features: ["更高额度", "更强模型可用"]
      }
    ],
    seoKeywords: ["Cursor", "AI编程", "代码助手"]
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
  },
  {
    id: "14",
    slug: "heygen",
    name: "HeyGen",
    description: "AI 数字人视频生成平台，适合营销和培训内容制作。",
    longDescription:
      "HeyGen 支持数字人播报、多语言配音与模板化视频生成，可快速产出产品介绍、课程讲解和推广内容。",
    icon: "heygen",
    category: "视频",
    tags: ["数字人", "多语言", "视频营销"],
    websiteUrl: "https://www.heygen.com/",
    affiliateUrl: "https://example.com/affiliate/heygen",
    features: ["数字人模板", "多语言配音", "文本转视频"],
    useCases: ["营销宣传", "课程讲解", "产品演示"],
    pros: ["出片速度快", "适合批量内容生产"],
    cons: ["高级模板与额度依赖付费方案"],
    pricingPlans: [
      {
        name: "Creator",
        price: "$29",
        billingCycle: "月起",
        features: ["基础视频生成", "标准素材模板"]
      }
    ],
    seoKeywords: ["HeyGen", "AI视频", "数字人视频"]
  },
  {
    id: "15",
    slug: "zapier-ai",
    name: "Zapier AI",
    description: "将 AI 与自动化工作流结合，降低跨工具协作成本。",
    longDescription:
      "Zapier AI 可把表单、邮件、CRM 和文档系统串联成自动流程，并通过 AI 完成分类、摘要与内容生成等任务。",
    icon: "zapier",
    category: "效率",
    tags: ["自动化", "工作流", "集成"],
    websiteUrl: "https://zapier.com/ai",
    affiliateUrl: "https://example.com/affiliate/zapier-ai",
    features: ["跨应用自动化", "AI 字段处理", "流程模板"],
    useCases: ["线索分发", "邮件自动处理", "数据同步"],
    pros: ["生态集成广", "自动化落地速度快"],
    cons: ["复杂流程维护成本较高"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础自动化任务", "有限触发次数"]
      },
      {
        name: "Professional",
        price: "$19.99",
        billingCycle: "月起",
        features: ["多步骤工作流", "更高任务额度"]
      }
    ],
    seoKeywords: ["Zapier AI", "AI自动化", "工作流工具"]
  },
  {
    id: "16",
    slug: "windsurf",
    name: "Windsurf",
    description: "面向工程团队的 AI 编程助手，强调项目级协作开发体验。",
    longDescription:
      "Windsurf 支持代码生成、上下文理解和跨文件修改建议，适合在真实项目中进行功能开发、重构和调试。",
    icon: "windsurf",
    category: "代码",
    tags: ["编程助手", "工程化", "IDE"],
    websiteUrl: "https://windsurf.com/",
    affiliateUrl: "https://example.com/affiliate/windsurf",
    features: ["跨文件上下文", "代码生成", "调试辅助"],
    useCases: ["需求迭代", "重构优化", "错误修复"],
    pros: ["项目上下文理解较好", "开发流畅度高"],
    cons: ["复杂仓库效果依赖上下文质量"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础功能", "有限额度"]
      },
      {
        name: "Pro",
        price: "$15",
        billingCycle: "月起",
        features: ["更高额度", "高级能力访问"]
      }
    ],
    seoKeywords: ["Windsurf", "AI编程工具", "代码助手"]
  },
  {
    id: "17",
    slug: "v0",
    name: "v0",
    description: "通过自然语言快速生成前端界面代码的 AI 工具。",
    longDescription:
      "v0 面向产品和前端团队，可根据描述生成页面结构、组件布局与样式代码，适合原型验证和业务页面搭建。",
    icon: "v0",
    category: "代码",
    tags: ["前端", "UI", "原型"],
    websiteUrl: "https://v0.dev/",
    affiliateUrl: "https://example.com/affiliate/v0",
    features: ["文本生成 UI", "组件代码输出", "快速迭代"],
    useCases: ["页面原型", "运营页搭建", "组件草稿"],
    pros: ["上手门槛低", "出稿速度快"],
    cons: ["复杂交互仍需手工完善"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础生成", "有限请求"]
      },
      {
        name: "Premium",
        price: "$20",
        billingCycle: "月起",
        features: ["更高请求额度", "高级生成模式"]
      }
    ],
    seoKeywords: ["v0", "AI前端", "UI代码生成"]
  },
  {
    id: "18",
    slug: "pika",
    name: "Pika",
    description: "文本/图片生成短视频的 AI 创作工具。",
    longDescription:
      "Pika 适合创意短片、社媒视频和产品演示场景，支持文生视频、图生视频及动态效果调整。",
    icon: "pika",
    category: "视频",
    tags: ["短视频", "创意", "文生视频"],
    websiteUrl: "https://pika.art/",
    affiliateUrl: "https://example.com/affiliate/pika",
    features: ["文生视频", "图生视频", "镜头效果编辑"],
    useCases: ["社媒内容", "品牌创意", "产品展示"],
    pros: ["创意表达灵活", "成片速度快"],
    cons: ["高质量结果需多次迭代"],
    pricingPlans: [
      {
        name: "Standard",
        price: "$10",
        billingCycle: "月起",
        features: ["基础视频生成", "标准导出"]
      }
    ],
    seoKeywords: ["Pika", "AI视频生成", "短视频工具"]
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
    id: "20",
    slug: "gamma",
    name: "Gamma",
    description: "用 AI 快速生成演示文稿与文档页面的效率工具。",
    longDescription:
      "Gamma 可根据主题一键生成演示结构、页面文案和视觉排版，适合汇报、培训和提案场景，提高内容交付效率。",
    icon: "gamma",
    category: "效率",
    tags: ["PPT", "汇报", "文档"],
    websiteUrl: "https://gamma.app/",
    affiliateUrl: "https://example.com/affiliate/gamma",
    features: ["一键生成演示", "自动排版", "在线分享"],
    useCases: ["项目汇报", "销售提案", "培训资料"],
    pros: ["产出速度快", "视觉一致性好"],
    cons: ["深度品牌定制能力有限"],
    pricingPlans: [
      {
        name: "Free",
        price: "$0",
        billingCycle: "月",
        features: ["基础文档与演示", "有限 AI 额度"]
      },
      {
        name: "Plus",
        price: "$10",
        billingCycle: "月起",
        features: ["更高生成额度", "高级导出能力"]
      }
    ],
    seoKeywords: ["Gamma", "AI演示工具", "AI文档生成"]
  },
  {
    id: "21",
    slug: "suno",
    name: "Suno",
    description: "基于文本生成音乐与歌曲内容的 AI 创作平台。",
    longDescription:
      "Suno 适合短视频配乐、品牌音乐尝试和创意音频制作，可通过简单描述快速生成完整音乐片段。",
    icon: "suno",
    category: "营销",
    tags: ["音乐生成", "音频", "创意营销"],
    websiteUrl: "https://suno.com/",
    affiliateUrl: "https://example.com/affiliate/suno",
    features: ["文本生成音乐", "多风格曲目", "快速试听导出"],
    useCases: ["短视频配乐", "品牌内容", "创意实验"],
    pros: ["创作门槛低", "灵感产出效率高"],
    cons: ["商用与版权需按平台规则核验"],
    pricingPlans: [
      {
        name: "Basic",
        price: "$0",
        billingCycle: "月",
        features: ["基础生成额度", "标准音频质量"]
      },
      {
        name: "Pro",
        price: "$10",
        billingCycle: "月起",
        features: ["更高额度", "更多商用能力"]
      }
    ],
    seoKeywords: ["Suno", "AI音乐生成", "音频创作"]
  }
];
