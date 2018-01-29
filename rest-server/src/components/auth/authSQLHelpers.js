export const signUpHelper = () => {
  
}

export const loginHelper = ({ username }) => {
  return `
    SELECT id, email, username, password, type
    FROM users
    WHERE username='${username}'
  `;
};