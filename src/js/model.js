import {
  ALT_QUOTE_API_URL,
  DOG_API_URL,
  MAX_LENGTH,
  MAX_PAGE_NUM,
  MIN_LENGTH,
  NAT_ARR,
  QUOTE_API_URL,
  USER_API_URL,
  USER_DATA,
} from './config';
import { getJSON, getRandomInt } from './helpers';

export const state = {
  post: {},
  account: {
    username: 'User',
    fullname: 'User Name',
    profilePicture: 'https://avatars.githubusercontent.com/u/26410548?v=4',
    bio: 'Someone cool 😎',
    posts: [],
    followers: '21',
    following: '37',
    bookmarks: [],
  },
};

const createPostData = function (userObject) {
  state.post = {
    username: userObject.name.first,
    picture: userObject.picture.thumbnail,
    postImage: userObject.postImage,
    description: userObject.description,
    comments: userObject.comments,
    likesCount: userObject.likesCount,
  };
};

// export const addBookmark = function (bookmark) {
//   state.bookmarks.push(bookmark);
// };

export const loadPost = async function () {
  try {
    const randNum = getRandomInt(3, 5);
    const pageNum = getRandomInt(1, MAX_PAGE_NUM);

    const usersData = await getJSON(
      `${USER_API_URL}?inc=${USER_DATA}&nat=${NAT_ARR}&noinfo&results=${randNum}`,
    );

    const quotesData = await getJSON(
      `${ALT_QUOTE_API_URL}?page=${pageNum}&limit=${randNum}&maxLength=${MAX_LENGTH}&minLength=${MIN_LENGTH}`,
    );

    const imageData = await getJSON(DOG_API_URL);

    const resultsUsers = usersData.results;
    const resultsQuotes = quotesData.results;
    const { message } = imageData;

    const userObject = resultsUsers.shift();
    userObject.description = resultsQuotes.shift().content;

    const comments = resultsUsers.map((user, i) => {
      user.name = user.name.first;
      user.picture = user.picture.thumbnail;
      user.comment = resultsQuotes[i].content;
      return user;
    });

    userObject.postImage = message;
    userObject.comments = comments;
    userObject.likesCount = getRandomInt(0, 10000);

    createPostData(userObject);
    // console.log(state.post);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
