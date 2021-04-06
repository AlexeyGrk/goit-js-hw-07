const ulRef = document.querySelector("ul");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.forEach((elem) => {
  const liElem = document.createElement("li");
  liElem.textContent = elem;
  ulRef.append(liElem);
});
console.log(ulRef);
