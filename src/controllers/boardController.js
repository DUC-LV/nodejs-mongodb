const createNew = async (req, res, next) => {
    try {
        res.json({
            message: ''
        });
    } catch (error) {
        console.log(error);
    }
};

export const boardController = {
    createNew
};