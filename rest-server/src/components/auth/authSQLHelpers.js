export const signUpHelper = ({ email, username, password, type }) => {
  return `
    INSERT into users (email, username, password, type)
    VALUES ('${email}','${username}','${password}','${type}')
    RETURNING id, email, username, type
  `;
}
export const loginHelper = ({ username }) => {
  return `
    SELECT id, email, username, password, type
    FROM users
    WHERE username='${username}'
  `;
};