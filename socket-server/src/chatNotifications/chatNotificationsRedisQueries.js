import { setAsync, getAsync } from '../../config/redis.js';

export const redisSet = async (propId, timeStamp) => {
  try {
    console.log(`redisSetting ${propId}: ${timeStamp}`);
    const data = await setAsync(propId, timeStamp);
    console.log('redisSet data ', data);
  } catch (err) {
    console.log(`redisSet for propId: timeStamp '${propId}: ${timeStamp}' error = `, err);
  }
} 

export const redisGet = async (propId) => {
  try {
    const data = await getAsync(propId);
    console.log('redisGet data = ', data);
    return data;
  } catch (err) {
    console.log(`redisGet for propId ${propId} error = `, err);
  }
}