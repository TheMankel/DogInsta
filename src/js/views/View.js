import icons from '../../img/icons.svg';

export default class View {
  render(postPlace) {
    if (!this._data) return this.renderError();

    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML(postPlace, markup);

    if (postPlace === 'beforeend')
      this._thisElement = this._parentElement.lastElementChild;
    else this._thisElement = this._parentElement.firstElementChild;
  }

  renderError(message = this._errorMessage) {
    // console.error(message);
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-error"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._parentElement.insertAdjacentHTML('beforeend', markup);
    this._thisElement = this._parentElement.lastElementChild;
    document.querySelector('.loading__spinner').remove();
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="modal__unsupported">
        <div class="modal__unsupported-wrapper">
          <span>${message}</span>
          <button>Ok</button>
        </div>
      </div>
    `;

    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);

    document
      .querySelector('.modal__unsupported button')
      .addEventListener('click', function () {
        document.querySelector('.modal__unsupported').remove();
      });
  }

  addHandlerAccount(account) {
    this._account = account;
  }
}
