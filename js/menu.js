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

    menuButton.addEventListener("click", function () {
        menuItems.classList.toggle("show");
    });

    getDataBtn.addEventListener("click", function () {
        startCodeBreaker();
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function startCodeBreaker() {
        generatedCode = generateRandomCode(4); 
        codeSequence.innerText = generatedCode;

        setTimeout(() => {
            codeSequence.innerText = "Enter the code!";
        }, 3000);

        userInput.value = "";
        resultMessage.innerText = "";
    }

    
    function generateRandomCode(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    submitCode.addEventListener("click", function () {
        if (userInput.value.toUpperCase() === generatedCode) {
            resultMessage.innerText = "✅ Correct! You earned data.";
            resultMessage.style.color = "green";
            // reward player
        } else {
            resultMessage.innerText = "❌ Wrong! Try again.";
            resultMessage.style.color = "red";
        }
    });
});