import chelas from '../data/chelas';
import { LIKE_BEER } from '../actions/chelasActions';

function chelasReducer(state = chelas, action) {
  switch (action.type) {
    case LIKE_BEER:
      const { index } = action;
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { likes: state[index].likes + 1 }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default chelasReducer;