export const signUpHelper = ({ full_name, phone, email, username, password, type }) => {
  return `
    INSERT into users (full_name, phone, email, username, password, type)
    VALUES ('${full_name}','${phone}','${email}','${username}','${password}','${type}')
    RETURNING id, full_name, phone, email, username, type
  `;
}
export const loginHelper = ({ username }) => {
  return `
    SELECT *
    FROM users
    WHERE username='${username}'
  `;
};