import './sass/main.scss';

import { listGallery, lightboxOverlay } from './javascripts/refs';
import { galleryElements } from './javascripts/create_elements';
import { onKeydown, onBackdropClick, onImageClick } from './javascripts/handlers';

listGallery.append(...galleryElements);

listGallery.addEventListener('click', onImageClick);
lightboxOverlay.addEventListener('mouseup', onBackdropClick);
window.addEventListener('keydown', onKeydown);
