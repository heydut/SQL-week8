require("dotenv").config();
// alternative
// import * as dotenv from "dotenv";
// dotenv.config();
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI);
