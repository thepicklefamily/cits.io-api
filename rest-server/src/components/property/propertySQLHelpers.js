export const addPropertyHelper = ({ secret_key, name, address }) => {
  return `
    INSERT into properties (secret_key, name, address)
    VALUES ('${secret_key}','${name}','${address}')
    RETURNING id, secret_key, name, address
  `;
};

export const getPropertyHelper = ({ name }) => {
  return `
    SELECT *
    FROM properties
    WHERE name='${name}'
  `;
};