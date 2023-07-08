import { Sequelize } from "sequelize";
import path from "path";
//import dotenv from "dotenv";

//dotenv.config({ path: path.resolve(__dirname, "./env") });
// console.log(process.env.DB_NAME);
// module.exports = new Sequelize(
//   process.env.DB_NAME ? process.env.DB_NAME : "online_store", // Название БД
//   process.env.DB_USER || "", // Пользователь
//   process.env.DB_PASSWORD, // ПАРОЛЬ
//   {
//     dialect: "postgres",
//     host: process.env.DB_HOST,
//     //port: process.env.DB_PORT||5432,
//     port: 5432,
//   }
// );
// //require("dotenv").config();
module.exports = new Sequelize(
  "postgres://postgres1:X164gEYWB92WUFr5CPirMEADJIpizss1@dpg-cik39fmnqql0l1vfhppg-a.oregon-postgres.render.com/online_store_daf4?ssl=true"
);

