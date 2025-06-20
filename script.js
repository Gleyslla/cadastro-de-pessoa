document.getElementById('btnCadastrar').addEventListener('click', cadastrarOuAtualizar);

let pessoas = [];
let editIndex = -1;

function formatarDataBrasileira(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

function cadastrarOuAtualizar() {
    const campos = ['nome', 'dataNascimento', 'cpf', 'email', 'telefone', 'genero', 'estadoCivil', 'logradouro', 'numero', 'bairro', 'cidade', 'estado', 'cep'];
    const pessoa = {};

    for (const campo of campos) {
        const input = document.getElementById(campo);
        if (!input.value) {
            return Swal.fire('Campo obrigatório', `O campo ${campo} é obrigatório.`, 'warning');
        }
        pessoa[campo] = input.value;
    }

    if (editIndex >= 0) {
        pessoas[editIndex] = pessoa;
        editIndex = -1;
        Swal.fire('Sucesso!', 'Cadastro atualizado com sucesso!', 'success');
    } else {
        pessoas.push(pessoa);
        Swal.fire('Sucesso!', 'Cadastro realizado com sucesso!', 'success');
    }

    resetarFormulario();
    renderizarPessoas();
}

function renderizarPessoas() {
    const lista = document.getElementById('listaCadastrados');
    lista.innerHTML = '<h3>Pessoas Cadastradas:</h3>';

    if (pessoas.length === 0) {
        lista.innerHTML += '<div id="placeholder">Nenhum cadastro realizado.</div>';
        return;
    }

    pessoas.forEach((pessoa, index) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
      <p><strong>Nome:</strong> ${pessoa.nome}</p>
      <p><strong>Data nascimento:</strong> ${formatarDataBrasileira(pessoa.dataNascimento)}</p>
      <p><strong>CPF:</strong> ${pessoa.cpf}</p>
      <p><strong>E-mail:</strong> ${pessoa.email}</p>
      <p><strong>Telefone:</strong> ${pessoa.telefone}</p>
      <p><strong>Gênero:</strong> ${pessoa.genero}</p>
      <p><strong>Estado Civil:</strong> ${pessoa.estadoCivil}</p>
      <p><strong>Endereço:</strong> ${pessoa.logradouro}, ${pessoa.numero}, ${pessoa.bairro}, ${pessoa.cidade}, ${pessoa.estado}, CEP: ${pessoa.cep}</p>
      <button class='editar' onclick='editarPessoa(${index})'>Editar</button>
      <button class='excluir' onclick='excluirPessoa(${index})'>Excluir</button>
    `;
        lista.appendChild(div);
    });
}

function editarPessoa(index) {
    const pessoa = pessoas[index];
    for (const key in pessoa) {
        document.getElementById(key).value = pessoa[key];
    }
    editIndex = index;
}

function excluirPessoa(index) {
    pessoas.splice(index, 1);
    renderizarPessoas();
}

function resetarFormulario() {
    document.getElementById('formCadastro').reset();
    editIndex = -1;
}