import express from 'express';
import { CONNECT_DB } from './config/mongodb.js';
import { API_board } from './routes/index.js';
import { env } from './config/env.js';

const START_SERVER = () => {
    const app = express();

    app.use(express.json());

    app.listen(env.PORT, () => {
        console.log(`3. Back-end Server is running successfully at http://${env.HOST}:${env.PORT}`);
    });

    app.get('/', async (req, res) => {
        res.end('Hello World');
    });

    app.use('', API_board);
};

(async () => {
    try {
        console.log('1. Connecting MongoDb');
        await CONNECT_DB();
        console.log('2. Connected MongoDb');
        START_SERVER();
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
})();
