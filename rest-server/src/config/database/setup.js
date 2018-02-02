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
  dropArticleTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropPropertyTable();
  await dropUserTable();
  await dropArticleTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createPhonebookTable();
  await createArticleTable();
  process.exit();
};

setup();