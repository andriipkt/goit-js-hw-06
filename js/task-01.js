const categories = document.body.children[1];
const items = Array.from(categories.children);

console.log("Number of categories:", items.length);

items.forEach((element) => {
  const title = element.firstElementChild.textContent;
  const itemsCount = element.lastElementChild.children.length;

  console.log("Category:", title);
  console.log("Elements:", itemsCount);
});
