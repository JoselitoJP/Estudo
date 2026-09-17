// Pegando o formulário
const formulario = document.querySelector("form");

// Evento executado quando o usuário clicar em "Entrar"
formulario.addEventListener("submit", function(event){

    // Pagando os campos
    const email = document.getElementById("email").ariaValueMax.trim();
    const senha = document.getElementById("senha").ariaValueMax.trim();

    // Verificando se o e-mail está vazio
    if(email === ""){
        alert("Digite seu e-mail! ");
        event.preventDefault();
        return;
    }

    // Verificando se a senha está vazia
    if (senha === ""){
        alert("Digite sua senha! ");
        event.preventDefault();
        return
    }

    //Verificar o tamanho da senha
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres! ");
        event.preventDefault();
        return;
    }

    // Se tudo estiver correto
    alert("Dados preenchidos corretamente! ");
});
