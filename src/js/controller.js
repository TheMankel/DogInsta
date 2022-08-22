import * as model from './model';
import { HeaderView } from './views/HeaderView';
import { FooterView } from './views/FooterView';
import { PostView } from './views/PostView';
import { AccountView } from './views/AccountView';
import { LoaderView } from './views/LoaderView';

class Controller {
  constructor() {
    this.init();
    this.controlPosts();
  }

  async init() {
    const header = new HeaderView();
    const footer = new FooterView();
    model.state.account = new AccountView();

    header.addHandlerAccount(model.state.account);
    footer.addHandlerAccount(model.state.account);
    console.log(header);
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

    // model.state.account = new AccountView();
    post.addHandlerAccount(model.state.account);
  }
}

new Controller();
