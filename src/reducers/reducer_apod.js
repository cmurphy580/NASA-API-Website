import { FETCH_APOD } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_APOD:
      //console.log({apod: action.payload});
      return action.payload.data;
    default:
      return state;
  }
}
