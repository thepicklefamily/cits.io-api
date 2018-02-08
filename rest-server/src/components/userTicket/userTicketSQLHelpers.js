export const editTicketHelper = ({ id, category, apt_num, date, subject, description, photo_url, status, userid, propertyid }) => {
  return `
  UPDATE tickets
  SET category = '${category}', apt_num = '${apt_num}', date = '${date}', subject = '${subject}', description = '${description}', photo_url = '${photo_url}', status = '${status}', userId = '${userid}', propertyId = '${propertyid}'
  WHERE id=${id}
  RETURNING id, category, apt_num, date, subject, description, photo_url, status, userId, propertyId
  `;
};

export const deleteTicketHelper = ({ ticket_id }) => {
  return `
  DELETE FROM tickets
  WHERE id=${ticket_id}
  `;
};