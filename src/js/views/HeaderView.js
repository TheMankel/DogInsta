export class HeaderView {
  constructor() {
    this.#init();
    this.header.addEventListener('click', this.#clickBtnHandler.bind(this));
  }

  #init() {
    this.header = document.querySelector('.header');
    this.headerBtns = [...this.header.querySelectorAll('button')];
  }

  #clickBtnHandler(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    console.log(btn);
  }
}
