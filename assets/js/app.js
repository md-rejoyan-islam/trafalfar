const menu_open = document.getElementById("menu_open");
const menu_close = document.getElementById("menu_close");
const mobile_mode = document.getElementById("mobile_mode");

menu_open.addEventListener("click", () => {
  mobile_mode.classList.toggle("change_mode");
  document.body.style.overflow = "hidden";
});

menu_close.addEventListener("click", () => {
  mobile_mode.classList.toggle("change_mode");
  document.body.style.overflow = "auto";
});

window.onresize = () => {
  if (window.screen.availWidth > 732) {
    document.body.style.overflow = "auto";
  } else if (!mobile_mode.classList.contains("change_mode")) {
    document.body.style.overflow = "hidden";
  }
};
