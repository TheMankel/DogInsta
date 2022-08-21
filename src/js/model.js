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
  userPosts: [],
  bookmarks: [],
};

const createPostData = function (userObject) {
  state.post = {
    username: userObject.name.first,
    profilePictures: userObject.picture,
    postImage: userObject.postImage,
    description: userObject.description,
    comments: userObject.comments,
    likesCount: userObject.likesCount,
  };
};

// const createUserData = async function (amount = 1) {
//   try {
//     console.log('amount', amount);

//     const userData = await getJSON(
//       `${USER_API_URL}?inc=${USER_DATA}&nat=${NAT_ARR}&noinfo&results=${amount}`,
//     );
//     // const quoteData = await getJSON(QUOTE_API_URL);

//     // const { results } = userData;
//     // const { quote } = quoteData;

//     // const userObject = new Object(...results);
//     // userObject.description = quote.body;

//     const { results } = userData;
//     console.log(results);
//     let userObject;
//     // console.log([userObject].length);

//     if (results.length === 1) {
//       const quoteData = await getJSON(QUOTE_API_URL);

//       const { quote } = quoteData;

//       userObject = new Object(...results);
//       console.log(userObject);
//       userObject.description = quote.body;
//     } else {
//       userObject = results.map((res) => new Object(res));
//       console.log(userObject);

//       for (let i = 0; i < amount; i++) {
//         const quoteData = await getJSON(QUOTE_API_URL);
//         const { quote } = quoteData;
//         userObject[i].description = quote.body;
//       }
//     }

//     return userObject;
//   } catch (err) {
//     console.error(`${err} 💥💥💥💥`);
//     throw err;
//   }
// };

// export const loadPost = async function () {
//   try {
//     // const userData = await getJSON(
//     //   `${USER_API_URL}?inc=${USER_DATA}&nat=${NAT_ARR}&noinfo`,
//     // );
//     // const imageData = await getJSON(DOG_API_URL);
//     // const quoteData = await getJSON(QUOTE_API_URL);

//     // const { results } = userData;
//     // const { message } = imageData;
//     // const { quote } = quoteData;

//     // const userObject = new Object(...results);
//     // userObject.postImage = message;
//     // userObject.description = quote.body;

//     const imageData = await getJSON(DOG_API_URL);
//     const { message } = imageData;

//     const userObject = await createUserData();
//     userObject.postImage = message;
//     userObject.comments = [];
//     userObject.likesCount = getRandomInt(0, 10000);

//     const commentsCount = getRandomInt(1, 3);

//     // for (let i = 0; i < commentsCount; i++) {
//     //   // const quoteData = await getJSON(QUOTE_API_URL);
//     //   // const { quote } = quoteData;

//     //   // userObject.comments.push(quote.body);

//     //   const userComment = await createUserData();
//     //   userObject.comments.push(userComment);
//     // }
//     const userComment = await createUserData(2);
//     userObject.comments = userComment;

//     createPostData(userObject);
//     console.log(state.post);
//   } catch (err) {
//     console.error(`${err} 💥💥💥💥`);
//     throw err;
//   }
// };

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
    // console.log(resultsUsers);

    // const comments = resultsUsers.forEach((user, i) => {
    //   user.comment = resultsQuotes[i].content;
    //   return user;
    // });

    // console.log(resultsUsers);
    // console.log(resultsQuotes);

    const userObject = resultsUsers.shift();
    userObject.description = resultsQuotes.shift().content;

    // resultsUsers.map((key, value) => {
    //   key.comments = resultsQuotes[value].content;
    //   console.log(key);
    // });

    const comments = resultsUsers.map((user, i) => {
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
