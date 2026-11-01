/* ============================================================
   sports-site —— 全局脚本 main.js
   ------------------------------------------------------------
   这个文件被所有页面共用，目前只做两件小事：
   1) 手机端汉堡菜单的展开/收起
   2) 页脚年份自动填充（省得每年手动改）

   用原生 JS，不依赖任何库。所有选择器都加了注释，
   方便你对照 HTML 结构理解。
   ============================================================ */

// 页面加载完成后执行，确保 DOM 元素都已就绪
document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  fillFooterYear();
});

/* ---------- 1) 汉堡菜单 ----------
   移动端导航是"折叠"的，点汉堡按钮展开。
   用 aria-expanded 告诉屏幕阅读器当前是开还是关，
   用 aria-controls 把按钮和菜单关联起来（无障碍要求）。
*/
function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-menu");

  if (!toggle || !menu) {
    return; // 页面上没有这两个元素就直接跳过
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    // 切换状态：开 -> 关，关 -> 开
    toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    menu.classList.toggle("open");
  });
}

/* ---------- 2) 页脚年份 ----------
   在 <span data-year></span> 里填入当前年份，
   这样页脚写"© 2026"也不用每年改代码。
*/
function fillFooterYear() {
  var el = document.querySelector("[data-year]");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}
