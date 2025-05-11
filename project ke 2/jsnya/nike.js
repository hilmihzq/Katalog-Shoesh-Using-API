// Array gambar
const images = [
    "https://www.footlocker.id/media/catalog/product/0/1/01-NIKE-FFSSBNIK5-NIKHM0721001-Grey.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    "https://www.footlocker.id/media/catalog/product/0/3/03-NIKE-FFSSBNIK5-NIKHM0721001-Grey.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",

];

let index = 0; // Index gambar saat ini
const imgElement = document.getElementById("product-image");

// Fungsi ganti gambar otomatis
function autoSlide() {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
}

// Jalankan setiap 3 detik
setInterval(autoSlide, 3000);


const thumbnails = document.querySelectorAll(".design-thumbnail");

// Ambil gambar utama
const productImage = document.getElementById("product-image");

// Tambahkan event listener untuk setiap thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        // Ganti src gambar utama dengan src dari thumbnail yang diklik
        productImage.src = this.src;

        // Hapus kelas 'selected' dari semua thumbnail
        thumbnails.forEach(img => img.classList.remove("selected"));

        // Tambahkan kelas 'selected' ke thumbnail yang dipilih
        this.classList.add("selected");
    });
});

// Tambahkan event listener untuk setiap pilihan warna
colorCircles.forEach(circle => {
    circle.addEventListener("click", function() {
        // Hapus kelas 'selected' dari semua warna
        colorCircles.forEach(c => c.classList.remove("selected"));

        // Tambahkan kelas 'selected' ke warna yang dipilih
        this.classList.add("selected");
    });
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