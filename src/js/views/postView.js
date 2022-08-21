import View from './View';
import icons from '../../img/icons.svg';

export class PostView extends View {
  _parentElement = document.querySelector('.posts');
  _errorMessage = 'We could not load this post 😥';
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor(data) {
    super();

    this.render(data);

    this._moreBtn = this._thisElement.querySelector('.btn--more');
    this._likeBtn = this._thisElement.querySelector('.btn--favorite');
    this._commentBtn = this._thisElement.querySelector('.btn--comment');
    this._sendBtn = this._thisElement.querySelector('.btn--send');
    this._bookmarkBtn = this._thisElement.querySelector('.btn--bookmark');

    this.#initButtons();
  }

  // addHandlerRender(handler) {
  //   // OLD WAY OF RENDERING NEW POSTS
  //   this._parentElement.addEventListener('scroll', function () {
  //     const posts = [...document.querySelectorAll('.post')];
  //     if (this.scrollTop + this.clientHeight >= this.scrollHeight - 1) {
  //       handler();
  //     }
  //   });
  // }

  #initButtons() {
    this._moreBtn.addEventListener(
      'click',
      this.renderMessage.bind(this, this.message),
    );
    this._likeBtn.addEventListener('click', this.#likeButtonHandler.bind(this));
    this._commentBtn.addEventListener(
      'click',
      this.#commentButtonHandler.bind(this),
    );
    this._sendBtn.addEventListener('click', this.#sendButtonHandler.bind(this));
    this._bookmarkBtn.addEventListener(
      'click',
      this.#bookmarkButtonHandler.bind(this),
    );
  }

  addHandlerObserver(handler) {
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
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(this._thisElement);
  }

  addHandlerAccount(account) {
    this._account = account;
  }

  // setAccountData(data) {
  //   this._accountData = data;
  // }

  #likeButtonHandler() {
    const likesNum = this._thisElement.querySelector('.post__likes-data');

    if (this._likeBtn.getAttribute('data-filled') === 'true') {
      likesNum.textContent = +likesNum.textContent - 1;
    } else {
      likesNum.textContent = +likesNum.textContent + 1;
    }

    this.toggleButtonFill(this._likeBtn, 'favorite');
  }

