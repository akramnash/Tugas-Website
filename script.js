// toggle class active
const nabarNav = document.querySelector(".navbar-nsv");
document.querySelector("#menu").onclick = () => {
  navbarNav.classlist.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classlist.remove("active");
  }
});
