export const addPostHelper = ({ username, text, date, parent_id, article_id }) => {
  return `
    INSERT INTO posts (username, text, date, parentId, articleId)
    VALUES ('${username}', '${text}', '${date}', ${parent_id}, ${article_id})
    RETURNING id, username, text, date, parentId, articleId
  `
}

export const updatePostHelper = ({ post_id, text, date }) => {
  return `
    UPDATE posts
    SET text = '${text}',
          date = '${date}'
    WHERE id = ${post_id}
    RETURNING id, username, text, date, parentId, articleId
  `
}

export const deletePostHelper = ({ post_id }) => {
  return `DELETE FROM posts WHERE id = ${post_id}`
}

//fetchpost should return a tree of posts;



