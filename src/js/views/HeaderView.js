import View from './View';
import icons from '../../img/icons.svg';
import gallery_1 from '../../img/gallery/gallery-1.avif';
import gallery_2 from '../../img/gallery/gallery-2.avif';
import gallery_3 from '../../img/gallery/gallery-3.avif';
import gallery_4 from '../../img/gallery/gallery-4.avif';
import gallery_5 from '../../img/gallery/gallery-5.avif';
import gallery_6 from '../../img/gallery/gallery-6.avif';
import gallery_7 from '../../img/gallery/gallery-7.avif';
import gallery_8 from '../../img/gallery/gallery-8.avif';
import gallery_9 from '../../img/gallery/gallery-9.avif';
import gallery_10 from '../../img/gallery/gallery-10.avif';
import gallery_11 from '../../img/gallery/gallery-11.avif';
import gallery_12 from '../../img/gallery/gallery-12.avif';
import gallery_13 from '../../img/gallery/gallery-13.avif';
import gallery_14 from '../../img/gallery/gallery-14.avif';
import gallery_15 from '../../img/gallery/gallery-15.avif';

export class HeaderView extends View {
  _message = 'This function is unsupported. Have some balloons 🎈🎈';
  _images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
  ];

  constructor() {
    super();

    this.#init();
    this.header.addEventListener('click', this.#clickBtnHandler.bind(this));
  }

  #init() {
    this.header = document.querySelector('.header');
    this.headerBtns = [...this.header.querySelectorAll('button')];
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('nav__btn--add-post')) {
      this.#postPhotoButtonHandler();
      this.#initPostPhotoButtons();
    } else this.renderMessage();
  }

  #initPostPhotoButtons() {
    const postModal = document.querySelector('.modal');
    postModal
      .querySelector('.btn--cancel')
      .addEventListener('click', function () {
        postModal.remove();
      });
    console.log(postModal.querySelector('.modal__photos'));
    postModal
      .querySelector('.modal__photos')
      .addEventListener('click', function (e) {
        const img = e.target.closest('img');
        if (!img) return;

        postModal
          .querySelectorAll('img')
          .forEach((img) => img.classList.remove('active'));
        img.classList.toggle('active');
      });
  }

  #postPhotoButtonHandler() {
    const markup = `
      <div class="modal">
        <nav class="modal__nav">
          <button class="btn-tiny btn--cancel">
            <svg>
              <use href="${icons}#icon-cancel"></use>
            </svg>
          </button>
          <span>New post</span>
          <button class="btn-tiny btn--arrow-post">
            <svg>
              <use href="${icons}#icon-arrow-post"></use>
            </svg>
          </button>
        </nav>
        <section class="modal__photos">
          <div class="modal__photos-wrapper">
           ${this.#generateGalleryImages()}
          </div>
        </section>
        <div class="modal__bottom">
        </div>
      </div>
    `;

    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);
  }

  #generateGalleryImages() {
    let markup = ``;
    for (let i = 0; i < 15; i++) {
      markup += `
                <div class="modal__photos-img">
                  <img
                  src="${this._images[i]}"
                  alt="Gallery photo" />
                </div>
              `;
    }
    // console.log(markup);
    return markup;
  }
}
