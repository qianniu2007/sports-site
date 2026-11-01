/* ============================================================
   sports-site —— 赛程交互脚本 matches.js
   ------------------------------------------------------------
   这一页演示"交互元素"：
   1) 一组赛程数据（MATCHES 数组）
   2) 点击筛选按钮 -> 只显示对应联赛的场次

   【怎么替换成你自己的数据】
   找到下面的 MATCHES 数组，把每个对象的字段改成真实赛程即可。
   每个对象有 5 个字段：
     - league : "football" 或 "basketball"（决定被哪个按钮筛出来）
     - date   : 日期文本
     - teams  : 对阵双方
     - score  : 比分（未开赛可填 "–"）
     - status : "已完赛" / "未开始" 等
   ============================================================ */

// 赛程数据（示例，请替换为你自己的真实赛程）
var MATCHES = [
  { league: "football",   date: "11-02 周六", teams: "城北联队 vs 滨江之星", score: "2–1", status: "已完赛" },
  { league: "football",   date: "11-02 周六", teams: "河西雄鹰 vs 东山勇士", score: "–",   status: "未开始" },
  { league: "football",   date: "11-03 周日", teams: "南山风暴 vs 港口竞技", score: "0–0", status: "已完赛" },
  { league: "basketball", date: "11-02 周六", teams: "临港鲨鱼 vs 湖畔飞人", score: "88–92", status: "已完赛" },
  { league: "basketball", date: "11-03 周日", teams: "东区闪电 vs 南城野马", score: "–",   status: "未开始" },
  { league: "football",   date: "11-04 周一", teams: "北郊联 vs 云岭FC",    score: "1–3", status: "已完赛" }
];

// 当前选中的联赛："all" / "football" / "basketball"
var currentFilter = "all";

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
  renderMatches();
  bindFilters();
});

/* ---------- 渲染赛程列表 ----------
   根据 currentFilter 过滤 MATCHES，然后生成 <ul> 放进页面。
   用 createElement 生成节点（比拼字符串更安全，能避免 XSS 注入）。 */
function renderMatches() {
  var container = document.getElementById("match-list");
  if (!container) return;

  // 先按当前筛选过滤数据
  var list = MATCHES.filter(function (m) {
    return currentFilter === "all" || m.league === currentFilter;
  });

  // 清空旧的列表
  container.innerHTML = "";

  if (list.length === 0) {
    // 空状态：给用户一个友好的提示
    var empty = document.createElement("p");
    empty.textContent = "这个分类暂时没有场次。";
    container.appendChild(empty);
    return;
  }

  // 生成列表
  var ul = document.createElement("ul");
  ul.className = "match-items";

  list.forEach(function (m) {
    var li = document.createElement("li");
    li.className = "match-item";

    // 用 textContent 写入文本，安全（不会把内容当 HTML 执行）
    var date = document.createElement("span");
    date.className = "m-date";
    date.textContent = m.date;

    var teams = document.createElement("span");
    teams.className = "m-teams";
    teams.textContent = m.teams;

    var score = document.createElement("span");
    score.className = "m-score";
    score.textContent = m.score;

    var status = document.createElement("span");
    status.className = "m-status";
    status.textContent = m.status;

    li.appendChild(date);
    li.appendChild(teams);
    li.appendChild(score);
    li.appendChild(status);

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

/* ---------- 绑定筛选按钮 ----------
   点击某个按钮时：
   1) 更新 currentFilter
   2) 更新所有按钮的 aria-pressed 高亮态
   3) 重新渲染列表 */
function bindFilters() {
  var buttons = document.querySelectorAll(".filter-bar button");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentFilter = btn.getAttribute("data-filter");

      // 让被选中的按钮高亮，并同步 aria-pressed（无障碍状态）
      buttons.forEach(function (b) {
        var active = b === btn;
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });

      renderMatches();
    });
  });
}
