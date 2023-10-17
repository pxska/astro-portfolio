document.querySelector("#email-button").addEventListener("click", () => {
  navigator.clipboard.writeText("kristjanposka@gmail.com");

  const copiedElUp = document.querySelector("#change-text-up");
  const copiedElLeft = document.querySelector("#change-text-left");

  copiedElUp.innerHTML = "Copied ⤴";
  copiedElLeft.innerHTML = "← Copied";

  setTimeout(() => {
    copiedElLeft.innerHTML = "← Click on the e-mail to copy";
    copiedElUp.innerHTML = "Click on the e-mail to copy ⤴";
  }, 1500);
});
