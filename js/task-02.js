const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ulIngredients = document.getElementById("ingredients");

const ingredientItems = ingredients.map((element) => {
  console.log(element);
  const item = document.createElement("li");
  const title = document.createElement("h3");
  title.textContent = element;
  item.classList.add("item");
  item.append(title);
  return item;
});
console.log(ingredientItems);
console.log(...ingredientItems);
ulIngredients.append(...ingredientItems);
