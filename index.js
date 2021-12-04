require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const port = process.env.PORT;

const app = express();
const staticPath = path.join(__dirname, "./public");
const templatesPath = path.join(__dirname, "./templates/views");
const paritalsPath = path.join(__dirname, "./templates/partials");

// imports
const routeHandler = require("./src/routes/routeHandler");

// uses
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatesPath)
app.use(express.static(staticPath));
hbs.registerPartials(paritalsPath);


app.use("/", routeHandler);
// app.get("/a", (req, res)=>{
//   res.render("home")
// })

app.get("*", (req, res) => {
  res.status(400).send("404 page not found");
});

app.listen(port, () => {
  console.log(`Server Started at PORT ${port}`);
});
