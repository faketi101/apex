require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const mongoose = require("mongoose");
const port = process.env.PORT;
const bodyParser = require("body-parser");

const app = express();
const staticPath = path.join(__dirname, "./public");
const templatesPath = path.join(__dirname, "./templates/views");
const paritalsPath = path.join(__dirname, "./templates/partials");

// imports
const routeHandler = require("./src/routes/routeHandler");
const delSentData = require("./src/controllers/del_sent_data");
// uses
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// parse application/x-www-form-urlencoded
// parse application/json
app.set("view engine", "hbs");
app.set("views", templatesPath);
app.use(express.static(staticPath));
hbs.registerPartials(paritalsPath);

app.use("/", routeHandler);
// app.get("/a", (req, res)=>{
//   res.render("home")
// })
setInterval(() => {
  delSentData();
}, 60000);
app.get("*", (req, res) => {
  res.status(400).send("404 page not found");
});
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log(`Server Started at PORT ${port}`);
});
