import { Request, Response } from 'express';
/**
 * initiate a Class
 */
class ResponseHandler {
  public res: Response;
  private status: number;
  private result: any;

  /**
   *
   * @param {*} res
   * @param {*} status
   * @param {*} result
   */
  public setResponse(res: Response, status: number, result: any) {
    this.res = res;
    this.status = status;
    this.result = result;
    this.res.status(this.status).send(this.result);
  }
}

export default new ResponseHandler();
