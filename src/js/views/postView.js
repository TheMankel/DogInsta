import View from './View';
import icons from '../../img/icons.svg';

class PostView extends View {
  _parentElement = document.querySelector('.posts');
  _errorMessage = 'We could not load this post :(';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
    this._parentElement.addEventListener('scroll', function () {
      const posts = [...document.querySelectorAll('.post')];

      if (this.scrollTop + this.clientHeight >= this.scrollHeight - 5)
        handler();

      // console.log(posts.length);
    });
  }

  addHandlerRenderScroll(handler) {
    const posts = [...document.querySelectorAll('.post')];
    posts.map((post, id) => {
      console.log(post, id);
    });
    // .addEventListener('click', function () {});
  }

  _generateMarkup() {
    return `
      <div class="post">
        <div class="post__top">
          <div class="post__top-user">
            <img
              src="https://pyrek.pl/wp-content/uploads/2021/04/papaj.jpg"
              alt="Account icon"
              class="post__top-user--img" />
            <span class="post__top-user--name">Jan Pawlacz</span>
          </div>
          <button class="post__top-btn post__top--more">
            <svg class="post__top-icon">
              <use href="${icons}#icon-more"></use>
            </svg>
          </button>
        </div>
        <div class="post__photo">
          <img
            src="${this._data}"
            alt="Post photo" />
        </div>
        <div class="post__bot">
          <section class="post__buttons">
            <div class="post__buttons-left">
              <button class="btn-tiny btn--favorite">
                <svg>
                  <use href="${icons}#icon-favorite"></use>
                </svg>
              </button>
              <button class="btn-tiny btn--comment">
                <svg>
                  <use href="${icons}#icon-comment"></use>
                </svg>
              </button>
              <button class="btn-tiny btn--send">
                <svg>
                  <use href="${icons}#icon-send"></use>
                </svg>
              </button>
            </div>
            <div class="post__buttons-right">
              <button class="btn-tiny btn--bookmark">
                <svg>
                  <use href="${icons}#icon-bookmark"></use>
                </svg>
              </button>
            </div>
          </section>
          <section class="post__likes">
            <div class="post__likes-count">
              <span class="post__likes-data">2137</span>
              <span class="post__likes-text">likes</span>
            </div>
          </section>
          <section class="post__description">
            <details>
              <summary>
                <span class="post__description-username">Aislinn</span>
                <span class="post__description-text">Her daily goal...</span>
                <span class="post__description-btn">more</span>
              </summary>
              <div>
                <span class="post__description-username">Aislinn</span>
                <span class="post__description-text">Her daily goal was to improve on yesterday.</span>
              </div>
            </details>
          </section>
          <section class="post__comments">
            <span>View 6 comments</span>
          </section>
        </div>
      </div>
    `;
  }
}

export default new PostView();
