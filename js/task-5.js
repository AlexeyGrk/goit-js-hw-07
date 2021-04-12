const inputRef = document.querySelector("#name-input");
const nameLabelref = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (nameLabelref.textContent === "") {
    nameLabelref.textContent = "незнакомец";
  }
  nameLabelref.textContent = event.target.value;
});
