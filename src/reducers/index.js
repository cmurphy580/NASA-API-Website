import { combineReducers } from 'redux';
import EPICReducer from './reducer_epic';
import APODReducer from './reducer_apod';
import ImagesReducer from './reducer_images';

const rootReducer = combineReducers({
  epic: EPICReducer,
  apod: APODReducer,
  images: ImagesReducer
});

export default rootReducer;
