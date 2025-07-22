var formEl = document.querySelector(".formulario-cadastro");

//CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl, 'submit', formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao) {
    //Teste addEventListener
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    }
    //Teste attachEvent
    else if (objeto.attachEvent) {
        var eventoAttach = 'on' + evento;
        objeto.attachEvent(eventoAttach, funcao);
    }
}

//FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

//FUNÇÃO QUE VERIFICA OS CAMPOS RADIO E CHECKBOX
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

function formValid(event) {
    var campoNome = formEl.nome_func.value,
        campoCPF = formEl.cpf_func.value,
        campoSenha = formEl.senha_func.value,
        campoEmail = formEl.email_func.value,
        campoTelefone = formEl.telefone_func.value,
        campoRua = formEl.rua_func.value,
        campoNumero = formEl.numero_func.value,
        campoBairro = formEl.bairro_func.value,
        campoCidade = formEl.cidade_func.value,
        campoUF = formEl.uf_func.value,
        campoFuncao = formEl.funcao_func.value,
        campoDataAdmissao = formEl.dataadmissao_func.value,
        campoSalario = formEl.salario_func.value;

    if (campoNome.length == 0) {
        alert("O campo Nome é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoCPF.length != 11) {
        alert("O CPF deve conter 11 dígitos");
        cancela_evento(event);
        return false;
    }

    if (campoSenha.length == 0) {
        alert("O campo Senha é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoEmail.length == 0) {
        alert("O campo Email é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoTelefone.length == 0) {
        alert("O campo Telefone é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoRua.length == 0) {
        alert("O campo Rua é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoNumero.length == 0) {
        alert("O campo Número é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoBairro.length == 0) {
        alert("O campo Bairro é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoCidade.length == 0) {
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

    if (campoDataAdmissao.length == 0) {
        alert("O campo Data de Admissão é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoSalario <= 0) {
        alert("O campo Salário deve ser maior que zero");
        cancela_evento(event);
        return false;
    }

    if (campoDataAdmissao.length == 0) {
        alert("O campo Data de Admissão é obrigatório");
        cancela_evento(event);
        return false;
    }

    if (campoSalario <= 0) {
        alert("O campo Salário deve ser maior que zero");
        cancela_evento(event);
        return false;
    }

}