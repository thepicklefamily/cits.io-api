import db from '../../config/database';
import { addPropertyPhonebookQuery, fetchPropertyPhonebookQuery, updatePropertyPhonebookQuery, deletePropertyPhonebookQuery } from './phonebookQueries';
import { success, error } from '../../lib/log';

export const addPropertyPhonebookController = async (req, res) => {
  try {
    console.log('here is the req.body ', req.body);
    const { rows } = await addPropertyPhonebookQuery(req.body);
    success('addPropertyPhonebookController - successfully added property phonebook ', rows);
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addPropertyPhonebookController - error= ', err);
    return res.status(400).send(err); 
  }
};


export const fetchPropertyPhonebookController = async (req, res) => {
  try {
    const { rows } = await fetchPropertyPhonebookQuery(req.params);
    success('fetchPropertyPhonebookController - successfully fetched property phonebook ', rows);
    return res.status(200).send(rows);
  } catch (err) {
    error('fetchPropertyPhonebookController - error= ', err);
    return res.status(400).send(err); 
  }
};

export const updatePropertyPhonebookController = async (req, res) => {
  try {
    const { rows } = await updatePropertyPhonebookQuery(req.body);
    success('updatePropertyPhonebookController - successfully updated property phonebook ', rows);
    return res.status(200).send(rows);
  } catch (err) {
    error('updatePropertyPhonebookController - error= ', err);
    return res.status(400).send(err); 
  }
};

export const deletePropertyPhonebookController = async (req, res) => {
  try {
    const data = await deletePropertyPhonebookQuery(req.params);
    success('deletePropertyPhonebookController - successfully deleted property phonebook ', data);
    return res.status(200).send();
  } catch (err) {
    error('deletePropertyPhonebookController - error= ', err);
    return res.status(400).send(err); 
  }
};
















































//hidden love note : <3