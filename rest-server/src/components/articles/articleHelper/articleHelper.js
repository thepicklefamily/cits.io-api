export const ascend = (articles) => {
  return articles.sort( (a, b) => {
    return a.id - b.id;
  });
};