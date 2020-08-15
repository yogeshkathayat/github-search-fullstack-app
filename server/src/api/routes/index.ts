import express from 'express';
import { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import githubRoute from './github.route';
import swaggerDocument from '../../config/swagger.json';

const router = express.Router();

/**
 * GET /status
 */

router.get('/status', (req: Request, res: Response) =>
  res.status(200).send('OK'),
);
/**
 * GET /docs
 */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/', githubRoute);

export default router;
