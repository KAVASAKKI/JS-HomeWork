import { STORAGE_KEY, Theme } from './variables';
import { themeToggle } from './refs';
export const populateColorTheme = () => {
  const currentTheme = localStorage.getItem(STORAGE_KEY);
  document.body.classList.add(currentTheme);

  if (currentTheme === Theme.DARK) {
    themeToggle.checked = true;
  }
};
