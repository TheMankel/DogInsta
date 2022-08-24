import View from './View';
import icons from '../../img/icons.svg';

export class LoaderView extends View {
  _parentElement = document.querySelector('.posts');

  constructor() {
    super();

    this._data = 'null';
    this.render('beforeend');
  }

  // renderSpinner() {
  //   const markup =
  //     // const markup = `
  //     //   <div class="loading"></div>
  //     // `;

  //     this._parentElement.insertAdjacentHTML('beforeend', markup);
  // }

  destroy() {
    document.querySelector('.loading__spinner').remove();
  }

  _generateMarkup() {
    return `
      <div class='loading__spinner'>
        <svg class="loading__spinner-icon">
          <use class="path" href="${icons}#icon-spinner"></use>
        </svg>
      </div>
    `;
  }
}
