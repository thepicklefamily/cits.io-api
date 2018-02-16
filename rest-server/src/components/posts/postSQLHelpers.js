export const addPostHelper = ({ username, text, date, parent_id, article_id }) => {
  return `
    INSERT INTO posts (username, text, date, parentId, articleId)
    VALUES ('${username}', '${text.replace(/'/g, "''")}', '${date}', ${parent_id}, ${article_id})
    RETURNING id, username, text, date, parentId, articleId
  `;
};

export const updatePostHelper = ({ post_id, text, date }) => {
  return `
    UPDATE posts
    SET text = '${text.replace(/'/g, "''")}',
          date = '${date}'
    WHERE id = ${post_id}
    RETURNING id, username, text, date, parentId, articleId
  `;
};

export const deletePostHelper = ({ post_id }) => {
  return `DELETE FROM posts WHERE id = ${post_id}`;
};

export const fetchPostsHelper = ({ article_id }) => {
  // return  `SELECT * FROM posts`;
  return `
    WITH RECURSIVE posts_with_depths AS (
      SELECT *, 0 AS depth
      FROM posts
      WHERE parentId IS NULL AND articleId = ${article_id}
  
    UNION ALL
  
    SELECT p.*, pwd.depth + 1
    FROM posts p
    JOIN posts_with_depths pwd ON pwd.id = p.parentId
    )

    SELECT *
    FROM posts_with_depths
    `
};
