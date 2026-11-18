require('dotenv').config();

module.exports = {
    port: Number(process.env.PORT) || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3307,
        name: process.env.DB_NAME || 'user_api',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        logging: process.env.DB_LOGGING === 'true' || false,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'djfijfjieo',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
};