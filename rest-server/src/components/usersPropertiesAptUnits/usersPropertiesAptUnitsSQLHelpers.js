export const addUsersPropertiesAptUnitsHelper = ({ userID, propertyID, aptUnitID }) => {
  return `
    INSERT into users_properties_apt_units (user_id, property_id, apt_unit_id)
    VALUES ('${userID}', '${propertyID}', '${aptUnitID}')
    RETURNING user_id, property_id, apt_unit_id
  `;
}

// export const getUsersPropertiesAptUnitsHelper = ({ userID }) => {
//   return `
//     SELECT id, name, address, secret_key
//     FROM properties AS p
//       INNER JOIN users_properties_apt_units AS up
//       ON (p.id = up.property_id)
//       WHERE up.user_id = ${userID}
//   `;
// };

