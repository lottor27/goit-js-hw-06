const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach((ingredient) => {
  const newElement = document.createElement("li");
  newElement.classList.add("item");

  newElement.textContent = ingredient;
  console.log(newElement);
  
  const allNewIngredients = document.querySelector("#ingredients");
  allNewIngredients.appendChild(newElement);
}, 0);


