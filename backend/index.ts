/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import app from './expressApp';

const expressApp = app();
expressApp.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});
