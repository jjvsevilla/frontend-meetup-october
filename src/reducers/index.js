import { combineReducers } from 'redux';

import chelasReducer from './chelasReducer';

const rootReducer = combineReducers({
  chelas: chelasReducer
})

export default rootReducer;