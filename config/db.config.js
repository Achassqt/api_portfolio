module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB,
  POOL_CONFIG: {
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
};
