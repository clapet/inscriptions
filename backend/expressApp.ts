import express, { Express } from 'express';
import cors from 'cors';
import pino from 'pino';
import loggerMiddleware from 'pino-http';
import endpoints from './endpoints';

// import errorMiddleware from './middleware/errorMiddleware';

const isDev = process.env.NODE_ENV === 'development';

let options: any;
if (isDev) {
  options = {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  };
}

export default function index() {
  const app: Express = express();
  app.disable('x-powered-by');

  const allowedOrigins = [];
  if (isDev) {
    allowedOrigins.push('http://localhost:3000');
  }

  app.use(
    cors({
      origin: allowedOrigins,
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
      ],
    })
  );
  app.use(
    loggerMiddleware({
      logger: pino(options),
    })
  );

  app.use(express.json());
  app.use('/api/inscriptions/v1', endpoints());
  // app.use(errorMiddleware);
  return app;
}
