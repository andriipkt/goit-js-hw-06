const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// через map (на кожній ітерації добавляється 1 елемент)
// const ingredientsList = document.getElementById("ingredients");

// ingredients.map((ingredient) => {
//   const li = document.createElement("li");

//   li.textContent = ingredient;
//   li.classList.add("item");
//   ingredientsList.appendChild(li);
// });

// виносимо окрему функцію для створення елементу makeIngredientsListElements()
const ingredientsList = document.body.children[1];

const elements = makeIngredientsListElements(ingredients); // результат виконання функції записуємо в elements
ingredientsList.append(...elements); // додаємо всі елементи за одне звернення

function makeIngredientsListElements(ingredients) {
  return ingredients.map((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    liElement.classList.add("item");

    return liElement;
  });
}
