import app from './config/app';
import { init as initCache } from './config/cache';
import logger from './config/logger';

process.on('uncaughtException', (e) => {
  logger.error({
    message: `uncaughtException`,
    extra: e,
  });
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  logger.error({
    message: `unhandledRejection`,
    extra: e,
  });
  process.exit(1);
});

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), async () => {
  logger.info(
    `App is running at http://localhost:%d in %s mode`,
    app.get('port'),
    app.get('env'),
  );
  logger.info(`Press CTRL-C to stop\n`);
  await initCache();
});

export default server;
