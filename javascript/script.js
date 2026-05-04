document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("beetleForm");
    const nameInput = document.getElementById("userName");
    const traitChoice = document.getElementById("traitChoice");
    const messageArea = document.getElementById("messageArea");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = nameInput.value.trim();
        const trait = traitChoice.value;

        if (userName === "") {
            messageArea.innerHTML = "<p>Please enter your name before creating a message.</p>";
            return;
        }

        let traitMessage = "";

        if (trait === "speed") {
            traitMessage = "Tiger beetles are known for their incredible speed.";
        } else if (trait === "vision") {
            traitMessage = "Tiger beetles use their large eyes to spot movement quickly.";
        } else {
            traitMessage = "Tiger beetles can have metallic colors or sandy camouflage.";
        }

        messageArea.innerHTML = "<p>Hello, " + userName + "! " + traitMessage + "</p>";
    });
});