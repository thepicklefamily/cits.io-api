const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/socketdb');

//Messages table:
const messageSchema = new Schema({
  message: String,
  username: String,
  userId: Number,
  roomname: String,
  type: String,
  date: { type: Date, default: Date.now }
});


const Messages = mongoose.model('Messages', messageSchema);


//Time last online in property chat room table:
const lastOnlineSchema = new Schema({
  userId: String,
  propId: String,
  timeLastOnline: String
});


const lastOnline = mongoose.model('lastOnline', lastOnlineSchema);


module.exports.Messages = Messages;
module.exports.lastOnline = lastOnline;