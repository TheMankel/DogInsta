import View from './View';
import { AccountView } from './AccountView';

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
    // this._footerBtns = [...this._footerElement.querySelectorAll('button')];
    this._homeElement = this._parentElement.querySelector('.home');
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    // console.log(btn);
    // if (btn.classList.contains('nav__btn--home-page')) this.feedScrollTop();
    // else this.renderMessage();

    switch (true) {
      case btn.classList.contains('nav__btn--home-page'):
        // window.history.pushState(null, '', `/`);
        this.feedScrollTop();
        // window.location.href = '/';
        if (this._accountElement) {
          this._accountElement.remove();
          this._homeElement.classList.remove('hidden');
        }
        break;
      case btn.classList.contains('nav__btn--account'):
        console.log(this._account);
        // window.history.pushState(null, '', `/user`);
        // window.location.href = `${this._account._username}`;

        if (!document.querySelector('.account')) {
          const account = new AccountView(this._account);
          // account.addHandlerAccount(this._account);
          this._accountElement = this._parentElement.querySelector('.account');
        }
        this._accountElement.classList.remove('hidden');
        this._homeElement.classList.add('hidden');
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
