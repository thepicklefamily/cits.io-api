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
  dropAptUnitsTable,
  createPostTable,
  dropPostTable
} from '../../lib/SQL';

const setup = async () => {
  // be wary of the order which the tables are dropping
  await dropDatabase();
  await dropUsersPropertiesAptUnitsTable();
  await dropPostTable();
  await dropArticleTable();
  await dropTicketTable();
  await dropPhonebookTable(); 
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
  await createPostTable();
  await createUsersPropertiesAptUnitsTable();
  process.exit();
};

setup();
