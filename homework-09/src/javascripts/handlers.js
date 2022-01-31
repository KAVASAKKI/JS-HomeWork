import { lightbox, lightboxImage } from './refs';

export const onImageClick = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  openModal();
  lightboxImage.src = e.target.dataset.source;
};

export const onBackdropClick = e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};

export const onKeydown = e => {
  const ESC_CODE_BUTTON = 'Escape';
  const currentKey = e.code;

  if (ESC_CODE_BUTTON === currentKey) {
    closeModal();
  }
};

export const openModal = () => {
  lightbox.classList.add('is-open');
};

export const closeModal = () => {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
};
