document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuItems = document.getElementById("menu-items");
    const getDataBtn = document.getElementById("getDataBtn");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const codeSequence = document.getElementById("code-sequence");
    const userInput = document.getElementById("user-input");
    const submitCode = document.getElementById("submit-code");
    const resultMessage = document.getElementById("result-message");

    let generatedCode = "";

    // Toggle menu visibility
    menuButton.addEventListener("click", function () {
        menuItems.classList.toggle("show");
    });

    // Open modal when clicking "Get Data"
    getDataBtn.addEventListener("click", function () {
        startCodeBreaker();
        modal.style.display = "block";
    });

    // Close modal when clicking "X"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal if clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to start Code Breaker minigame
    function startCodeBreaker() {
        generatedCode = generateRandomCode(4); // Generate 4-character code
        codeSequence.innerText = generatedCode;

        // Hide the code after 3 seconds
        setTimeout(() => {
            codeSequence.innerText = "Enter the code!";
        }, 3000);

        // Reset input field and message
        userInput.value = "";
        resultMessage.innerText = "";
    }

    // Function to generate a random 4-character alphanumeric code
    function generateRandomCode(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    // Check user's input
    submitCode.addEventListener("click", function () {
        if (userInput.value.toUpperCase() === generatedCode) {
            resultMessage.innerText = "✅ Correct! You earned data.";
            resultMessage.style.color = "green";
            // Here you can add code to reward the player (e.g., increase data currency)
        } else {
            resultMessage.innerText = "❌ Wrong! Try again.";
            resultMessage.style.color = "red";
        }
    });
});