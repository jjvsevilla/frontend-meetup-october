import comments from '../data/comments';
import { ADD_COMMENT } from '../actions/commentsAction';

function commentsReducer(state = comments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.chelaId]: [
          ...state[action.chelaId] || [],
          {
            user: action.user,
            text: action.comment
          }
        ]
      };
    default:
      return state;
  }
}

export default commentsReducer;