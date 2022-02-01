import { STORAGE_KEY, Theme } from './variables';

export const onChangeTheme = e => {
  if (!e.target.checked) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);

    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  } else {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);

    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  }
};
