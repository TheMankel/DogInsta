import { DOG_API_URL, QUOTE_API_URL, USER_API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  post: {},
  userPosts: [],
  bookmarks: [],
};

const createPostData = function (userObject) {
  state.post = {
    username: userObject.login.username,
    profilePictures: userObject.picture,
    postImage: userObject.postImage,
    quote: userObject.quote,
  };
};

export const loadPost = async function () {
  try {
    const imageData = await getJSON(DOG_API_URL);
    const userData = await getJSON(USER_API_URL);
    const quoteData = await getJSON(QUOTE_API_URL);

    const { results } = userData;
    const userObject = new Object(...results);
    const { quote } = quoteData;

    userObject.postImage = imageData.message;
    userObject.quote = quote.body;

    createPostData(userObject);
    // console.log(state.post);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
