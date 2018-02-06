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
  createUsersPropertiesAptUnitsTable,
  dropUsersPropertiesAptUnitsTable,
  createAptUnitsTable,
  dropAptUnitsTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUsersPropertiesAptUnitsTable();
  await dropArticleTable();
  await dropTicketTable();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropAptUnitsTable();
  await dropPropertyTable();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createAptUnitsTable();
  await createPhonebookTable();
  await createTicketTable();
  await createArticleTable();
  await createUsersPropertiesAptUnitsTable();
  process.exit();
};

setup();
