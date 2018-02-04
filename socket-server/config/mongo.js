const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/messages');

const messageSchema = new Schema({
  message: String,
  username: String,
  roomname: String,
  type: String,
  date: { type: Date, default: Date.now }
});

const Messages = mongoose.model('Messages', messageSchema);

module.exports.Messages = Messages;