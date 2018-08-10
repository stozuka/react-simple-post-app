import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const data = action.payload.data;
      return { ...state, [data.id]: data };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
