export const addTicketHelper = ({ category, apt_num, date, subject, description, photo_url, status, userId, propertyId }) => {
  return `
    INSERT into tickets (category, apt_num, date, subject, description, photo_url, status, userId, propertyId)
    VALUES ('${category}', '${apt_num}', '${date}', '${subject}', '${description}', '${photo_url}', '${status}', '${userId}', '${propertyId}')
    RETURNING id, category, apt_num, date, subject, description, photo_url, status, userId, propertyId
  `;
};