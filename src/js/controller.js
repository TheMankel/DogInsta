import * as model from './model';
import PostView from './views/PostView';

const controlPosts = async function () {
  PostView.renderSpinner();
  // Load new Post
  await model.loadPost();
  // Render new post
  PostView.render(model.state.post);

  // Add observer to last post and eventually generate new one
  PostView.addHandlerObserver(controlPosts);
};

const init = function () {
  PostView.addHandlerRender(controlPosts);
};
init();

// class App {
//   constructor() {
//     this.init();
//     this.controlPosts();
//     this.controlPosts();
//   }

//   init() {
//     // const post = new PostView();
//     // post.addHandlerRender(this.controlPosts);
//   }

//   async controlPosts() {
//     const post = new PostView();

//     post.renderSpinner();
//     // Load new Post
//     await model.loadPost();
//     // Render new post
//     post.render(model.state.post);

//     // Add observer to last post and eventually generate new one
//     post.addHandlerObserver(controlPosts);
//   }
// }

// new App();
