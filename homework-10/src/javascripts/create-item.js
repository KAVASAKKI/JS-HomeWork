import itemTpl from '/templates/recipe-item.hbs';

export const createItemsMarkup = items => {
  return items.map(item => itemTpl(item)).join('');
};
