import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';
import * as HttpStatus from 'http-status';
import logger from '../../config/logger';
import { responseMessage, version } from '../../config/constants';
import { redisClient } from '../../config/cache';
import ResponseHandler from '../../util/responseHandler';
import { CacheService } from '../services/cache.service';

const cacheService = new CacheService();
async function cache(req: Request, res: Response, next: NextFunction) {
  try {
    const { type, search } = req.body;
    const key = type + '_' + search;
    let cachedData = await cacheService.getData(key);
    if (cachedData != null) {
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
