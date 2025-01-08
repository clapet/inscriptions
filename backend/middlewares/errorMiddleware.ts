import { NextFunction, Request, Response } from 'express';

export default async function errorMiddleware(
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (process.env.NODE_ENV === 'development') {
    console.log(res.locals.statusCode, error);
  }
  let statusCode = 500;
  if (res.locals.statusCode !== undefined && res.locals.statusCode !== 200) {
    statusCode = res.locals.statusCode;
  }
  const { message } = error;
  const response = {
    message,
  };
  return res.status(statusCode).json(response);
}
