export const getUserDataByUserIDHelper = ({ user_id }) => {
  return `
    SELECT id, email, username, password, type, phonenumber, full_name
    FROM users
    WHERE id = ${user_id}
  `;
};

export const editUserDataHelper = ({ user_id, full_name, email, username, phonenumber }) => {
  return `
    UPDATE users
      SET 
        full_name = '${full_name.replace(/'/g, "''")}',
        email = '${email}',
        username = '${username}',
        phonenumber = ${phonenumber}
    WHERE id = ${user_id}
    RETURNING id, full_name, email, username, phonenumber
  `;
};

export const editPasswordHelper = ({ user_id, new_password }) => {
  console.log('New password and ID inside editPasswordHelper:', new_password, user_id);
  return `
    UPDATE users
      SET password = '${new_password}'
    WHERE id = ${user_id}
  `;
};