var formEl = document.querySelector(".formulario-cadastro");

// Verifica se o formulário foi encontrado antes de continuar
if (formEl) {
    // Chama a função captura_eventos
    captura_eventos(formEl, 'submit', formValid);
} else {
    console.error("Formulário com a classe 'formulario-cadastro' não encontrado.");
}

// Função para capturar eventos
function captura_eventos(objeto, evento, funcao) {
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } else if (objeto.attachEvent) {
        var eventoAttach = 'on' + evento;
        objeto.attachEvent(eventoAttach, funcao);
    }
}

// Função para cancelar eventos
function cancela_evento(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

// Função que verifica os campos radio e checkbox
function verificaCampos(campo, evento) {
    var checados = false;
    for (var i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            checados = true;
        }
    }

    if (!checados) {
        alert('Marque o campo ' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
    return true;
}

// Função de validação do formulário
function formValid(event) {
    var campoNome = formEl.nome_func.value.trim(),
        campoCPF = formEl.cpf_func.value.trim(),
        campoSenha = formEl.senha_func.value.trim(),
        campoEmail = formEl.email_func.value.trim(),
        campoTelefone = formEl.telefone_func.value.trim(),
        campoRua = formEl.rua_func.value.trim(),
        campoNumero = formEl.numero_func.value.trim(),
        campoBairro = formEl.bairro_func.value.trim(),
        campoCidade = formEl.cidade_func.value.trim(),
        campoUF = formEl.uf_func.value,
        campoFuncao = formEl.funcao_func.value,
        campoDataAdmissao = formEl.dataadmissao_func.value.trim(),
        campoSalario = parseFloat(formEl.salario_func.value);

    if (campoNome.length === 0) {
        alert("O campo Nome é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoCPF.length !== 11 || isNaN(campoCPF)) {
        alert("O CPF deve conter 11 dígitos numéricos");
        cancela_evento(event);
        return false;
    }

    if (campoSenha.length === 0) {
        alert("O campo Senha é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoEmail.length === 0) {
        alert("O campo Email é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoTelefone.length === 0) {
        alert("O campo Telefone é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoRua.length === 0) {
        alert("O campo Rua é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoNumero.length === 0) {
        alert("O campo Número é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoBairro.length === 0) {
        alert("O campo Bairro é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoCidade.length === 0) {
        alert("O campo Cidade é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoUF === "") {
        alert("Selecione o estado (UF)");
        cancela_evento(event);
        return false;
    }

    if (campoFuncao === "") {
        alert("Selecione a função");
        cancela_evento(event);
        return false;
    }

    if (campoDataAdmissao.length === 0) {
        alert("O campo Data de Admissão é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (isNaN(campoSalario) || campoSalario <= 0) {
        alert("O campo Salário deve ser um número maior que zero");
        cancela_evento(event);
        return false;
    }

    // Se tudo estiver válido
    alert("Formulário enviado com sucesso!");
    return true;
}