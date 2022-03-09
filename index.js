import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './route/routes.js';
import bodyParser from 'body-parser';

const app = express();
// const route = express.Router();

// route.get('/', (req, res) => {
//   res.status(200).json('hi this is bharat');
// });
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/books', route);

const PORT = 8080;
const URL = 'mongodb://127.0.0.1:27017/test1';

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);
  });
