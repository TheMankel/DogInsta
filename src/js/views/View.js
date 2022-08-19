import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();

    // const loadingEl = document.querySelector('.loading__spinner');

    this._parentElement.insertAdjacentHTML('beforeend', markup);

    // const lastPost = [...document.querySelectorAll('.post')].at(-1);
    // console.log(lastPost);
    // loadingEl.remove();
  }

  renderSpinner() {
    const markup = `
      <div class='loading__spinner'>
        <svg class="loading__spinner-icon">
          <use class="path" href="${icons}#icon-spinner"></use>
        </svg>
      </div>
    `;

    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  renderError(message = this._errorMessage) {
    console.error(message);
  }

  renderMessage(message = this._message) {
    console.log(message);
  }
}
