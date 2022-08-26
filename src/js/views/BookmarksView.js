import View from './View';
import icons from '../../img/icons.svg';

export class BookmarksView extends View {
  _parentElement = document.querySelector('.container');
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor(data) {
    super();

    // this._username = 'User';
    // this._profilePicture =
    //   'https://avatars.githubusercontent.com/u/26410548?v=4';
    // this._bio = 'Someone cool 😎';
    // this._posts = [];
    // this._fallowers = 21;
    // this._following = 37;
    // this._bookmarks = [];

    // username: 'User',
    // profilePicture: 'https://avatars.githubusercontent.com/u/26410548?v=4',
    // bio: 'Someone cool 😎',
    // posts: [],
    // fallowers: '21',
    // following: '37',
    // bookmarks: [],
    this._account = data;
    this.render('afterbegin');
    this.#init();
  }

  #init() {
    this._thisElement.addEventListener(
      'click',
      this.#clickBtnHandler.bind(this),
    );
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');

    if (!btn) return;

    switch (true) {
      case btn.classList.contains('header__bookmarks-btn--back'):
        document.querySelector('.account').classList.remove('hidden');
        this._thisElement.remove();
        break;
      case btn.classList.contains('nav__btn--grid'):
        console.log(this._account);

        break;
      default:
        this.renderMessage();
    }
  }

  #generatePhotos() {
    const markup = this._account.bookmarks
      .slice()
      .reverse()
      .map((bookmark) => {
        return `<div class="saved__posts-img">
        <img
        src="${bookmark._data.postImage}"
        alt="Saved post" />
      </div> `;
      })
      .join('');

    return markup;
  }

  #generateText() {
    return `
    <div class="saved__posts-message">
      <span>
        <svg>
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </span>
      <p class="saved__posts-message--middle">Nothing saved yet</p>
      <p class="saved__posts-message--bot">All the posts and items you've saved will show up here.</p>
    </div>
    `;
  }

  _generateMarkup() {
    // <img
    // src="${this._account.posts[0]._data.postImage}"
    // alt="Gallery photo" />

    return `
      <div class="bookmarks hidden">
        <header class="header">
          <div class="header__bookmarks">
            <button class="btn-tiny header__bookmarks-btn--back">
              <svg>
                <use href="${icons}#icon-arrow-back"></use>
              </svg>
            </button>
            <span class="header__bookmarks-title">Saved Posts</span>
          </div>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <button class="btn-tiny nav__btn--more">
                  <svg>
                    <use href="${icons}#icon-more"></use>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main class="saved">
          <div class="saved__posts">
            <nav class="saved__posts-nav">
              <ul class="saved__posts-nav--list">
                <li class="saved__posts-nav--item">
                  <button class="btn-tiny nav__btn--grid">
                    <svg>
                      <use href="${icons}#icon-grid"></use>
                    </svg>
                  </button>
                </li>
                <li class="saved__posts-nav--item">
                  <button class="btn-tiny nav__btn--video">
                    <svg>
                      <use href="${icons}#icon-video"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="saved__posts-wrapper">
              ${this.#generatePhotos() || this.#generateText()}
            </div>
          </div>
        </main>
      </div>
    `;
  }
}
