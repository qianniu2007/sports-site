/* ============================================================
   sports-site —— 数据统计脚本 stats.js
   ------------------------------------------------------------
   演示交互式数据可视化：
   - 每组球队有近 5 场的得分数据（TEAMS_STATS）
   - 点击球队按钮 -> 重新计算柱状图每根柱子的高度
   - 同时更新旁边的"文字版表格"（无障碍替代）

   【柱子高度怎么算】
   柱子的高度（百分比）= 该场得分 ÷ 本队最高得分 × 100%。
   这样最高的一场会是 100%，其余按比例缩放。
   ============================================================ */

// 各队近 5 场得分（示例数据，请替换成你自己的）
var TEAMS_STATS = {
  "城北联队": [2, 1, 3, 0, 2],
  "滨江之星": [1, 2, 2, 3, 1],
  "临港鲨鱼": [88, 95, 80, 102, 91],
  "东区闪电": [76, 82, 85, 79, 88]
};

// 当前选中的球队
var currentTeam = "城北联队";

document.addEventListener("DOMContentLoaded", function () {
  renderChart();
  bindTeamButtons();
});

/* ---------- 渲染柱状图 + 文字表格 ---------- */
function renderChart() {
  var barsEl = document.getElementById("bars");
  var tableBody = document.getElementById("chart-table-body");
  if (!barsEl) return;

  var data = TEAMS_STATS[currentTeam] || [];

  // 找出本队最高分，用于计算高度比例
  var max = Math.max.apply(null, data);

  // 清空旧的柱子
  barsEl.innerHTML = "";

  data.forEach(function (value, index) {
    // 高度比例（1~100）
    var heightPct = max > 0 ? Math.round((value / max) * 100) : 0;

    // 一根柱子
    var bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = heightPct + "%";

    // 柱顶显示数值
    var val = document.createElement("span");
    val.className = "bar-value";
    val.textContent = value;
    bar.appendChild(val);

    // 柱底显示场次
    var label = document.createElement("span");
    label.className = "bar-label";
    label.textContent = "第" + (index + 1) + "场";
    bar.appendChild(label);

    barsEl.appendChild(bar);
  });

  // 同步更新"文字版表格"（无障碍替代），并让屏幕阅读器能读到
  tableBody.innerHTML = "";
  data.forEach(function (value, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = "第" + (index + 1) + "场";
    var td2 = document.createElement("td");
    td2.textContent = value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tableBody.appendChild(tr);
  });

  // 更新图表的 aria-label，告诉屏幕阅读器当前是哪个队
  var figure = document.querySelector(".chart-figure");
  if (figure) {
    figure.setAttribute("aria-label", currentTeam + " 近5场得分柱状图");
  }
}

/* ---------- 绑定球队切换按钮 ---------- */
function bindTeamButtons() {
  var buttons = document.querySelectorAll("#team-select button");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentTeam = btn.getAttribute("data-team");

      // 更新按钮高亮态
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });

      renderChart();
    });
  });
}
