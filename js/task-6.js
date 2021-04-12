const ref = {
  inputRef: document.querySelector("#validation-input"),
};
ref.inputRef.addEventListener("input", (event) => {
  if (ref.inputRef.textContent.length === 6)
    ref.inputRef.classList.add(".valid");
});
