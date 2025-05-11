const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});








const header = document.querySelector("header");

window.addEventListener ("scroll", function () {
    header.classList.toggle ("sticky", window.scrollY > 0);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance:'30px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})
sr.reveal('.featured,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'})












document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Atur agar slide pertama muncul
    showSlide(currentIndex);

    // Atur interval per 5 detik
    setInterval(nextSlide, 10000);
});


$(document).ready(function () {
    $(".men_women_kid_container > div").click(function () {
        let category = $(this).attr("data-category");
        alert("You selected: " + category);
        // Bisa juga diarahkan ke halaman lain
        // window.location.href = "shop.html?category=" + category;
    });
});





document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("displayContents");
    let scrollAmount = 250;
    setInterval(() => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, 3000);
});
