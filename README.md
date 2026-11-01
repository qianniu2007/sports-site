# Green Stand · Sports News Website

A multi-page static website built with **plain HTML + CSS + JavaScript**, for a course project. It organises the football and basketball schedules, results and key numbers you follow. **The site content is in English** (the code comments are in Chinese, as learning notes).

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home | `index.html` | Hero + latest news + this week's focus |
| Matches | `matches.html` | Weekly schedule filterable by league (interactive) |
| Teams | `teams.html` | Team profiles + save your favourites (interactive) |
| Stats | `stats.html` | Switch teams to view a score bar chart (interactive) |
| About | `about.html` | What the site is, tech stack, requirement checklist |

## 目录结构

```
sports-site/
├── index.html          # 首页
├── matches.html        # 赛程赛果
├── teams.html          # 球队百科
├── stats.html          # 数据统计
├── about.html          # 关于本站
├── css/
│   └── style.css       # 全局样式（含响应式 + 无障碍）
├── js/
│   ├── main.js         # 汉堡菜单、页脚年份
│   ├── matches.js      # 赛程筛选
│   ├── teams.js        # 收藏球队（localStorage）
│   └── stats.js        # 数据图表
└── assets/             # 图片素材（你自己加的图片放这里）
```

## 在本地打开

直接用浏览器双击 `index.html` 即可预览（无需服务器）。或者用 VS Code 的 Live Server 插件，体验更接近线上效果。

## 如何上线到 GitHub Pages（真实地址）

网站是纯静态的，不需要服务器和数据库，最适合用 **GitHub Pages** 免费托管。

1. **注册并安装 Git**：到 [git-scm.com](https://git-scm.com/downloads) 下载安装；到 [github.com](https://github.com) 注册账号。
2. **在 GitHub 新建仓库**：登录后点右上角「+」→ New repository，仓库名建议 `sports-site`，选 **Public**（免费 Pages 需要公开），勾选「Add a README」。
3. **把本地代码推到仓库**（在 `sports-site` 文件夹打开终端）：

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/sports-site.git
   git push -u origin main
   ```

4. **开启 Pages**：仓库页面 → Settings → 左侧 Pages → Source 选 `Deploy from a branch` → Branch 选 `main` 和 `/ (root)` → Save。等一两分钟。
5. 浏览器打开 `https://你的用户名.github.io/sports-site/` 就能看到你的网站了。
6. 以后每次改动代码，`git add .` → `git commit` → `git push`，网站会自动更新。

## 自定义内容

页面里的球队、比分、数据都是**示例**，方便演示。替换成你自己的真实内容：

- 各页面的球队名、比分 → 编辑对应 `js/*.js` 里的数据数组
- 页面文字 → 直接改 `.html` 文件
- 加图片 → 放进 `assets/`，在 HTML 里用 `<img src="assets/xxx.jpg" alt="描述">` 引用

## 作业要求对照

见「关于本站」页面里的表格，或用 Git 提交历史展示开发过程。

## 说明

本项目为课程作业演示，所有球队与赛事均为虚构示例数据，无真实赛事引用。
