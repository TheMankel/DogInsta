import * as model from './model';
import { HeaderView } from './views/HeaderView';
import { FooterView } from './views/FooterView';
import { PostView } from './views/PostView';
import { LoaderView } from './views/LoaderView';

class Controller {
  constructor() {
    this.init();
    this.controlPosts();
  }

  async init() {
    new HeaderView();
    new FooterView();
  }

  async controlPosts() {
    // Create loader spinner
    const loader = new LoaderView();

    // Load new Post Data
    await model.loadPost();

    // Create new post
    const post = new PostView(model.state.post);

    // Destroy loader spinner
    loader.destroy();

    // Add observer to last post and eventually generate new one
    post.addHandlerObserver(this.controlPosts.bind(this));
  }
}

new Controller();
