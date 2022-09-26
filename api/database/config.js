require('dotenv').config();
const env = process.env;

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "./database/data.sqlite3",
    "host": env.HOST,
    "port": env.PORT,
  }
};