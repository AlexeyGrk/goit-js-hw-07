let counterValue = 0;
const ref = {
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  counterValue: document.querySelector("#value"),
};

ref.btnDecrement.addEventListener("click", decrement);
ref.btnIncrement.addEventListener("click", increment);

function increment() {
  counterValue += 1;
  render();
}
function decrement() {
  counterValue -= 1;
  render();
}
function render() {
  ref.counterValue.textContent = counterValue;
}
