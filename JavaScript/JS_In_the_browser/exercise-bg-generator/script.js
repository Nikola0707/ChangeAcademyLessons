const body = document.querySelector("body");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cssOutput = document.getElementById("css-output");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssOutput.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
