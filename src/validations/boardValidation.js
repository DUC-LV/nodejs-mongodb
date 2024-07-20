import Joi from 'joi';

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(20).trim().strict(),
        description: Joi.string().required().min(3).max(256).trim().strict()
    });

    try {
        await correctCondition.validateAsync(req.body);
        next();
    } catch (error) {
        console.log(error);
    }
};

export const boardValidation = {
    createNew
};