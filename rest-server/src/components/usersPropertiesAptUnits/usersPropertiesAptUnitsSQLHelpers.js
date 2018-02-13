export const addUsersPropertiesAptUnitsHelper = ({ userID, propertyID, aptUnitID }) => {
  return `
    INSERT into users_properties_apt_units (user_id, property_id, apt_unit_id)
    VALUES ('${userID}', '${propertyID}', '${aptUnitID}')
    RETURNING user_id, property_id, apt_unit_id
  `;
}

// export const getUsersPropertiesAptUnitsHelper = ({ userID }) => {
//   return `
//     SELECT p.id, p.name, p.address, p.secret_key, au.unit
//       FROM users_properties_apt_units AS upa
//       INNER JOIN properties AS p
//         ON (p.id = upa.property_id)
//       INNER JOIN apt_units AS au
//         ON (au.id = upa.apt_unit_id)
//       WHERE upa.user_id = ${userID}
//   `;
// };

export const getUsersPropertiesAptUnitsHelper = ({ userID }) => {
  return `
    SELECT p.id, p.name, p.address, p.secret_key, au.unit
      FROM properties AS p, 
           apt_units AS au, 
           users_properties_apt_units AS upa
      WHERE upa.user_id = ${userID}
      AND upa.property_id = p.id
      AND upa.apt_unit_id = au.id
  `;
};

export const getManagerEmailsByPropertyHelper = ({ propertyID }) => {
  return `SELECT DISTINCT u.email
    FROM users AS u,
        users_properties_apt_units AS upa
    WHERE u.type = 1
    AND upa.property_id = ${propertyID}
  `;
}

export const editUsersPropertiesAptUnitsHelper = ({ userID, propertyID, unitID }) => {
  return `
    UPDATE users_properties_apt_units
      SET apt_unit_id = ${unitID}
    WHERE user_id = ${userID}
    AND property_id = ${propertyID}
  `;
};

export const deleteUsersPropertiesAptUnitsHelper = ({ userID, propertyID }) => {
  return `
    DELETE FROM users_properties_apt_units
    WHERE user_id = ${userID}
    AND property_id = ${propertyID}
  `;
};
