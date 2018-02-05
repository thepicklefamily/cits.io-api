export const getTicketsByTenantIDHelper = ({ tenant_id }) => {
  return `
    SELECT id, category, apt_num, date, subject, description, photo_url, status, userId, propertyId
    FROM tickets
    WHERE userId=${tenant_id}
  `;
};