export type ToolCategory =
  | "写作"
  | "图像"
  | "代码"
  | "视频"
  | "效率"
  | "营销";

export interface ToolPricingPlan {
  name: string;
  price: string;
  billingCycle: string;
  features: string[];
}

export interface AITool {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: ToolCategory;
  tags: string[];
  websiteUrl: string;
  affiliateUrl: string;
  features?: string[];
  useCases?: string[];
  pros?: string[];
  cons?: string[];
  pricingPlans?: ToolPricingPlan[];
  seoKeywords?: string[];
}
