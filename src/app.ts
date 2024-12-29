import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
  }),
);

// Define routes
app.use('/api/v1', (req: Request, res: Response) => {
  res.send('API v1 Route');
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
