import galleryItems from './gallery_items.json';

export const galleryElements = galleryItems.map(item => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery__item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__link');
  //   linkEl.href = item.original;

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');
  imageEl.src = item.preview;
  imageEl.dataset.source = item.original;
  imageEl.alt = item.description;

  itemEl.appendChild(linkEl);
  linkEl.appendChild(imageEl);

  return itemEl;
});
