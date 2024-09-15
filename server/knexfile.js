export default {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "mood_compass",
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