const categoriersRefs = document.querySelectorAll('ul#categories li.item');

console.log(`В списке ${categoriersRefs.length} категории.`);

categoriersRefs.forEach((el, index) => {
  const titleEl = el.querySelector('h2').textContent;
  const countEl = el.querySelectorAll('li').length;
  console.log(
    `Категория ${index + 1}: ${titleEl} | Кол-во елементов: ${countEl}`,
  );
});
