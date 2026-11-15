const formulario = document.getElementById("form-login");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    campoEmail.classList.remove("invalido");
    campoSenha.classList.remove("invalido");

    const email = campoEmail.value.trim();
    const senha = campoSenha.value;

    let valido = true;

    if (email === "") {
        erroEmail.textContent = "O campo email tem que ser preenchido.";
        campoEmail.classList.add("invalido");
        valido = false;
    }

    if (senha === "") {
        erroSenha.textContent = "O campo senha tem que ser preenchido.";
        campoSenha.classList.add("invalido");
        valido = false;
    }

    else if (senha.length < 6) {
        erroSenha.textContent = "A senha deve ter no minimo 6 caracteres.";
        campoSenha.classList.add("invalido");
        valido = false;
    }
    if (valido) {
        window.location.href = "principal.html";
    }
});