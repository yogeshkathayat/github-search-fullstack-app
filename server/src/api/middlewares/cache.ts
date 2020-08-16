import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status';
import logger from '../../config/logger';
import { responseMessage } from '../../config/constants';
import ResponseHandler from '../../util/responseHandler';
import { CacheService } from '../services/cache.service';
const fileName = '[cache.js]';

const cacheService = new CacheService();
/**
 * @description method to search in the redis
 * @param {Request} req req object containing type & searchText
 * @param {Response} res response object
 * @param {NextFunction} next next function
 */
export async function cache(req: Request, res: Response, next: NextFunction) {
  const methodName = '[cache]';
  try {
    const { type, search } = req.body;
    const key = type + '_' + search;
    let cachedData = await cacheService.getData(key);
    if (cachedData != null) {
      logger.info(`returning data from cache`);
      return ResponseHandler.setResponse(res, HttpStatus.OK, {
        data: cachedData,
      });
    } else {
      next();
    }
  } catch (error) {
    logger.error(`${fileName} : ${methodName} : ${error}`);
    return ResponseHandler.setResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, {
      error: responseMessage.INTERNAL_SERVER_ERROR,
    });
  }
}
