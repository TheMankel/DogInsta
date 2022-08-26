import View from './View';
import { USER_IMAGES } from '../config';
import { GalleryView } from './GalleryView';

export class HeaderView extends View {
  _parentElement = document.querySelector('.container');
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor() {
    super();

    this.#init();
  }

  #init() {
    const header = document.querySelector('.header');
    header.addEventListener('click', this.#clickBtnHandler.bind(this));
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('nav__btn--add-post')) {
      const gallery = new GalleryView(USER_IMAGES);
      gallery.addHandlerAccount(this._account);
    } else this.renderMessage();
  }
}
