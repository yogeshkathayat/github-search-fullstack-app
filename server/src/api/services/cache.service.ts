import { promisify } from 'util';
import { redisClient } from '../../config/cache';
import { REDIS_DATA_EXPIRATION_TIME } from '../../config/vars';
/**
 * CacheService class
 * contains methods related to
 * cache
 * @class
 */
export class CacheService {
  constructor() {}
  /**
   * @description method to get cache data from redis
   * @param {string} key key string
   */
  async getData(key: string): Promise<any> {
    try {
      const getAsync = promisify(redisClient.get).bind(redisClient);
      let data = await getAsync(key);
      data = JSON.parse(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description method to set data with key in redis
   * @param {string} key key string
   * @param {string} data data to be saved
   */
  setData(key: string, data: any): void {
    try {
      redisClient.setex(key, REDIS_DATA_EXPIRATION_TIME, JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description method to delete all data from cache
   */
  async delData() {
    try {
      const flushAllAsync = promisify(redisClient.flushall).bind(redisClient);

      await flushAllAsync();
    } catch (error) {
      throw error;
    }
  }
}
