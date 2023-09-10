require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/db');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const brandRouter = require('./routes/brand');
const carRouter = require('./routes/car');
const blogRouter = require('./routes/blog');
const commentRouter = require('./routes/comment');
const rentRouter = require('./routes/rent');

const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.json());
app.use(cors())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/brands', brandRouter);
app.use('/api/v1/cars', carRouter);
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/rent', rentRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();