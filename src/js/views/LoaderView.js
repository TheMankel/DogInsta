import View from './View';
import icons from '../../img/icons.svg';

export class LoaderView extends View {
  constructor(element = 'posts') {
    super();

    this._parentElement = document.querySelector(`.${element}`);

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
    this._parentElement.querySelector('.loading__spinner').remove();
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
