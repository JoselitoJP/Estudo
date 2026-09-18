
const formulario = document.getElementById('meuFormulario');
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(evento){
    // Impede o recarregamento padrão da página
    evento.preventDefault();

    // Pega os valores digitados
    const nome = document.getElementById('nome').value;

    // Exibe a mensagem de sucesso personalizado
    mensagemSucesso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    mensagemSucesso.classList.remove('hidden');

    // Limpa o formulário
    formulario.reset();

});