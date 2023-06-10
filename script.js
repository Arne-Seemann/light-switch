const container = document.querySelector("div.container");
const btn = document.querySelector("button.switch");

btn.addEventListener("click", function toggleLight(e) {
  btn.classList.toggle("nightSwitch");
  container.classList.toggle("nightContainer");

  if (btn.classList.contains("nightSwitch")) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
