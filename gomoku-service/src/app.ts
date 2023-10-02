import { createServer } from 'http'
import express, { Express } from 'express'
import cors from 'cors'

import authHandler from './handler/Auth.Handler';
import gameHandler from './handler/Game.Handler';

//  Connect to database.
const app: Express = express();

app.use(
  cors({
    origin: process.env.allowHost || true,
  })
)


app.use(express.json());
app.use('/api/auth', authHandler);
app.use('/api/games', gameHandler);


export const server = createServer(app)

export default app