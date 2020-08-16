import dotenv from 'dotenv';

/**
 *   Load environment variables from .env file, where API keys and passwords are configured
 */
dotenv.config({ path: '.env' });

/**
 * Environment variables
 */
export const ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const REDIS_URL = process.env.REDIS_URL;
export const REDIS_DATA_EXPIRATION_TIME =
  parseInt(process.env.REDIS_DATA_EXPIRATION_TIME) || 72000;
export const GITHUB_AUTH_STRING = process.env.GITHUB_AUTH_STRING;
export const API_BASE_PATH = '/api';
export const LOGS =
  process.env.NODE_ENV === 'production ' ? 'combined ' : 'dev';
