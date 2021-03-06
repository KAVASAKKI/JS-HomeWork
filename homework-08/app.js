const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const listGallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

const galleryElements = galleryItems.map(item => {
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
listGallery.append(...galleryElements);

listGallery.addEventListener('click', onImageClick);
lightboxOverlay.addEventListener('mouseup', onBackdropClick);
window.addEventListener('keydown', onKeydown);

function onImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  openModal();
  lightboxImage.src = e.target.dataset.source;
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function onKeydown(e) {
  const ESC_CODE_BUTTON = 'Escape';
  const currentKey = e.code;

  if (ESC_CODE_BUTTON === currentKey) {
    closeModal();
  }
}

function openModal() {
  lightbox.classList.add('is-open');
}

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
}
