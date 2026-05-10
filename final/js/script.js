const searchInput = document.getElementById("productSearch");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const searchText = searchInput.value.toLowerCase();

        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();

            if (productText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields before submitting.";
        } else {
            formMessage.textContent = "Thank you! Your message has been received.";
            contactForm.reset();
        }
    });
}