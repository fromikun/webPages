// 获取元素并添加到这个组
let elements = {
  chuSheng: document.getElementById("chuSheng"),
  chengZhang: document.getElementById("chengZhang"),
  chengShu: document.getElementById("chengShu"),
  suaiTui: document.getElementById("suaiTui"),
  back01: document.querySelectorAll(".back1"),
  back02: document.querySelectorAll(".back2"),
  back03: document.querySelectorAll(".back3"),
  back04: document.querySelectorAll(".back4"),
};

// 样式规则
function toggleElements(elementsKey) {
  Array.from(elements[elementsKey]).forEach(function (item) {
    if (item.style.display === "none") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// 添加事件
elements.chuSheng.addEventListener("click", function () {
  toggleElements("back01");
});

elements.chengZhang.addEventListener("click", function () {
  toggleElements("back02");
});

elements.chengShu.addEventListener("click", function () {
  toggleElements("back03");
});

elements.suaiTui.addEventListener("click", function () {
  toggleElements("back04");
});

// 图片切换
// 获取所有更改图像源的按钮
const buttons = document.querySelectorAll(".src-button");
const image = document.getElementById("img-1");

// 为每个按钮添加点击事件监听器
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // 获取按钮的data-img-src属性并更新图像的src属性
    const newSrc = this.getAttribute("img-src");
    image.src = newSrc;
  });
});
