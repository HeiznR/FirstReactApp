export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategoryBy = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
