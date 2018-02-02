export const addPropertyPhonebookHelper = ({ company, service, contactInfo, propertyId }) => {
  return `
    INSERT INTO phonebooks (company, service, contactInfo, propertyId)
    VALUES ('${company}', '${service}', '${contactInfo}', ${propertyId})
  `;
};

export const fetchPropertyPhonebookHelper = ({propertyId}) => {
  return `
    SELECT id, company, service, contactInfo
    FROM phonebooks
    WHERE propertyId=${propertyId}
  `;
};
