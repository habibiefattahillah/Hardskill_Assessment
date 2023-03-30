const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

//Connect to MongoDB
require("./utils/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = require("./routes/routes");
app.use("/makanan", routes.routerMakanan);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
