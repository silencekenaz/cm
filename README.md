# 神人 cm · 个人主页

一个纯静态个人主页，收录类型学坐标、神话阅读档案与德尔斐诗歌体神谕。
页面以 vinext 构建，并导出为可直接托管在 GitHub Pages 的 HTML、CSS、
JavaScript 和图片；不使用数据库、服务端 API、SSR 或边缘 Worker。

## Prerequisites

- Node.js `>=22.13.0`

## 本地预览

```bash
npm install
npm run dev
npm run build
npm run preview
```

开发服务器默认运行在 `http://localhost:3000`。`npm run build` 生成的静态文件位于
`dist/client/`。

## 页面

- `/`：个人介绍、类型学、德尔斐神谕与阿波罗故事彩蛋
- `/myths`：希腊、北欧、埃及、两河、凯尔特与中国神话阅读书目

## GitHub Pages

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会构建并发布
`dist/client/`。仓库子路径会在构建时自动注入，因此资源和页面链接可在
`/<仓库名>/` 下正常工作。

## 常用命令

- `npm run dev`：启动本地开发预览
- `npm run build`：生成静态站点
- `npm run preview`：预览 `dist/client/`
- `npm test`：构建并检查关键静态页面
- `npm run lint`：检查源码

## 技术说明

- [vinext](https://github.com/cloudflare/vinext)
- [GitHub Pages 自定义 Actions 工作流](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
