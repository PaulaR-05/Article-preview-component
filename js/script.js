const button = document.querySelector(".share-icon");
const socialH = document.querySelector(".social");
const shareIconTwo = document.querySelector(".triangulo-para-baixo");

button.addEventListener("click", submit);

function submit() {
  if (socialH.classList.contains("hidden")) {
    socialH.classList.remove("hidden");
    shareIconTwo.classList.remove("hidden");
  } else {
    socialH.classList.add("hidden");
    shareIconTwo.classList.add("hidden");
  }
}
