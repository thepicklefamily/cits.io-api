import {
  createUserTable,
  dropUserTable,
  createDatabase,
  dropDatabase,
  createPropertyTable,
  dropPropertyTable,
  createPhonebookTable,
  dropPhonebookTable,
  createArticleTable,
  dropArticleTable,
  createTicketTable,
  dropTicketTable,
  createUsersPropertiesTable,
  dropUsersPropertiesTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUsersPropertiesTable();
  await dropArticleTable();
  await dropTicketTable();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropPropertyTable();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createPhonebookTable();
  await createTicketTable();
  await createArticleTable();
  await createUsersPropertiesTable();
  process.exit();
};

setup();
