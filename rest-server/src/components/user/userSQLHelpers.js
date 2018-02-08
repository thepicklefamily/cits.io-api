export const getUserDataByUserIDHelper = ({ user_id }) => {
  return `
    SELECT id, email, username, password, type, phonenumber, full_name
    FROM users
    WHERE id=${user_id}
  `;
};