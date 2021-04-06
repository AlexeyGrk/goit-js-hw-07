const allLiItem = document.querySelectorAll(".item");
const itemLenghtUl = `В списке ${allLiItem.length} категории.`;

const ulRef = document.getElementById("categories");
allLiItem.forEach((item) => {
  console.log(
    `Категория : ${item.firstElementChild.textContent}` +
      "\n" +
      `Количество элементов : ${item.querySelectorAll("li").length}`
  );
});
