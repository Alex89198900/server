import express from "express";
require("dotenv").config();
const PORT__DEV = 3333;
const sequelize = require("./db");
import cors from "cors";
const router = require("./routes/index");
//const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");
import fileUpload from "express-fileupload";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// app.get("/", async (req, res, next) => {
//   res.status(200).json({ mess: "work" });
// });

// Обработка ошибок, последний Middleware
//app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT__DEV, () =>
      console.log(`Server started on port ${PORT__DEV}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();

