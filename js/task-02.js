const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const allNewIngredients = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   const newElement = document.createElement("li");
//   newElement.classList.add("item");

//   newElement.textContent = ingredient;
//   console.log(newElement);
//   const qqq = 
  
//   return
// }, 0);

// allNewIngredients.appendChild(qqq);






ingredients.forEach((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.classList.add("item");
  const ulIngredients = document.querySelector("ul");

  liIngredient.textContent = ingredient;
}, 0);

const ulIngredients = document.querySelector("ul");

ulIngredients.appendChild(liIngredient);
