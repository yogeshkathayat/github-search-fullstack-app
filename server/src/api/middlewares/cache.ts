import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status';
import logger from '../../config/logger';
import { responseMessage, version } from '../../config/constants';
import ResponseHandler from '../../util/responseHandler';
import { CacheService } from '../services/cache.service';

const cacheService = new CacheService();
/**
 * @description method to search in the redis
 * @param {Request} req req object containing type & searchText
 * @param {Response} res response object
 * @param {NextFunction} next next function
 */
export async function cache(req: Request, res: Response, next: NextFunction) {
  try {
    const { type, search } = req.body;
    const key = type + '_' + search;
    let cachedData = await cacheService.getData(key);
    if (cachedData != null) {
      logger.info(`returning data from cache`);
      return ResponseHandler.setResponse(
        res,
        true,
        HttpStatus.OK,
        responseMessage['SUCCESS'],
        version.v1,
        cachedData,
      );
    } else {
      next();
    }
  } catch (error) {
    return ResponseHandler.setResponse(
      res,
      false,
      HttpStatus.INTERNAL_SERVER_ERROR,
      `${error}`,
      version.v1,
      {},
    );
  }
}
