import redis from 'redis';
import logger from './logger';
import { REDIS_URL } from './vars';

const redisClient = redis.createClient({
  url: REDIS_URL,
});

const init = async () =>
  new Promise((resolve, reject) => {
    redisClient.on('connect', () => {
      logger.info({
        message: `Redis client connected`,
      });
      resolve(redisClient);
    });

    redisClient.on('error', (error: unknown) => {
      reject(error);
    });
  });

export { init, redisClient };
