const team_warzone = document.getElementById("warzone");
const team_valorant = document.getElementById("valorant");
const streamers = document.getElementById("streamers");
const codm = document.getElementById("codm");
const team_apex = document.getElementById("apex");
const team_pubg = document.getElementById("pubg");

team_warzone.addEventListener("click", () => {
  window.location.href = "/warzone_members";
});
team_valorant.addEventListener("click", () => {
  window.location.href = "/looking_for_team";
});
streamers.addEventListener("click", () => {
  window.location.href = "/streamers";
});
codm.addEventListener("click", () => {
  window.location.href = "/looking_for_team";
});
team_apex.addEventListener("click", () => {
  window.location.href = "/looking_for_team";
});
team_pubg.addEventListener("click", () => {
  window.location.href = "/looking_for_team";
});
