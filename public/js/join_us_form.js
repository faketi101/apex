const form = document.getElementById("join_form");
form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  console.log("submited");
  console.log(e.target.game.value);
}
