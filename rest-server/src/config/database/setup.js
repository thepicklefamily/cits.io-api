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
  createUsersPropertiesTable,
  dropUsersPropertiesTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUsersPropertiesTable();
  await dropArticleTable();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropPropertyTable();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createPhonebookTable();
  await createArticleTable();
  await createUsersPropertiesTable();
  process.exit();
};

setup();