  #commentButtonHandler() {
    const markup = this.#generateCommentsMarkup();

    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);

    this.#initCommentsButtons();
  }

  #generateCommentsMarkup() {
    return `
    <div class="modal">
      <div class="modal__nav-top">
        <div class="modal__nav-top--left">
          <button class="btn-tiny modal__nav-btn--back">
            <svg>
              <use href="${icons}#icon-arrow-back"></use>
            </svg>
          </button>
          <span>Comments</span>
        </div>
        <div class="modal__nav-top--right">
          <button class="btn-tiny modal__nav--send">
            <svg>
              <use href="${icons}#icon-send"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="modal__post">
        <img
          src="${this._data.picture}"
          alt="Post photo" />
        <span class="modal__comments-name">${this._data.username}</span>
        <p class="modal__comments-text">${this._data.description}</p>
      </div>
      <section class="modal__comments">
        ${this.#generateComments()}
      </section>
      <div class="modal__nav-bottom">
        <img
          src="${this._account._profilePicture}"
          alt="Post photo" />
        <input class="modal__comments-name" placeholder="Add comment..." type="text" autocorrect="off" autocomplete="off"></input>
        <button class="btn-tiny modal__nav--post">Send</button>
      </div>
    </div>
  `;
  }

  #generateComments() {
    return this._data.comments
      .map((comment) => {
        return `
        <div class="modal__comments-comment">
          <img
            src="${comment.picture}"
            alt="Post photo" />
          <span class="modal__comments-name">${comment.name}</span>
          <p class="modal__comments-text">${comment.comment}</p>
        </div>
      `;
      })
      .join('');
  }

  #initCommentsButtons() {
    document
      .querySelector('.modal__nav-top--left button')
      .addEventListener('click', function () {
        document.querySelector('.modal').remove();
      });

    document
      .querySelector('.modal__nav-top--right button')
      .addEventListener('click', this.renderMessage.bind(this, this._message));

    document
      .querySelector('.modal__nav-bottom button')
      .addEventListener('click', this.#addComment.bind(this));

    const helper = this;

    document
      .querySelector('.modal__nav-bottom input')
      .addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          helper.#addComment();
        }
      });
  }

  #addComment() {
    const input = document.querySelector('.modal__nav-bottom input');
    const comment = input.value.trim();
    if (!comment) {
      input.value = '';
      return;
    }

    const markup = `
      <div class="modal__comments-comment">
        <img
          src="${this._account._profilePicture}"
          alt="Post photo" />
        <span class="modal__comments-name">${this._account._username}</span>
        <p class="modal__comments-text">${comment}</p>
      </div>
    `;

    document
      .querySelector('.modal__comments')
      .insertAdjacentHTML('beforeend', markup);

    input.value = '';

    const newCommentObj = {
      comment: comment,
      name: this._data.username,
      picture: this._data.picture,
    };
    this._data.comments.push(newCommentObj);

    this._thisElement.querySelector(
      '.post__comments span',
    ).textContent = `View ${this._data.comments.length} comments`;
  }

  #sendButtonHandler() {
    const postPhotoSrc =
      this._thisElement.querySelector('.post__photo img').src;

    navigator.clipboard.writeText(postPhotoSrc);

    if (!postPhotoSrc) return;

    document.querySelector('.modal__copy')?.remove();

    const markup = `
    <div class="modal__copy">
      <div class="modal__copy-wrapper">
        <span>Copied photo URL</span>
      </div>
    </div>
  `;

    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);
    // this.insertAdjacentHTML('afterbegin', markup);
  }

  #bookmarkButtonHandler() {
    if (this._bookmarkBtn.getAttribute('data-filled') === 'true') {
      const index = this._account._bookmarks.indexOf(this._data);
      this._account._bookmarks.splice(index, 1);
    } else {
      this._account._bookmarks.push(this._data);
    }

    this.toggleButtonFill(this._bookmarkBtn, 'bookmark');
  }

  toggleButtonFill(button, action) {
    if (!button || !action) return;

    if (button.dataset.filled === 'true') {
      button
        .querySelector('use')
        .setAttribute('href', `${icons}#icon-${action}`);
      button.setAttribute('data-filled', 'false');
    } else {
      button
        .querySelector('use')
        .setAttribute('href', `${icons}#icon-${action}-fill`);
      button.setAttribute('data-filled', 'true');
    }
  }

  _generatePartDescription() {
    if (!this._data) return this.renderError();

    return this._data.description.split(' ').slice(0, 3).join(' ');
  }

  _generateMarkup() {
    return `
      <div class="post">
        <div class="post__top">
          <div class="post__top-user">
            <img
              src="${this._data.picture}"
              alt="Account icon"
              class="post__top-user--img" />
            <span class="post__top-user--name">${this._data.username}</span>
          </div>
          <button class="btn-tiny btn--more">
            <svg>
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
              <span class="post__likes-data">${this._data.likesCount}</span>
              <span class="post__likes-text">likes</span>
            </div>
          </section>
          <section class="post__description">
            <details>
              <summary>
                <span class="post__description-username">${
                  this._data.username
                }</span>
                <span class="post__description-text">${this._generatePartDescription()}...</span>
                <span class="post__description-btn">more</span>
              </summary>
              <div>
                <span class="post__description-username">${
                  this._data.username
                }</span>
                <span class="post__description-text">${
                  this._data.description
                }</span>
              </div>
            </details>
          </section>
          <section class="post__comments">
            <span>View ${this._data.comments.length} comments</span>
          </section>
        </div>
      </div>
    `;
  }
}
