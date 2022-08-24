import View from './View';
import { AccountView } from './AccountView';

export class FooterView extends View {
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor() {
    super();

    this.#init();
    this.footer.addEventListener('click', this.#clickBtnHandler.bind(this));
  }

  #init() {
    this.footer = document.querySelector('.footer');
    this.footerBtns = [...this.footer.querySelectorAll('button')];
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
        break;
      case btn.classList.contains('nav__btn--account'):
        console.log(this._account);
        // window.history.pushState(null, '', `/user`);
        // window.location.href = `${this._account._username}`;
        // const account = new AccountView();
        // account.addHandlerAccount(this._account);
        // account.render('siusiaki', 'afterbegin');

        // this._account.render('siusiaki', 'afterbegin');
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
