const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}\n`);

categoryItems.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  const categoryElements = element.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoryElements.length}\n`);
});
