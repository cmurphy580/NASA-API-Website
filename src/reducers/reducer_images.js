import { FETCH_IMAGES } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_IMAGES:
      //console.log({images: action.payload});
      return action.payload.data;
    default:
      return state;
  }
}
