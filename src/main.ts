import { app } from './app';
import { startServer } from './server';

const PORT = process.env.PORT || 3000;

startServer(app, PORT);