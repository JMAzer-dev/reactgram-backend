require("dotenv").config();

//packages 
const express = require("express");
const path = require("path");
const cors = require("cors");
//dotenv
const port = process.env.PORT;
const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//solve CORS
app.use(cors());

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//DB connection
require("./config/db.js");

//routes
const router = require("./routes/Router.js");
app.use(router);
app.listen(port || 5000, () => {
  console.log(`app rodando na porta ${port}`);
});
