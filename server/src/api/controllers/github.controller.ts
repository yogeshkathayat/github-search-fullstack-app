import { Request, Response } from 'express';
import ResponseHandler from '../../util/responseHandler';
import * as HttpStatus from 'http-status';
import logger from '../../config/logger';
import { responseMessage } from '../../config/constants';
import { GithubService } from '../services/github.service';
import { CacheService } from '../services/cache.service';

const fileName = '[github.controller.js]';

/**
 * GithubController class
 * contains methods related to
 * github
 * @class
 */
export class GitHubController {
  private _githubService: GithubService;
  private _cacheService: CacheService;

  constructor() {
    this._githubService = new GithubService();
    this._cacheService = new CacheService();
  }

  /**
   * @description method to search for a search term in github
   * @param {Request} req req object containing type & searchText
   * @param {Response} res response object
   */
  public search = async (req: Request, res: Response): Promise<void> => {
    const methodName = '[search]';
    try {
      const { type, search } = req.body;

      const searchResult = await this._githubService.search(type, search);

      return ResponseHandler.setResponse(res, HttpStatus.OK, {
        data: searchResult,
      });
    } catch (error) {
      logger.error(`${fileName} : ${methodName} : ${error}`);
      return ResponseHandler.setResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        { error: responseMessage.INTERNAL_SERVER_ERROR },
      );
    }
  };

  /**
   * @description method to clear all data from cache
   */
  public clearCache = async (req: Request, res: Response): Promise<void> => {
    const methodName = '[clearCache]';
    try {
      await this._cacheService.delData();
      return ResponseHandler.setResponse(res, HttpStatus.OK, {});
    } catch (error) {
      logger.error(`${fileName} : ${methodName} : ${error}`);
      return ResponseHandler.setResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        { error: responseMessage.INTERNAL_SERVER_ERROR },
      );
    }
  };
}
