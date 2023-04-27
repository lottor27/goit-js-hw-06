const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];





const allNewIngredients = ingredients.map((ingredient) => {

  const newElement = document.createElement("li");
  newElement.classList.add("item");

  newElement.textContent = ingredient;
  return newElement;
});

const allOldIngredients = document.querySelector("ul");

allOldIngredients.append(...allNewIngredients);
