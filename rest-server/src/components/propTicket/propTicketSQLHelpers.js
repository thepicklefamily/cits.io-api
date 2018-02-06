export const getTicketsByPropIDHelper = ({ prop_id }) => {
  return `
    SELECT id, category, apt_num, date, subject, description, photo_url, status, userId, propertyId
    FROM tickets
    WHERE propertyId=${prop_id}
  `;
};