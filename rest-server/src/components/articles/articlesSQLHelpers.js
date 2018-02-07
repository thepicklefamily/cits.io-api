export const addArticleHelper = ({ title, content, date, photo_url, user_id, property_id}) => {
  return `
    INSERT INTO articles (title, content, date, photo_url, userId, propertyId) 
    VALUES ('${title}','${content}','${date}','${photo_url}',${user_id}, ${property_id})
    RETURNING id, title, content, date, photo_url, userId, propertyId
  `
}

export const editArticleHelper = ({ title, content, date, photo_url, article_id }) => {
  return `
    UPDATE articles
    SET title = '${title}',
      content = '${content}',
      date = '${date}',
      photo_url = '${photo_url}'
    WHERE id = ${article_id}
    RETURNING id, title, content, date, photo_url, userId, propertyId
  `
}

export const deleteArticleHelper = ({ article_id }) => {
  return `
    DELETE FROM articles
    WHERE id = ${article_id}
  `
}

export const fetchAllArticlesHelper = ({ property_id }) => {
  return `
    SELECT * FROM articles
    WHERE propertyId = ${property_id}
  `
}
