import * as model from './model';
import postView from './views/postView';

const controlPosts = async function () {
  // Load new Post
  await model.loadPost();
  // Render new post
  postView.render(model.state.post);

  // Add observer to last post and eventually generate new one
  postView.addObserver(controlPosts);
};

const init = function () {
  postView.addHandlerRender(controlPosts);
};
init();
