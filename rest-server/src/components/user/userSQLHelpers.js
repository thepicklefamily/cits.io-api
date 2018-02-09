export const getUserDataByUserIDHelper = ({ user_id }) => {
  return `
    SELECT id, email, username, password, type, phonenumber, full_name
    FROM users
    WHERE id=${user_id}
  `;
};

export const editUserDataHelper = ({ user_id, full_name, email, username, phonenumber }) => {
  return `
    UPDATE users
      SET 
        full_name = '${full_name}',
        email = '${email}',
        username = '${username}',
        phonenumber = ${phonenumber}
    WHERE id=${user_id}
    RETURNING id, full_name, email, username, phonenumber
  `;
};