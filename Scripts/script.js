function mostrarMensagem() {
    alert("Botão clicado!");
}

function fazerLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");

    if (user === "admin" && pass === "1234") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login com sucesso!";

        document.querySelector(".login-container").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Credenciais erradas.";
    }
}