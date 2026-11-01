/* ============================================================
   sports-site —— 收藏球队脚本 teams.js
   ------------------------------------------------------------
   演示第二个交互元素：收藏球队。
   - 点星星切换收藏状态
   - 用 localStorage 把"我收藏了哪些球队"存在浏览器里
     （localStorage 是浏览器自带的小型存储，无需服务器/数据库）
   - 刷新页面后，读 localStorage 恢复收藏状态

   【localStorage 说明】
   它是"键值对"存储，只能存字符串。
   这里用一个键 "favoriteTeams"，值是球队名的数组（转成 JSON 字符串）。
   ============================================================ */

var STORAGE_KEY = "favoriteTeams";

// 页面加载后：初始化所有收藏按钮的状态
document.addEventListener("DOMContentLoaded", function () {
  bindFavoriteButtons();
  restoreFavorites();
});

/* 读取当前已收藏的球队名数组 */
function getFavorites() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    // 如果还没有存过，返回空数组
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return []; // 万一数据损坏，当作没收藏
  }
}

/* 写入收藏数组 */
function saveFavorites(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

/* 给每个收藏按钮绑定点击事件 */
function bindFavoriteButtons() {
  var buttons = document.querySelectorAll(".fav-btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".card");           // 找到所在的球队卡片
      var name = card.getAttribute("data-name"); // 球队唯一标识
      toggleFavorite(btn, name);
    });
  });
}

/* 切换某支球队的收藏状态 */
function toggleFavorite(btn, name) {
  var list = getFavorites();
  var index = list.indexOf(name);

  if (index === -1) {
    list.push(name);          // 收藏
  } else {
    list.splice(index, 1);    // 取消收藏
  }

  saveFavorites(list);
  updateButton(btn, index === -1); // 现在是否处于"已收藏"
}

/* 根据是否收藏，更新按钮状态（外观由 CSS 根据 aria-pressed 控制） */
function updateButton(btn, isFav) {
  btn.setAttribute("aria-pressed", isFav ? "true" : "false");
  // 同步更新按钮的可访问名称（屏幕阅读器会读到"取消收藏/收藏"）
  var cardName = btn.closest(".card").getAttribute("data-name");
  btn.setAttribute("aria-label", (isFav ? "取消收藏 " : "收藏 ") + cardName);
}

/* 页面打开时，把之前收藏过的球队按钮点亮 */
function restoreFavorites() {
  var list = getFavorites();
  document.querySelectorAll(".fav-btn").forEach(function (btn) {
    var name = btn.closest(".card").getAttribute("data-name");
    if (list.indexOf(name) !== -1) {
      updateButton(btn, true);
    }
  });
}
