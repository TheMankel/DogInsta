import icons from '../../img/icons.svg';

export default class View {
  render(postPlace) {
    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML(postPlace, markup);

    if (postPlace === 'beforeend')
      this._thisElement = this._parentElement.lastElementChild;
    else this._thisElement = this._parentElement.firstElementChild;
  }

  renderError(message = this._errorMessage) {
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

    const modal = document.querySelector('.modal__unsupported');
    const button = document.querySelector('.modal__unsupported button');

    button.focus();

    button.addEventListener('click', function () {
      modal.remove();
    });

    modal.addEventListener('keydown', function (e) {
      console.log(e.key);
      if (e.key === 'Tab') e.preventDefault();
    });
  }

  addHandlerAccount(account) {
    this._account = account;
  }
}
