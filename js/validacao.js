// Máscaras
document.getElementById('cpf').addEventListener('input', function () {
    let cpf = this.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    this.value = cpf;
});

document.getElementById('telefone').addEventListener('input', function () {
    let tel = this.value.replace(/\D/g, '');
    tel = tel.replace(/^(\d{2})(\d)/g, '($1) $2');
    tel = tel.replace(/(\d{5})(\d{4})$/, '$1-$2');
    this.value = tel;
});

document.getElementById('cep').addEventListener('input', function () {
    let cep = this.value.replace(/\D/g, '');
    cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    this.value = cep;
});

// Validação do formulário
document.getElementById('meuForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita envio se houver erros

    let cpf = document.getElementById('cpf').value;
    let tel = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;

    let erro = false;

    // Limpar mensagens anteriores
    document.getElementById('erroCpf').textContent = '';
    document.getElementById('erroTel').textContent = '';
    document.getElementById('erroCep').textContent = '';

    // CPF válido? 000.000.000-00 (14 caracteres)
    if (cpf.length !== 14) {
        document.getElementById('erroCpf').textContent = 'CPF inválido';
        erro = true;
    }

    // Telefone válido? (00) 00000-0000 (15 caracteres)
    if (tel.length !== 15) {
        document.getElementById('erroTel').textContent = 'Telefone inválido';
        erro = true;
    }

    // CEP válido? 00000-000 (9 caracteres)
    if (cep.length !== 9) {
        document.getElementById('erroCep').textContent = 'CEP inválido';
        erro = true;
    }

    if (!erro) {
        alert('Formulário enviado com sucesso!');
        this.submit();
    }
});

