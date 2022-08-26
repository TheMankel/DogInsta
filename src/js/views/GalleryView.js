import View from './View';
import { PostView } from './PostView';
import icons from '../../img/icons.svg';
import { LoaderView } from './LoaderView';

export class GalleryView extends View {
  _parentElement = document.querySelector('.container');
  _errorMessage = 'We could not load this image 😥';

  constructor(data) {
    super();

    this._data = data;
    this.render('afterbegin');
    this.#init();
    this.#generateGalleryImages();
    this.loadPhotos();
  }

  #init() {
    this._modal = this._parentElement.querySelector('.modal__gallery');
    this._nav = this._modal.querySelector('nav');
    this._modalPhotos = this._modal.querySelector('.modal__photos');

    this._nav.addEventListener('click', this.#clickBtnHandler.bind(this));
    this._modalPhotos.addEventListener(
      'click',
      this.#clickImgHandler.bind(this),
    );
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('btn--cancel')) {
      this._modal.remove();
    }

    if (btn.classList.contains('btn--arrow-post')) {
      if (this._selectedImgSrc) {
        btn.remove();
        this._modalPhotos.remove();
        this._modal.querySelector('footer').remove();
        this._nav.querySelector('.btn--check').classList.remove('hidden');

        const markupPhotoToPost = this.#generateMarkupPhotoToPost();
        this._nav.insertAdjacentHTML('afterend', markupPhotoToPost);
      }
    }

    if (btn.classList.contains('btn--check')) {
      this.#addNewPost();
    }
  }

  #clickImgHandler(e) {
    const images = this._modal.querySelectorAll('img');
    const selectedImg = e.target.closest('img');

    if (!selectedImg || !images.length) return;

    images.forEach((img) => img.classList.remove('active'));

    selectedImg.classList.add('active');
    this._selectedImgSrc = selectedImg.src;
  }

  #addNewPost() {
    const textarea = this._modal.querySelector('.modal__bottom-description');
    const description = textarea.value.trim();

    if (!description) {
      textarea.value = '';
      return;
    }

    const data = this.#generatePostDataObject(description);
    const post = new PostView(data);

    post.render('afterbegin');

    post.initButtons();

    post.addHandlerAccount(this._account);

    this._account.posts.push(post);

    if (document.querySelector('.account')) {
      const markup = this._account.posts
        .slice()
        .reverse()
        .map((post) => {
          return `<div class="profile__posts-img">
        <img
        src="${post._data.postImage}"
        alt="Gallery photo" />
      </div> `;
        })
        .join('');

      const wrapper = document.querySelector('.profile__posts-wrapper');

      wrapper.innerHTML = '';
      wrapper.insertAdjacentHTML('afterbegin', markup);
    }

    this._modal.remove();
  }

  #generatePostDataObject(description) {
    return {
      username: this._account.username,
      picture: this._account.profilePicture,
      postImage: this._selectedImgSrc,
      description: description,
      comments: [],
      likesCount: 0,
    };
  }

  #generateGalleryImages() {
    const photoWrapper = this._modal.querySelector('.modal__photos-wrapper');

    for (let i = 0; i < this._data.length; i++) {
      const markup = `
        <div class="modal__photos-img">
        </div>
      `;
      photoWrapper.insertAdjacentHTML('afterbegin', markup);
      new LoaderView('modal__photos-img');
      photoWrapper.querySelector('.loading__spinner').style.height = 'auto';
    }
  }

  loadPhotos() {
    const photoPlaces = this._modal.querySelectorAll('.modal__photos-img');

    photoPlaces.forEach(async (photo, i) => {
      try {
        const res = await fetch(this._data[i]);
        const blob = await res.blob();

        if (!res.ok) throw new Error(this._errorMessage);

        const markup = `
        <img
        src="${URL.createObjectURL(blob)}"
        alt="Gallery photo" />
        `;

        photo.innerHTML = '';
        photo.insertAdjacentHTML('afterbegin', markup);
      } catch (err) {
        console.error(err);
        photo.remove();
      }
    });
  }

  #generateMarkupPhotoToPost() {
    return `
    <section class="modal__post">
      <div class="modal__post-photo">
        <img
          src="${this._selectedImgSrc}"
          alt="Post photo" />
      </div>
    </section>
    <div class="modal__bottom--textarea">
      <textarea class="modal__bottom-description" placeholder="Add description..." type="text" autocorrect="off" autocomplete="off" rows="10"></textarea>
    </div>
    `;
  }

  _generateMarkup() {
    return `
      <div class="modal__gallery">
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
          <button class="btn-tiny btn--check hidden">
            <svg>
              <use href="${icons}#icon-check"></use>
            </svg>
          </button>
        </nav>
        <section class="modal__photos">
          <div class="modal__photos-wrapper">

          </div>
        </section>
        <footer class="modal__bottom">
        </footer>
      </div>
    `;
  }
}
