export const signUpHelper = ({id, email, username, password, type}) => {
  return `
    INSERT into Users (id, email, username, password, type)
    VALUES ('${id}','${email}','${username}','${password}','${type}')
  `
}
export const loginHelper = ({ username }) => {
  return `
    SELECT id, email, username, password, type
    FROM users
    WHERE username='${username}'
  `;
};