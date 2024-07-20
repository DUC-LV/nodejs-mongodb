import 'dotenv/config';

export const env = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_NAME: process.env.DATABASE_NAME
};