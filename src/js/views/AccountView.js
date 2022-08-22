import View from './View';

export class AccountView extends View {
  _message = 'This function is unsupported. Have some balloons 🎈🎈';

  constructor() {
    super();

    this._username = 'User';
    this._profilePicture =
      'https://avatars.githubusercontent.com/u/26410548?v=4';
    this._bio = 'Someone cool 😎';
    this._posts = [];
    this._fallowers = 21;
    this._following = 37;
    this._bookmarks = [];

    // username: 'User',
    // profilePicture: 'https://avatars.githubusercontent.com/u/26410548?v=4',
    // bio: 'Someone cool 😎',
    // posts: [],
    // fallowers: '21',
    // following: '37',
    // bookmarks: [],
  }

  // getAccountData() {
  //   return this._data;
  // }
}
