require('dotenv').config();

import db from '../../config/database';
import {
  success,
  error
} from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
      (
        id SERIAL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        type INT NOT NULL,
        phonenumber VARCHAR(255) NOT NULL,
        CONSTRAINT users_pk
          PRIMARY KEY(id)
      )
      `
    );
    success('successfully created users table');
  } catch (err) {
    error('error creating users table ', err);
  }
};

export const dropUserTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  } catch (err) {
    error('error dropping users table ', err);
  }
};

export const createPropertyTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS properties
      (
        id SERIAL,
        secret_key VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) UNIQUE NOT NULL,
        CONSTRAINT properties_pk
          PRIMARY KEY(id)
      )
      `
    );
    success('successfully created properties table');
  } catch (err) {
    error('error creating properties table ', err)
  }
};

export const dropPropertyTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS properties`
    );
    success('successfully dropped properties table');
  } catch (err) {
    error('error dropping properties table ', err);
  }
};

export const createPhonebookTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS phonebooks
      (
        id SERIAL,
        company VARCHAR(255) NOT NULL,
        service VARCHAR(255) NOT NULL,
        contactInfo VARCHAR(255) NOT NULL,
        propertyId INT NOT NULL,
        CONSTRAINT phonebooks_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_phonebooks_propertyId
          FOREIGN KEY(propertyId) REFERENCES properties(id)
      )
      `
    );
    success('successfully created phonebooks table');
  } catch (err) {
    error('error creating phonebooks table ', err);
  }
};

export const dropPhonebookTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS phonebooks`
    );
    success('successfully dropped phonebooks table');
  } catch (err) {
    error('error dropping phonebooks table ', err);
  }
};

export const createArticleTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS articles 
      (
        id SERIAL,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        photo_url VARCHAR(255) NOT NULL,
        userId INT NOT NULL,
        propertyId INT NOT NULL,
        CONSTRAINT articles_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_articles_propertyId
          FOREIGN KEY(propertyId) REFERENCES properties(id),
        CONSTRAINT fk_articles_userId
          FOREIGN KEY(userId) REFERENCES users(id)
      )
      `
    );
    success('successfully created articles table');
  } catch (err) {
    error('error creating articles table ', err);
  }
};

export const dropArticleTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS articles`
    );
    success('successfully dropped articles table');
  } catch (err) {
    error('error dropping articles table ', err);
  }
};


export const createTicketTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS tickets 
      (
        id SERIAL,
        category VARCHAR(255) NOT NULL,
        apt_num VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        photo_url VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        userId INT NOT NULL,
        propertyId INT NOT NULL,
        CONSTRAINT tickets_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_tickets_propertyId
          FOREIGN KEY(propertyId) REFERENCES properties(id),
        CONSTRAINT fk_tickets_userId
          FOREIGN KEY(userId) REFERENCES users(id)
      )
      `
    );
    success('successfully created tickets table');
  } catch (err) {
    error('error creating tickets table ', err);
  }
};

export const dropTicketTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS tickets`
    );
    success('successfully dropped tickets table');
  } catch (err) {
    error('error dropping tickets table ', err);
  }
};


