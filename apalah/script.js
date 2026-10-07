// Tahun otomatis pada footer

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Animasi card ketika halaman dibuka

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "0.6s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 300 + (index * 150));

});





