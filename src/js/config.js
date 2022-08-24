import gallery_1 from '../img/gallery/gallery-1.avif';
import gallery_2 from '../img/gallery/gallery-2.avif';
import gallery_3 from '../img/gallery/gallery-3.avif';
import gallery_4 from '../img/gallery/gallery-4.avif';
import gallery_5 from '../img/gallery/gallery-5.avif';
import gallery_6 from '../img/gallery/gallery-6.avif';
import gallery_7 from '../img/gallery/gallery-7.avif';
import gallery_8 from '../img/gallery/gallery-8.avif';
import gallery_9 from '../img/gallery/gallery-9.avif';
import gallery_10 from '../img/gallery/gallery-10.avif';
import gallery_11 from '../img/gallery/gallery-11.avif';
import gallery_12 from '../img/gallery/gallery-12.avif';
import gallery_13 from '../img/gallery/gallery-13.avif';
import gallery_14 from '../img/gallery/gallery-14.avif';
import gallery_15 from '../img/gallery/gallery-15.avif';

export const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
export const USER_API_URL = 'https://randomuser.me/api/';
export const QUOTE_API_URL = 'https://favqs.com/api/qotd';
export const ALT_QUOTE_API_URL = 'https://quotable.io/quotes';
export const MAX_LENGTH = 50;
export const MIN_LENGTH = 30;
export const MAX_PAGE_NUM = 65;
export const NAT_ARR = 'au,br,ca,ch,de,dk,es,fi,fr,gb,ie,mx,nl,no,nz,ua,us';
export const USER_DATA = 'name,picture';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 2;
export const MODAL_CLOSE_SEC = 2.5;
export const USER_IMAGES = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
  'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  'https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1608096275202-85fd2fc2e4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1616781296073-65d3f087de41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
  'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  'https://images.unsplash.com/photo-1603232644140-bb47da511b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  'https://images.unsplash.com/photo-1588269845464-8993565cac3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
];

// RANDOM DOGP PHOTO API DOCS: https://dog.ceo/dog-api/
// RANDOM USER API DOCS: https://randomuser.me/
// ALTERNATIVE USER API DOCS: https://github.com/lukePeavey/quotable
// RANDOM QUOTE API DOCS: https://favqs.com/api
