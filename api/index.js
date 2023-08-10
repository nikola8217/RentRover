require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./config/db');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

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