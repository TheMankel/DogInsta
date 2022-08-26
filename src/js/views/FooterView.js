import View from './View';
import { AccountView } from './AccountView';
import icons from '../../img/icons.svg';

export class FooterView extends View {
  _parentElement = document.querySelector('.container');
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor() {
    super();

    this.#init();
    this._footerElement.addEventListener(
      'click',
      this.#clickBtnHandler.bind(this),
    );
  }

  #init() {
    this._footerElement = this._parentElement.querySelector('.footer');
    this._homeElement = this._parentElement.querySelector('.home');
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    switch (true) {
      case btn.classList.contains('nav__btn--home-page'):
        this.feedScrollTop();

        btn
          .querySelector('use')
          .setAttribute('href', `${icons}#icon-home-page-fill`);

        this._footerElement
          .querySelector('.nav__btn--account use')
          .setAttribute('href', `${icons}#icon-account`);

        if (this._accountElement) {
          this._accountElement.classList.add('hidden');
          this._homeElement.classList.remove('hidden');
        }

        if (document.querySelector('.bookmarks')) {
          document.querySelector('.bookmarks').remove();
        }

        break;
      case btn.classList.contains('nav__btn--account'):
        console.log(this._account);

        if (!document.querySelector('.account')) {
          new AccountView(this._account);
          this._accountElement = this._parentElement.querySelector('.account');
        }

        this._accountElement.classList.remove('hidden');
        this._homeElement.classList.add('hidden');

        btn
          .querySelector('use')
          .setAttribute('href', `${icons}#icon-account-fill`);

        this._footerElement
          .querySelector('.nav__btn--home-page use')
          .setAttribute('href', `${icons}#icon-home-page`);

        if (document.querySelector('.bookmarks')) {
          document.querySelector('.bookmarks').remove();
        }

        break;
      default:
        this.renderMessage();
    }
  }

  feedScrollTop() {
    document.querySelector('.posts').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
