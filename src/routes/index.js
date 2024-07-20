import express from 'express';
import { boardAPI } from './boardRoutes.js';

const Router = express.Router();

Router.get('/status', (req, res) => {
    res.status(200).json({});
});

Router.use('/', boardAPI);

export const API_board = Router;