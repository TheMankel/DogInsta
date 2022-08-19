import icons from '../../img/icons.svg';

export class LoaderView {
  _parentElement = document.querySelector('.posts');
  // _posts = [...document.querySelectorAll('.post')];

  constructor() {
    // super();
    // this._parentElement = this._posts.at(-1);
    this.renderSpinner();
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

  destroy() {
    document.querySelector('.loading__spinner').remove();
  }
}
