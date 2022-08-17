import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  renderSpinner() {
    const markup = ``;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    console.error(message);
  }
}
