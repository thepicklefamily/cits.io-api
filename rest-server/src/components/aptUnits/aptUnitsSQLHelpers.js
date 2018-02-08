export const addAptUnitHelper = ({ unit }) => {
  return `
    INSERT into apt_units (unit)
    VALUES ('${unit}')
    RETURNING id, unit
  `;
};

export const getAptUnitByIDHelper = ({ id }) => {
  return `
    SELECT *
    FROM apt_units
    WHERE id='${id}'
  `;
};