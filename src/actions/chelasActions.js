export const LIKE_BEER = 'LIKE_BEER';

export function likeBeer(index) {
  return {
    type: LIKE_BEER,
    index
  }
}