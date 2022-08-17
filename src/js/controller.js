import * as model from './model';
import postView from './views/postView';

const controlPosts = async function () {
  // Load new Post
  await model.loadPost();

  // Render new post
  postView.render(model.state.post);
};

const init = function () {
  postView.addHandlerRender(controlPosts);
  postView.addHandlerRenderScroll(controlPosts);
};
init();
