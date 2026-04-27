# AI 工具导航（Next.js 14）

基于 Next.js 14 App Router + TypeScript + Tailwind CSS 的 AI 工具导航站模板，支持：

- 工具卡片展示（名称、描述、图标、分类）
- 分类筛选
- 搜索功能
- 工具详情页（包含 affiliate 链接位）
- 响应式布局

## 1. 安装依赖

```bash
npm install
```

## 2. 本地启动

```bash
npm run dev
```

访问：`http://localhost:3000`

## 3. 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 导入仓库
3. 选择默认构建配置（Next.js）
4. 点击 Deploy

## 4. 数据扩展

当前工具数据在 `src/data/tools.ts`，新增条目后会自动出现在首页与详情页。
