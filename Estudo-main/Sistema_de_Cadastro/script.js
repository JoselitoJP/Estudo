    
    // Captura o formulário
    document.getElementById('formCadastro').addEventListener('submit', function(e) {
    // Impede o formulário de recarregar a página    
    e.preventDefault();

    // Pega os valores digitados    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;


    // Cria um objeto representando o aluno
    const aluno = { nome, email, idade };

    // Recupera os alunos salvos
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    // Adiciona o novo aluno
    alunos.push(aluno);

    // Salva novamente no navegador
    localStorage.setItem('alunos', JSON.stringify(alunos));
    
    // Limpa o formulário
    document.getElementById('formCadastro').reset();
    
    // Atualiza a lista
    carregarAlunos();

    });

    // Função responsável por carregar os alunos
    function carregarAlunos(){
        
        const lista = document.getElementById('listaAlunos');
        
        // Limpa a lista antes de carregar
        lista.innerHTML = '';

        // Recupera os alunos do localStorage
        let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

        // Percorre cada aluno
        alunos.forEach((aluno) => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} - ${aluno.email} - ${aluno.idade} anos`;
            lista.appendChild(li);
    });

    }

    // Carrega os alunos ao iniciar a página
    carregarAlunos();