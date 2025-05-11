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
