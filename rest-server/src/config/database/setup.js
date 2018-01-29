import {

  // create
  //drop
  createUserTable,
  dropUserTable,
  createDatabase,
  dropDatabase
} from '../../lib/SQL';

const setup = async () => {
  await dropDatabase();
  await dropUserTable();
  await createDatabase();
  await createUserTable();
  process.exit();
};

setup();