import * as model from './model';
import { HeaderView } from './views/HeaderView';
import { FooterView } from './views/FooterView';
import { PostView } from './views/PostView';
import { AccountView } from './views/AccountView';
import { LoaderView } from './views/LoaderView';

// class Controller {
//   constructor() {
//     this.init();
//     this.controlPosts();
//   }

//   async init() {
//     const header = new HeaderView();
//     const footer = new FooterView();
//     model.state.account = new AccountView();

//     header.addHandlerAccount(model.state.account);
//     footer.addHandlerAccount(model.state.account);
//   }

//   async controlPosts() {
//     // Create loader spinner
//     const loader = new LoaderView();

//     // Load new Post Data
//     await model.loadPost();

//     // Create new post
//     const post = new PostView(model.state.post);

//     // Destroy loader spinner
//     loader.destroy();

//     // Add observer to last post and eventually generate new one
//     post.addHandlerObserver(this.addObserver.bind(this));

//     // model.state.account = new AccountView();
//     post.addHandlerAccount(model.state.account);
//   }

//   addObserver(post) {
//     console.log(post);
//     const callback = (entries) => {
//       if (entries[0].intersectionRatio === 1) {
//         this.controlPosts();
//         observer.unobserve(entries[0].target);
//       }
//     };

//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: [0.25, 0.5, 0.75, 1],
//     };

//     const observer = new IntersectionObserver(callback, options);

//     observer.observe(post);
//   }

//   controlAddNewPost() {
//     const newPost = new GalleryView();
//   }
// }

// new Controller();

const controlPosts = async function () {
  try {
    // Create loader spinner
    const loader = new LoaderView();

    // Load new Post Data
    await model.loadPost();

    // Create new post
    const post = new PostView(model.state.post);

    // Render new post and insert it before end
    post.render('beforeend');

    // Init post buttons
    post.initButtons();

    // Destroy loader spinner
    loader.destroy();

    // Add observer to last post and eventually generate new one
    post.addHandlerObserver(addObserver);

    // model.state.account = new AccountView();
    post.addHandlerAccount(model.state.account);
  } catch (err) {
    // Create new post
    const post = new PostView(model.state.post);

    // Render error message
    post.renderError();

    // Add observer to last post and eventually generate new one
    post.addHandlerObserver(addObserver);
    // console.log(err);
  }
};

const addObserver = function (post) {
  // console.log(post);
  const callback = (entries) => {
    if (entries[0].intersectionRatio === 1) {
      controlPosts();
      observer.unobserve(entries[0].target);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.25, 0.5, 0.75, 1],
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(post);
};

const init = async function () {
  const header = new HeaderView();
  const footer = new FooterView();

  header.addHandlerAccount(model.state.account);
  footer.addHandlerAccount(model.state.account);

  // account.addHandlerAccount(model.state.account);

  controlPosts();
};

init();
