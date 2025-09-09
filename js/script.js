// Init Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
});

var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
  loop: false,
  dynamicBullets: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var platformsSwiper = new Swiper(".platformsSwiper", {
  loop: false,
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 6,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var iso = new Isotope(".works-grid", {
      itemSelector: ".work-item",
      layoutMode: "fitRows",
      percentPosition: true,
    });

    setTimeout(function () {
      iso.layout();
    }, 500);

    var filters = document.querySelectorAll(".filter-btn");
    filters.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var filterValue = btn.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });

        // toggle active class
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }, 300);
});
