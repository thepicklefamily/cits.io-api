import db from '../../config/database';
import { addPropertyPhonebookQuery, fetchPropertyPhonebookQuery } from './phonebookQueries';
import { success, error } from '../../lib/log';
import { generateToken } from '../../middleware/auth/jwt';

export const addPropertyPhonebookController = async (req, res) => {
  try {
    const data = await addPropertyPhonebookQuery(req.body);
    success('addPropertyPhonebookController - successfully added property phonebook ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addPropertyPhonebookController - error= ', err);
  }
};


export const fetchPropertyPhonebookController = async (req, res) => {
  try {
    const data = await fetchPropertyPhonebookQuery(req.params);
    success('fetchPropertyPhonebookController - successfully fetched property phonebook ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchPropertyPhonebookController - error= ', err);
  }
};