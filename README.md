# Green Stand · Sports News Website

A multi-page static website built with **plain HTML + CSS + JavaScript** for the Web Technologies course. It brings together football and basketball schedules, results and key numbers in one clear view.

- **Live website:** https://qianniu2007.github.io/sports-site/
- **Repository:** https://github.com/qianniu2007/sports-site
- **Author:** WANG Youlin · Group 3 · X20250072
- **Course:** Web Technologies, Hainan Bielefeld University of Applied Sciences, 2026

The page content is in English; code comments are kept in Chinese as learning notes.

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home | `index.html` | Hero, latest news, this week's focus |
| Matches | `matches.html` | Weekly schedule, filterable by league (interactive) |
| Teams | `teams.html` | Team profiles, save your favourites (interactive) |
| Stats | `stats.html` | Switch teams to view a score chart (interactive) |
| About | `about.html` | About the site, tech stack, requirements checklist |

## Built with

- **HTML5** — semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`), skip link, `aria` attributes, keyboard focus
- **CSS3** — mobile-first responsive layout: one column on phones, multi-column on wide screens; sticky nav with a hamburger menu
- **Vanilla JavaScript** — no frameworks or build tools
- **localStorage** — favourite teams survive a page reload
- **GitHub Pages** — free static hosting, no server or database

## Course requirements

| Requirement | Where it's done |
| --- | --- |
| At least four pages | Home, Matches, Teams, Stats, About — five pages total |
| Working navigation | Shared sticky top nav, current page highlighted, hamburger on mobile |
| Own content | Original content around football and basketball |
| Semantic, accessible markup | Semantic tags, skip link, `aria-*`, visible keyboard focus |
| Responsive layout | Mobile-first CSS, works on a phone |
| At least one interactive element | League filter, favourite teams, stats chart switcher |
| Live at a real address | https://qianniu2007.github.io/sports-site/ |
| Git history | Full development tracked in commits |

## Run locally

No build step and no server required. Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/qianniu2007/sports-site.git
cd sports-site
# open index.html directly, or use VS Code Live Server
```

## Deploying updates

The site is published from the `main` branch via GitHub Pages. After a change:

```bash
git add .
git commit -m "describe the change"
git push origin main
```

GitHub Pages rebuilds automatically in a minute or two.

## Note on content

Team names, scores and statistics are fictional sample data used for demonstration.
