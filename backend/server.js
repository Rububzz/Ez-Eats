import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/food.route.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/foods', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log('Server is listening to port ' + PORT);
});
