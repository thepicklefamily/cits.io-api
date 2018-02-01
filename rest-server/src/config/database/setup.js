import {
  createUserTable,
  dropUserTable,
  createDatabase,
  dropDatabase,
  createPropertyTable,
  dropPropertyTable
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUserTable();
  await dropPropertyTable();
  await createDatabase();
  await createUserTable();
  await createPropertyTable();
  process.exit();
};

setup();