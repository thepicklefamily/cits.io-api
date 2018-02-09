const redis = require('redis');
const {promisify} = require('util');
let client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on('connect', function(){
  console.log('Connected to Redis...');
});


//setup:
//query mongodb for last msg for each prop id?
  //then setAsync for each?

async function set () {
  try {
    const data = await setAsync('cat', 'meow');
    console.log('data', data);

  } catch (err) {
    console.log('redis error = ', err);
  }
} 

async function get () {
  try {
    const data = await getAsync('cat');
    console.log('data', data);

  } catch (err) {
    console.log('redis error = ', err);
  }
} 

set();
get();