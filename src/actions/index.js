import axios from 'axios';
import keys from '../../config/keys';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = `key=${keys.API_KEY}`;

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_posts';
export const DELETE_POST = 'delete_post';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts?${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}?${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const url = `${ROOT_URL}/posts?${API_KEY}`;
  const request = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const url = `${ROOT_URL}/posts/${id}?${API_KEY}`;
  axios.delete(url).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
