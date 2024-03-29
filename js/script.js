document.querySelector("#hambtn").addEventListener("click", () => {
  document.querySelector("#mobilemenu").classList.add("is-open");
});

document.querySelector("#mobilebtn").addEventListener("click", () => {
  document.querySelector("#mobilemenu").classList.remove("is-open");
});

document.querySelector("#topbtn").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("is-open");
});

document.querySelector("#modalbtn").addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("is-open");
});
