const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRefs = document.querySelector('ul#ingredients');

const newIngredients = ingredients.map(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;

  return ingredient;
});

ingredientsRefs.append(...newIngredients);
