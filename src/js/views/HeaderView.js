import View from './View';
import icons from '../../img/icons.svg';
import { USER_IMAGES } from '../config';
import { PostView } from './PostView';
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
      // this.render(USER_IMAGES, 'afterbegin');
      // this.#initPostPhotoButtons();
    } else this.renderMessage();
  }

  // #selectPhotoHandler(modal, e) {
  //   const images = modal.querySelectorAll('img');
  //   const selectedImg = e.target.closest('img');

  //   if (!selectedImg || !images.length) return;

  //   images.forEach((img) => img.classList.remove('active'));

  //   selectedImg.classList.toggle('active');
  //   this._selectedImgSrc = selectedImg.src;
  // }

  // #initPostPhotoButtons() {
  //   const modal = document.querySelector('.modal__gallery');
  //   const nav = modal.querySelector('.modal__nav');
  //   const modalPhotos = modal.querySelector('.modal__photos');
  //   this._selectedImgSrc = '';

  //   modal.querySelector('.btn--cancel').addEventListener('click', function () {
  //     modal.remove();
  //   });

  //   modalPhotos.addEventListener(
  //     'click',
  //     this.#selectPhotoHandler.bind(this, modal),
  //   );

  //   modal
  //     .querySelector('.btn--arrow-post')
  //     .addEventListener(
  //       'click',
  //       this.#processImage.bind(this, modalPhotos, modal, nav),
  //     );
  // }

  // #processImage(modalPhotos, modal, nav) {
  //   if (this._selectedImgSrc) {
  //     modalPhotos.remove();
  //     modal.querySelector('.modal__bottom').remove();

  //     const markupPhotoToPost = this.#generateMarkupPhotoToPost();
  //     const markupBtnCheck = this.#generateMarkupBtnCheck();

  //     nav.insertAdjacentHTML('afterend', markupPhotoToPost);
  //     nav.insertAdjacentHTML('beforeend', markupBtnCheck);

  //     modal
  //       .querySelector('.btn--check')
  //       .addEventListener('click', this.#addNewPost.bind(this, modal));

  //     modal.querySelector('.btn--arrow-post').remove();
  //   }
  // }

  // #addNewPost(modal) {
  //   const input = modal.querySelector('.modal__bottom-description');
  //   const description = input.value.trim();

  //   if (!description) {
  //     input.value = '';
  //     return;
  //   }

  //   const data = this.#generatePostDataObject(description);
  //   const post = new PostView(data, 'afterbegin');

  //   post.addHandlerAccount(this._account);

  //   //DECIDE POSTVIEW OR ITS DATA
  //   this._account._posts.push(post);

  //   modal.remove();
  // }

  // #generatePostDataObject(description) {
  //   return {
  //     username: this._account._username,
  //     picture: this._account._profilePicture,
  //     postImage: this._selectedImgSrc,
  //     description: description,
  //     comments: [],
  //     likesCount: 0,
  //   };
  // }

  // #generateMarkupPhotoToPost() {
  //   return `
  //   <section class="modal__post">
  //     <div class="modal__post-photo">
  //       <img
  //         src="${this._selectedImgSrc}"
  //         alt="Post photo" />
  //     </div>
  //   </section>
  //   <div class="modal__bottom--input">
  //     <img
  //       src="${this._account._profilePicture}"
  //       alt="Profile picture" />
  //     <input class="modal__bottom-description" placeholder="Add description..." type="text" autocorrect="off" autocomplete="off"></input>
  //   </div>
  //   `;
  // }

  // #generateMarkupBtnCheck() {
  //   return `
  //   <button class="btn-tiny btn--check">
  //     <svg>
  //       <use href="${icons}#icon-check"></use>
  //     </svg>
  //   </button>
  //   `;
  // }

  // #generateGalleryImages() {
  //   let markup = ``;
  //   for (let i = 0; i < this._data.length; i++) {
  //     markup += `
  //               <div class="modal__photos-img">
  //                 <img
  //                 src="${this._data[i]}"
  //                 alt="Gallery photo" />
  //               </div>
  //             `;
  //   }
  //   // console.log(markup);
  //   return markup;
  // }

  // _generateMarkup() {
  //   return `
  //     <div class="modal__gallery">
  //       <nav class="modal__nav">
  //         <button class="btn-tiny btn--cancel">
  //           <svg>
  //             <use href="${icons}#icon-cancel"></use>
  //           </svg>
  //         </button>
  //         <span>New post</span>
  //         <button class="btn-tiny btn--arrow-post">
  //           <svg>
  //             <use href="${icons}#icon-arrow-post"></use>
  //           </svg>
  //         </button>
  //       </nav>
  //       <section class="modal__photos">
  //         <div class="modal__photos-wrapper">
  //          ${this.#generateGalleryImages()}
  //         </div>
  //       </section>
  //       <div class="modal__bottom">
  //       </div>
  //     </div>
  //   `;
  // }
}
