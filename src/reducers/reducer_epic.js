import { FETCH_EPIC } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_EPIC:
      //console.log({epic: action.payload});
      return action.payload.data;
    default:
      return state;
  }
}
