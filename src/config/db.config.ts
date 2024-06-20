import dotenv from 'dotenv';
import { Pool } from 'pg'

dotenv.config();

const pool = new Pool({
    // type:'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'S9740@cms#',
    database: process.env.DB_DATABASE || 'sunidb',

});

export default pool;