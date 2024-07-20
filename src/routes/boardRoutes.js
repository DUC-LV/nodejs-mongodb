import express from 'express';
import { boardValidation } from '../validations/boardValidation.js';
import { boardController } from '~/controllers/boardController.js';

const Router = express.Router();

Router.route('/')
    .get((req, res) => {
        res.status(200).json({});
    })
    .post(boardValidation.createNew, boardController.createNew);

export const boardAPI = Router;