module.exports = {
  development: {
    username: 'eha0129',
    password: process.env.DATABASE_PASSWORD,
    database: 'practice-2',
    host: 'practice-2.cps1qvs1qwj4.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'eha0129',
    password: process.env.DATABASE_PASSWORD,
    database: 'practice-2',
    host: 'practice-2.cps1qvs1qwj4.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false,
  },
};
