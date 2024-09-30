import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    charset: "utf8"
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};