// Tambahkan bagian warna visual
const getColorCircle = (colorName) => {
    const colorMap = {
        "Black": "#000000",
        "White": "#FFFFFF",
        "Concord": "#5A4E8C",
        "Red": "#FF0000",
        "Blue": "#0000FF",
        "Green": "#00FF00",
        "Yellow": "#FFFF00",
        "Grey": "#888888",
        // Tambahkan sesuai kebutuhan
    };

    const parts = colorName.split('/').map(name => name.trim());
    return parts.map(name => `
        <span class="color-circle" style="background-color:${colorMap[name] || '#ccc'}" title="${name}"></span>
        <span class="color-label">${name}</span>
    `).join('');
};

descElement.innerHTML = `
    ${product.story_html || "<i>Deskripsi tidak tersedia.</i>"}
    <br><br>
    <strong>Warna:</strong> ${getColorCircle(product.color)}<br>
    <strong>Detail Warna:</strong> ${getColorCircle(product.details)}<br>
    ...
`;




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