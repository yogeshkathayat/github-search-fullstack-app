import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import lusca from 'lusca';
import routes from '../api/routes/index';
import { LOGS, PORT, API_BASE_PATH } from './vars';
import { HandleError } from '../api/middlewares/error';
const handleError = new HandleError();

/**
 * Express instance
 * @public
 */
const app = express();
app.set('port', PORT || 3000);

// request logging. dev: console | production: file
app.use(morgan(LOGS));
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// parse body params and attache them to req.body
app.use(
  bodyParser.json({
    limit: '100mb',
  }),
);

app.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 100000,
  }),
);
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.disable('x-powered-by');

// mount api routes
app.use(API_BASE_PATH, routes);

// catch 404 and forward to error handler
app.use(handleError.notFound);

export default app;
