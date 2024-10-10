import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    // host: process.env.MYSQLHOST,
    // user: process.env.MYSQLUSER,
    // password: process.env.MYSQLPASSWORD,
    // database: process.env.MYSQLDATABASE,
    // charset: "utf8"
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8mb4"
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};