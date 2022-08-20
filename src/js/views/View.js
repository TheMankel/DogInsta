import icons from '../../img/icons.svg';

export default class View {
  _thisElement;
  _data;

  render(data) {
    if (!data) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('beforeend', markup);
    this._thisElement = this._parentElement.lastElementChild;
  }

  renderError(message = this._errorMessage) {
    console.error(message);
  }

  renderMessage(message = this._message) {
    // console.log(message);

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
}
