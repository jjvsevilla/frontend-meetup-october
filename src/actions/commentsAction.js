export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(chelaId, user, comment) {
  return {
    type: ADD_COMMENT,
    chelaId,
    user,
    comment
  }
}