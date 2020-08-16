import * as Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import logger from '../../config/logger';
import ResponseHandler from '../../util/responseHandler';
import * as HttpStatus from 'http-status';
import { responseMessage, version, searchType } from '../../config/constants';

export const SearchValidationSchema = Joi.object().keys({
  type: Joi.string().valid(searchType.REPOSITORY, searchType.USER),
  search: Joi.string().required(),
});

const fileName = '[github.validation.js]';

const validateSearch = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const methodName = '[validateSearch]';
  const { error } = SearchValidationSchema.validate(req.body);
  console.log(error);

  if (!error) return next();

  logger.error(`${fileName} ${methodName} Validation Error : ${error}`);

  return ResponseHandler.setResponse(
    res,
    false,
    HttpStatus.BAD_REQUEST,
    responseMessage.FAILED,
    version.v1,
    {
      error:'Bad Request',
    },
  );
};

export default validateSearch;
