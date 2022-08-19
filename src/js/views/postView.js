import View from './View';
import icons from '../../img/icons.svg';

class PostView extends View {
  _parentElement = document.querySelector('.posts');
  _errorMessage = 'We could not load this post :(';
  _message = '';

  constructor() {
    super();

    this.#addHandlerLike();
    this.#addHandlerSend();
    this.#addHandlerBookmark();
  }

  addHandlerRender(handler) {
    window.addEventListener('load', function () {
      handler();
      // handler();
    });

    // OLD WAY OF RENDERING NEW POSTS
    // this._parentElement.addEventListener('scroll', function () {
    //   const posts = [...document.querySelectorAll('.post')];

    //   if (this.scrollTop + this.clientHeight >= this.scrollHeight - 1) {
    //     handler();
    //   }
    // });
  }

  addHandlerObserver(handler) {
    // console.count();

    const callback = (entries) => {
      if (entries[0].intersectionRatio === 1) {
        handler();
        observer.unobserve(entries[0].target);
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.25, 0.5, 0.75, 1],
      // [0.25, 0.5, 0.75, 1]
      // [0.5, 1]
    };

    const observer = new IntersectionObserver(callback, options);

    const posts = [...document.querySelectorAll('.post')];

    // posts.forEach((post, id, posts) => {
    //   observer.unobserve(post);
    //   if (id === posts.length - 1) {
    //     observer.observe(post);
    //   }
    // });

    observer.observe(posts.at(-1));
  }

  #addHandlerLike() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--favorite');
      if (!btn) return;

      const likesNum = e.target
        .closest('.post__bot')
        .querySelector('.post__likes-data');

      if (btn.dataset.filled === 'true') {
        btn.querySelector('use').setAttribute('href', `${icons}#icon-favorite`);
        likesNum.textContent = +likesNum.textContent - 1;
        btn.dataset.filled = 'false';
      } else {
        btn
          .querySelector('use')
          .setAttribute('href', `${icons}#icon-favorite-fill`);
        likesNum.textContent = +likesNum.textContent + 1;
        btn.dataset.filled = 'true';
      }
    });
  }

  #addHandlerSend() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--send');
      if (!btn) return;

      const postPhotoSrc = e.target
        .closest('.post')
        .querySelector('.post__photo img').src;

      navigator.clipboard.writeText(postPhotoSrc);

      if (!postPhotoSrc) return;

      document.querySelector('.modal__copy')?.remove();

      // console.log(`Copied photo URL: ${postPhotoSrc}`);

      const markup = `
        <div class="modal__copy">
          <div class="modal__copy-wrapper">
            <span>Copied photo URL</span>
          </div>
        </div>
      `;

      document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
      // this.insertAdjacentHTML('afterbegin', markup);
    });
  }

  #addHandlerBookmark() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;

      if (btn.dataset.filled === 'true') {
        btn.querySelector('use').setAttribute('href', `${icons}#icon-bookmark`);
        btn.dataset.filled = 'false';
      } else {
        btn
          .querySelector('use')
          .setAttribute('href', `${icons}#icon-bookmark-fill`);
        btn.dataset.filled = 'true';
      }
    });
  }

  _generatePartQuote() {
    if (!this._data) return this.renderError();

    return this._data.quote.split(' ').slice(0, 3).join(' ');
  }

  _getRandomInt() {
    const min = 2;
    const max = 10000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _generateMarkup() {
    return `
      <div class="post">
        <div class="post__top">
          <div class="post__top-user">
            <img
              src="${this._data.profilePictures.thumbnail}"
              alt="Account icon"
              class="post__top-user--img" />
            <span class="post__top-user--name">${this._data.username}</span>
          </div>
          <button class="post__top-btn post__top--more">
            <svg class="post__top-icon">
              <use href="${icons}#icon-more"></use>
            </svg>
          </button>
        </div>
        <div class="post__photo">
          <img
            src="${this._data.postImage}"
            alt="Post photo" />
        </div>
        <div class="post__bot">
          <section class="post__buttons">
            <div class="post__buttons-left">
              <button class="btn-tiny btn--favorite" data-filled="false">
                <svg>
                  <use href="${icons}#icon-favorite"></use>
                </svg>
              </button>
              <button class="btn-tiny btn--comment">
                <svg>
                  <use href="${icons}#icon-comment"></use>
                </svg>
              </button>
              <button class="btn-tiny btn--send">
                <svg>
                  <use href="${icons}#icon-send"></use>
                </svg>
              </button>
            </div>
            <div class="post__buttons-right">
              <button class="btn-tiny btn--bookmark" data-filled="false">
                <svg>
                  <use href="${icons}#icon-bookmark"></use>
                </svg>
              </button>
            </div>
          </section>
          <section class="post__likes">
            <div class="post__likes-count">
              <span class="post__likes-data">${this._getRandomInt()}</span>
              <span class="post__likes-text">likes</span>
            </div>
          </section>
          <section class="post__description">
            <details>
              <summary>
                <span class="post__description-username">${
                  this._data.username
                }</span>
                <span class="post__description-text">${this._generatePartQuote()}...</span>
                <span class="post__description-btn">more</span>
              </summary>
              <div>
                <span class="post__description-username">${
                  this._data.username
                }</span>
                <span class="post__description-text">${this._data.quote}</span>
              </div>
            </details>
          </section>
          <section class="post__comments">
            <span>View 6 comments</span>
          </section>
        </div>
      </div>
    `;
  }
  siur() {
    console.log('siur');
  }
}

export default new PostView();
