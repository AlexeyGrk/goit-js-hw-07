const ref = {
  boxesRef: document.querySelector("#boxes"),
  buttonCreateEl: document.querySelector('[data-action="render"]'),
  buttonClearElem: document.querySelector('[data-action ="destroy"]'),
};
ref.buttonCreateEl.addEventListener("click", getAmount);
ref.buttonClearElem.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    var size = basicSize + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
console.log(ref.buttonClearElem);
