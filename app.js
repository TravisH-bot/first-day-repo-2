const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) =>
    item.classList.remove("active1"));
  this.classList.add("active1");
}
list.forEach((item) =>
  item.addEventListener("click", activeLink));