let mainDropBtn = document.querySelector("nav > div:first-child > div");
let mainDrop = document.querySelector(".main_drop");

mainDropBtn.onclick = function () {
  mainDrop.classList.toggle("show_main_drop");
};

$(document).ready(function () {
  $(".main-slide").owlCarousel({
    items: 1,
    loop: true,
    autoWidth: true,
  });
  $(".slide-2").owlCarousel({
    dots: false,
    nav: true,
    autoWidth: true,
    items: 1
  });
});


