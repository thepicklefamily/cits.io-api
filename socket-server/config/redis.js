const redis = require('redis');
const {promisify} = require('util');
let client = redis.createClient();
export const getAsync = promisify(client.get).bind(client);
export const setAsync = promisify(client.set).bind(client);

client.on('connect', function(){
  console.log('Connected to Redis...');
});