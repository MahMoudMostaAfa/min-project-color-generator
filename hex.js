const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const random = randomNum();
  document.body.style.backgroundColor = random;
  color.textContent = random;
});
const randomNum = function () {
  let xColor = "#";
  for (let i = 1; i <= 6; i++) {
    xColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return xColor;
};
