import View from './View';
import { GalleryView } from './GalleryView';
import icons from '../../img/icons.svg';
import { USER_IMAGES } from '../config';

export class AccountView extends View {
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
    console.log(this._thisElement);
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    const p = e.target.closest('p');

    if (!btn && !p) return;

    switch (true) {
      case btn?.classList.contains('nav__btn--add-post'):
      case p?.classList.contains('profile__posts-message--bot'):
        const gallery = new GalleryView(USER_IMAGES);
        gallery.addHandlerAccount(this._account);

        break;
      case btn.classList.contains('nav__btn--grid'):
        console.log(this._account);

        break;
      default:
        this.renderMessage();
    }
  }

  #generatePhotos() {
    const markup = this._account.posts
      .map((post) => {
        return `<div class="profile__posts-img">
        <img
        src="${post._data.postImage}"
        alt="Gallery photo" />
      </div> `;
      })
      .join('');

    return markup;
  }

  #generateText() {
    return `
    <div class="profile__posts-message">
      <p class="profile__posts-message--top">Profile</p>
      <p class="profile__posts-message--middle">When you share photos and videos, they'll appear on your profile.</p>
      <p class="profile__posts-message--bot">Share your photo or video</p>
    </div>
    `;
  }

  _generateMarkup() {
    // <img
    // src="${this._account.posts[0]._data.postImage}"
    // alt="Gallery photo" />

    return `
      <div class="account hidden">
        <header class="header">
          <div class="header__account">
            <span class="header__account-username">${
              this._account.username
            }</span>
          </div>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <button class="btn-tiny nav__btn--add-post">
                  <svg>
                    <use href="${icons}#icon-add"></use>
                  </svg>
                </button>
              </li>
              <li class="nav__item">
                <button class="btn-tiny nav__btn--bookmarks-show">
                  <svg>
                    <use href="${icons}#icon-bookmark"></use>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main class="profile">
          <div class="profile__data">
            <div class="profile__data-top">
              <div class="profile__data-picture">
                <img
                  src="${this._account.profilePicture}"
                  alt="Account icon"
                  class="profile__data-img" />
              </div>
              <ul class="profile__data-list">
                <li class="profile__data-item">
                  <span>${this._account.posts.length}</span>
                  <p>Posts</p>
                </li>
                <li class="profile__data-item">
                  <span>${this._account.followers}</span>
                  <p>Followers</p>
                </li>
                <li class="profile__data-item">
                  <span>${this._account.following}</span>
                  <p>Following</p>
                </li>
              </ul>
            </div>
            <div class="profile__data-info">
              <p class="profile__data-name">${this._account.fullname}</p>
              <p class="profile__data-bio">${this._account.bio}</p>
            </div>
          </div>
          <div class="profile__posts">
            <nav class="profile__posts-nav">
              <ul class="profile__posts-nav--list">
                <li class="profile__posts-nav--item">
                  <button class="btn-tiny nav__btn--grid">
                    <svg>
                      <use href="${icons}#icon-grid"></use>
                    </svg>
                  </button>
                </li>
                <li class="profile__posts-nav--item">
                  <button class="btn-tiny nav__btn--tags">
                    <svg>
                      <use href="${icons}#icon-tags"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
            <div class="profile__posts-wrapper">
              ${this.#generatePhotos() || this.#generateText()}
            </div>
          </div>
        </main>
      </div>
    `;
  }
}
