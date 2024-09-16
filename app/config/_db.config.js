module.exports = {
  HOST: process.env.POSTGRES_URL,
  DB: process.env.POSTGRES_DATABASE,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  USER: process.env.POSTGRES_USER,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
