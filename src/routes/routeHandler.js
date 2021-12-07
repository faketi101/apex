const express = require("express");
const router = express.Router();

const join_us_controller = require("../controllers/join_us_controller");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/join_us", (req, res) => {
  res.render("joinus");
});
router.post("/join_us", join_us_controller);
router.get("/teams", (req, res) => {
  res.render("teams");
});
router.get("/watch", (req, res) => {
  res.render("watch");
});
router.get("/about_us", (req, res) => {
  res.render("aboutus");
});
router.get("/looking_for_team", (req, res) => {
  res.render("t_join_team");
});
router.get("/all_matches", (req, res) => {
  res.render("all_matches");
});
router.get("/all_atchievements", (req, res) => {
  res.render("all_atchievements");
});

router.get("/warzone_members", (req, res) => {
  res.render("t_warzone");
});
router.get("/valorant_members", (req, res) => {
  res.render("team_mem");
});

module.exports = router;

