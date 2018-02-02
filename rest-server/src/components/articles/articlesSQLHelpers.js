export const addArticleHelper = ({ title, content, date, userId, propertyId}) => {
  return `
    INSERT INTO articles (title, content, date, userId, propertyId) 
    VALUES ('${title}','${content}','${date}','${userId}','${propertyId}')
    RETURNING id, title, content, date
  `
}

export const editArticleHelper = ({ title, content, date, article_id }) => {
  return `
    UPDATE articles SET title = '${title}', content = '${content}', date = '${date}' 
    WHERE id = ${article_id}
    RETURNING id, title, content, date
`
}

export const deleteArticleHelper = ({ article_id }) => {
  return `
    DELETE FROM articles
    WHERE id = ${article_id}
  `
}

export const fetchAllArticlesHelper = ({ }) => {
  return `
    SELECT * FROM articles
  `
}
