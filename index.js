const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
global.__basedir = __dirname;
dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const corsOpts = {
  origin: "*",
  methods: ["GET", "PATCH", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// database
// const db = require("./model");
// const Role = db.role;

// db.sequelize
//   .sync({ alter: false })
//   .then(() => {
//     console.log("Synced db success...");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db...", err.message);
//   });

// simple routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to EM ERP Application." });
});
///////////////////////Images routes will be listed here////////////////
// app.use("/upload_files", express.static(path.join(__dirname, "/upload_files")));
// /** Module wise Routing configuration is here*********** */
// require("./app/orders/_routes/_order_routes")(app);
// require("./app/product/_router/_product_routes")(app);
// set port, listen for requests
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    ` \u001b[1;32m Server is running on port no http://localhost:${process.env.SERVER_PORT}. \u001b[0m`
  );
});
