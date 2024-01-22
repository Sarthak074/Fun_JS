const a = document.querySelector("button");
const b = document.querySelector("h1");

let flag = 0;
a.addEventListener("click", function () {
  if (flag === 0) {
    b.innerHTML = "You Pressed ON";
    b.style.color = "Green";
    a.innerHTML = "OFF";
    flag = 1;
  } else {
    b.innerHTML = "You Pressed OFF";
    b.style.color = "Green";
    a.innerHTML = "ON";
    flag = 0;
  }
});
