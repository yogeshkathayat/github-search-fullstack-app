import winston from 'winston';
import path from 'path';
import { ENV } from './vars';
const DailyRotateFile = require('winston-daily-rotate-file');
const logDirectory = path.join(__dirname, '../logs/winston');
const transports = [];

const fileTransport = new DailyRotateFile({
  filename: `${logDirectory}/` + 'github-search-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  handleExceptions: true,
  colorized: true,
  prettyPrint(object: any) {
    return JSON.stringify(object);
  },
});

transports.push(fileTransport);

if (ENV !== 'production') {
  const consoleLog = new winston.transports.Console({
    level: 'debug',
    handleExceptions: false,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.colorize(),
      winston.format.printf(
        (info: winston.Logform.TransformableInfo) => `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`,
      ),
    ),
  });
  transports.push(consoleLog);
}

const logger = winston.createLogger({
  transports,
  exitOnError: false,
});

export default logger;
