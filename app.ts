import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/database';
import taskRoutes from './routes/taskRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api', taskRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
