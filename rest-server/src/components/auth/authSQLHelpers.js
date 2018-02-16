export const signUpHelper = ({ full_name, email, username, password, type, phonenumber }) => {
  return `
    INSERT into users (full_name, email, username, password, type, phonenumber)
    VALUES ('${full_name.replace(/'/g, "''")}', '${email}','${username}','${password}','${type}', '${phonenumber}')
    RETURNING id, full_name, email, username, type, phonenumber
  `;
}
export const loginHelper = ({ username }) => {
  return `
    SELECT id, email, username, password, type, phonenumber, full_name
    FROM users
    WHERE username='${username}'
  `;
};