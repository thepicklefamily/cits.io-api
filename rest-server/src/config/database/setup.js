import {
  createUserTable,
  dropUserTable,
  createDatabase,
  dropDatabase,
  createPropertyTable,
  dropPropertyTable,
  createPhonebookTable,
  dropPhonebookTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropPhonebookTable(); // be wary of the order which the tables are dropping
  await dropPropertyTable();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  await createPhonebookTable();
  process.exit();
};

setup();