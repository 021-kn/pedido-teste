document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const music = document.getElementById("music");

    function displayMessage(text, delay) {
        setTimeout(() => {
            message.textContent = text;
        }, delay);
    }

    function showButtons() {
        yesButton.classList.remove("hidden");
        noButton.classList.remove("hidden");
    }

    function hideButtons() {
        yesButton.classList.add("hidden");
        noButton.classList.add("hidden");
    }

    function moveNoButton() {
        const randomX = Math.random() * 80 + 10; // posição horizontal aleatória (10% a 90%)
        const randomY = Math.random() * 80 + 10; // posição vertical aleatória (10% a 90%)
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'vw';
        noButton.style.top = randomY + 'vh';
    }

    displayMessage("Olá, querida! ❤️", 0);
    displayMessage("Hoje eu tenho algo especial para você...", 2000);
    displayMessage("...", 5000);
    displayMessage("Você pode ouvir uma música?", 7000);

    setTimeout(showButtons, 9000);

    yesButton.addEventListener("click", () => {
        if (message.textContent.includes("Você pode ouvir uma música?")) {
            message.textContent = "Ótimo! Aqui está uma música especial para você:";
            hideButtons();
            music.play();

            // Adicionar novas mensagens durante a reprodução da música
            displayMessage("Essa música me faz pensar em nós dois...", 15000);
            displayMessage("Cada momento que passamos juntos é especial para mim.", 30000);
            displayMessage("Quero estar ao seu lado em todos os momentos.", 45000);
            displayMessage("Espero que esta música toque seu coração assim como toca o meu.", 60000);
            displayMessage("E então, o que achou da música?", 75000);
            displayMessage("...", 77000);
            displayMessage("Antes que você responda, quero te dizer algo:", 79000);
            displayMessage("...", 82000);
            displayMessage("Eu sei que palavras podem ser insuficientes para expressar tudo o que sinto,", 84000);
            displayMessage("mas espero que esta música tenha capturado um pouco do que está em meu coração.", 88000);
            displayMessage("...", 93000);

            setTimeout(() => {
                music.pause();
                music.currentTime = 0;
                message.textContent = "Então, [nome da pessoa], você aceita namorar comigo?";
                message.classList.add("bounce");
                showButtons();
                noButton.classList.add("hidden");
            }, 96000);  // Ajuste o tempo conforme necessário para a duração da música
        } else if (message.textContent.includes("Então, [nome da pessoa], você aceita namorar comigo?")) {
            message.textContent = "Você é incrívelmente especial na minha vida ❤";
            yesButton.classList.add("hidden");
            noButton.classList.add("hidden");
        }
    });

    noButton.addEventListener("click", moveNoButton);
});