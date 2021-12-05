const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/join_us", (req, res) => {
  res.render("joinus");
});
router.get("/teams", (req, res) => {
  res.render("teams");
});
router.get("/watch", (req, res) => {
  res.render("watch");
});
router.get("/about_us", (req, res) => {
  res.render("aboutus");
});


router.get("/valorant_members", (req, res) => {
  res.render("team_mem");
});
module.exports = router;

