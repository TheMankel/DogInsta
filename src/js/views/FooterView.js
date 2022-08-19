export class FooterView {
  constructor() {
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

    console.log(btn);
    this.feedScrollTop();
  }

  feedScrollTop() {
    document.querySelector('.posts').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
