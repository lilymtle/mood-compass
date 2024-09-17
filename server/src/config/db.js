import knex from "knex";
import knexConfig from "../../knexfile.js";

export const db = knex(knexConfig);