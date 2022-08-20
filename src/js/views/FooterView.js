import View from './View';

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
    if (btn.classList.contains('nav__btn--home-page')) this.feedScrollTop();
    else this.renderMessage();
  }

  feedScrollTop() {
    document.querySelector('.posts').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
