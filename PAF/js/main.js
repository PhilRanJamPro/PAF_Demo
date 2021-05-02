const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 120) {
    navbar.classList.remove("top");
    

    if (!scrolled) {
      navbar.style.transform = "translateY(-20px)";
    navbar.style.backgroundColor = "rgba(126, 213, 111, 0.2)"
      logo.style.height = "7.5rem";
      navbar.style.marginTop = "-3rem";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      navbar.style.zIndex = 999999991;
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    logo.style.height = "12rem";
    navbar.style.backgroundColor = "rgba(126, 213, 111, 0)"
    navbar.style.marginTop = "0rem";
    scrolled = false;
  }
};
