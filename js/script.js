const button = document.querySelector(".share-icon");
const socialH = document.querySelector(".social");
const shareIconTwo = document.querySelector(".triangulo-para-baixo");

button.addEventListener("click", submit);

function submit() {
  socialH.classList.remove("hidden");
  shareIconTwo.classList.remove("hidden");
}
