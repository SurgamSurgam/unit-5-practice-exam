const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/movies_final");

module.exports = db;
