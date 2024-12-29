
import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

export default app;


or

const getAcontroller = (req: Request, res: Response) =>{
    const a = 10
    res.send(a);
}

app.get('/', getAcontroller);

<!--                                             -->

import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application route

app.use('/api/v1/students',StudentRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

export default app;


