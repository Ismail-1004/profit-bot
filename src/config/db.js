import { Sequelize } from "sequelize";

export default new Sequelize(
  process.env.DB_URL
  // process.env.DB_NAME, // Название БД
  // process.env.DB_USER, // Имя пользователя
  // process.env.DB_PASSWORD, // Пароль
  // {
  //   dialect: "postgres",
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  // }
);
