import recipeItems from './javascripts/menu.json';
import { createItemsMarkup } from './javascripts/create-item';
import { populateColorTheme } from './javascripts/populate-color-theme';
import { onChangeTheme } from './javascripts/change-theme';
import { themeToggle, listItemsHTML } from './javascripts/refs';
import './sass/main.scss';

populateColorTheme();

const itemsMarkup = createItemsMarkup(recipeItems);

themeToggle.addEventListener('change', onChangeTheme);

listItemsHTML.insertAdjacentHTML('afterbegin', itemsMarkup);
