import express, { Request, Response, Application } from 'express';

import cors from 'cors';

const app: Application = express();

// parser

app.use(express.json());

app.use(cors({ origin: ['/localhost:5173'] }));

app.use('/api/v1/');
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

export default app;
