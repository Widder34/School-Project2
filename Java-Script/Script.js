let slideIndex = 1;
showSlides(slideIndex);

// Nächste/Vorherige Steuerung
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Direktauswahl über Punkte
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Alle Slides ausblenden
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Alle Punkte deaktivieren
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Aktuellen Slide und Punkt anzeigen
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatische Slideshow (alle 5 Sekunden)
setInterval(() => {
    plusSlides(1);
}, 5000);
