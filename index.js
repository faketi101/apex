require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const port = process.env.PORT;

const app = express();
const staticPath = path.join(__dirname, "./public");
const paritalsPath = path.join(__dirname, "./viws/partials");

// imports
const routeHandler = require("./src/routes/routeHandler");

// uses
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
hbs.registerPartials(paritalsPath);
app.use(express.static(staticPath));
app.set("view engine", "hbs");

app.use("/", routeHandler);

app.get("*", (req, res) => {
  res.status(400).send("404 page not found");
});

app.listen(port, () => {
  console.log(`Server Started at PORT ${port}`);
});
