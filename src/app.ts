import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200', // Replace with your client application's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

