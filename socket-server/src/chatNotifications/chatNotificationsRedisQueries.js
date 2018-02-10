import { setAsync, getAsync } from '../../config/redis.js';

export const redisSet = async (propId, time) => {
  try {
    const data = await setAsync(propId, time);
    console.log('data', data);
    return data;
  } catch (err) {
    console.log(`redisSet ${propId, time} error = `, err);
  }
} 

export const redisGet = async (propId) => {
  try {
    const data = await getAsync(propId);
    console.log('data', data);
    return data;
  } catch (err) {
    console.log(`redisGet ${propId} time error = `, err);
  }
}