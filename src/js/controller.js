import * as model from './model';
import { HeaderView } from './views/HeaderView';
import { FooterView } from './views/FooterView';
import { PostView } from './views/PostView';
import { LoaderView } from './views/LoaderView';

// const controlPosts = async function () {
//   PostView.renderSpinner();
//   // Load new Post
//   await model.loadPost();
//   // Render new post
//   PostView.render(model.state.post);

//   // Add observer to last post and eventually generate new one
//   PostView.addHandlerObserver(controlPosts);
// };

// const init = function () {
//   PostView.addHandlerRender(controlPosts);
// };
// init();

class Controller {
  constructor() {
    this.init();
    this.createInitialPosts();
    // this.controlPosts();
  }

  init() {
    // const post = new PostView();
    // post.addHandlerRender(this.controlPosts);
    new HeaderView();
    new FooterView();
  }

  async createInitialPosts() {
    const loader = new LoaderView();
    // Load new Post
    await model.loadPost();
    // Render new post
    // post.render(model.state.post);

    const post = new PostView(model.state.post);

    loader.destroy();

    // Add observer to last post and eventually generate new one
    // post.addHandlerObserver(this.controlPosts);
  }
}

new Controller();
