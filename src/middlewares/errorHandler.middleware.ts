// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/http.exception';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
  throw new Error('TODO(reto): errorHandler');
};

export const errorHandlerMiddleware = errorHandler;