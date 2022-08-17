import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  post: {},
  userPosts: [],
  bookmarks: [],
};

export const loadPost = async function () {
  try {
    const data = await getJSON(API_URL);
    state.post = data.message;
    // console.log(state.post);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
