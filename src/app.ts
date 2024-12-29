import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

// Define routes
app.use('/api/v1', (req: Request, res: Response) => {
  res.send('API v1 Route');
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!');
});

export default app;
