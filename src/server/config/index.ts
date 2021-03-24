import * as dotenv from "dotenv";

const envFound = dotenv.config();

if(!envFound) {
    throw new Error("Can't read .env file!");
}

export default {
    mysql: {
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        insecureAuth: true,
    },
    port: 3000
};