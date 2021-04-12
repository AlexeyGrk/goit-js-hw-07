const ref = {
  textSpanRef: document.querySelector("#text"),
  sizeControlBtn: document.querySelector("#font-size-control"),
};
const getSizeText = (event) => {
  ref.textSpanRef.style.fontSize = `${event.currentTarget.value}px`;
};
ref.sizeControlBtn.addEventListener("input", getSizeText);
