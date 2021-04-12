const ref = {
  inputRef: document.querySelector("#validation-input"),
};

ref.inputRef.addEventListener("change", (event) => {
  if (
    ref.inputRef.value.length ===
    parseInt(ref.inputRef.getAttribute("data-length"))
  ) {
    ref.inputRef.classList.add("valid");
    ref.inputRef.classList.remove("invalid");
  } else {
    ref.inputRef.classList.add("invalid");
    ref.inputRef.classList.remove("valid");
  }
});
