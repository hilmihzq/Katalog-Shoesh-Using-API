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


let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100 + "%";
    document.querySelector(".carousel-inner").style.transform = `translateX(${offset})`;
}

// Auto slide setiap 3 detik
setInterval(() => moveSlide(1), 3000);



document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            console.log(card.querySelector(".title").innerText + " Hovered!");
        });
    });
});
