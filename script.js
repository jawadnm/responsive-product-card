function functionblack() {
  document.getElementById("main_img").src = "black.png";
  document.body.style.backgroundColor = "black";
  document.getElementById("card");
  card.classList.remove("bg-red-500", "bg-orange-400");
  card.classList.add("bg-customCharcol");
}

function functionred() {
  document.getElementById("main_img").src = "red.png";
  document.body.style.backgroundColor = "red";
  document.getElementById("card");
  card.classList.remove("bg-customCharcol", "bg-orange-400");
  card.classList.add("bg-red-500");
}

function functionorange() {
  document.getElementById("main_img").src = "orange.png";
  document.body.style.backgroundColor = "orange";
  document.getElementById("card");
  card.classList.remove("bg-customCharcol", "bg-red-500");
  card.classList.add("bg-orange-400");
}
