import View from './View';
import icons from '../../img/icons.svg';

export class AccountView extends View {
  _parentElement = document.querySelector('.container');
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor() {
    super();

    this._username = 'User';
    this._profilePicture =
      'https://avatars.githubusercontent.com/u/26410548?v=4';
    this._bio = 'Someone cool 😎';
    this._posts = [];
    this._fallowers = 21;
    this._following = 37;
    this._bookmarks = [];

    // username: 'User',
    // profilePicture: 'https://avatars.githubusercontent.com/u/26410548?v=4',
    // bio: 'Someone cool 😎',
    // posts: [],
    // fallowers: '21',
    // following: '37',
    // bookmarks: [],
  }

  _generateMarkup() {
    return `
      <header class="header hidden">
        <div class="header__account">
          <span class="header__account-username">${this._username}</span>
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
      <main class="account hidden">

      </main>
    `;
  }
}
