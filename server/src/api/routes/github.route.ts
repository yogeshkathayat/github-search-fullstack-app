import express from 'express';
import { GitHubController } from '../controllers/github.controller';
import validateSearch from '../validations/github.validation';
import {cache} from '../middlewares/cache'


const router = express.Router();
const filmController = new GitHubController();

/**
 * POST /search
 */
router.post('/search', [validateSearch,cache],filmController.search);
/**
 * GET /clear-cache
 */
router.get('/clear-cache',filmController.clearCache);

export default router;
