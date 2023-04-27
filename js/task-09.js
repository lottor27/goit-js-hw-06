const btnChangeColor = document.querySelector('.change-color')
const bodyColor = document.querySelector("body")
const colorText = document.querySelector(".color");




btnChangeColor.addEventListener("click", function () {
  bodyColor.style.backgroundColor = getRandomHexColor();
  const onlineColorBody = bodyColor.style.backgroundColor;
  console.log(onlineColorBody);
  colorText.textContent = onlineColorBody;
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
