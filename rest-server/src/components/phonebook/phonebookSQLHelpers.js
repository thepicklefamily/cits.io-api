export const addPropertyPhonebookHelper = ({ company, service, contactInfo, propertyId }) => {
  return `
    INSERT INTO phonebooks (company, service, contactInfo, propertyId)
    VALUES ('${company.replace(/'/g, "''")}', '${service.replace(/'/g, "''")}', '${contactInfo}', ${propertyId})
    RETURNING id, company, service, contactInfo, propertyId
  `;
};

export const fetchPropertyPhonebookHelper = ({propertyId}) => {
  return `
    SELECT id, company, service, contactInfo
    FROM phonebooks
    WHERE propertyId=${propertyId}
  `;
};

export const updatePropertyPhonebookHelper = ({ id, company, service, contactInfo }) => {
  return `
  UPDATE phonebooks
  SET company = '${company.replace(/'/g, "''")}', service = '${service.replace(/'/g, "''")}', contactInfo = '${contactInfo}'
  WHERE id=${id}
  RETURNING company, service, contactInfo
  `;
};

export const deletePropertyPhonebookHelper = ({ id }) => {
  return `
  DELETE FROM phonebooks
  WHERE id=${id}
  `
};