export const addUsersPropertiesHelper = ({ userID, propertyID }) => {
  return `
    INSERT into users_properties (user_id, property_id)
    VALUES ('${userID}', '${propertyID}')
    RETURNING user_id, property_id
  `;
}

export const getUsersPropertiesHelper = ({ userID }) => {
  return `
    SELECT id, name, address, secret_key
    FROM properties AS p
      INNER JOIN users_properties AS up
      ON (p.id = up.property_id)
      WHERE up.user_id = ${userID}
  `;
};