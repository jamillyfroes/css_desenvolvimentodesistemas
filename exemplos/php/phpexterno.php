<?php
    if (
        isset($_POST['nome_func']) && isset($_POST['cpf_func']) && isset($_POST['senha_func']) &&
        isset($_POST['email_func']) && isset($_POST['telefone_func']) && isset($_POST['rua_func']) &&
        isset($_POST['numero_func']) && isset($_POST['bairro_func']) && isset($_POST['cidade_func']) &&
        isset($_POST['uf_func']) && isset($_POST['funcao_func']) &&
        isset($_POST['dataadmissao_func']) && isset($_POST['salario_func'])
    ) {
        // Exibindo os dados recebidos
        echo "Dados do funcionário recebidos:<br>";
        echo "Nome: " . htmlspecialchars($_POST['nome_func']) . "<br>";
        echo "CPF: " . htmlspecialchars($_POST['cpf_func']) . "<br>";
        echo "Senha: " . htmlspecialchars($_POST['senha_func']) . "<br>";
        echo "Email: " . htmlspecialchars($_POST['email_func']) . "<br>";
        echo "Telefone: " . htmlspecialchars($_POST['telefone_func']) . "<br>";
        echo "Rua: " . htmlspecialchars($_POST['rua_func']) . "<br>";
        echo "Número: " . htmlspecialchars($_POST['numero_func']) . "<br>";
        echo "Bairro: " . htmlspecialchars($_POST['bairro_func']) . "<br>";
        echo "Cidade: " . htmlspecialchars($_POST['cidade_func']) . "<br>";
        echo "UF: " . htmlspecialchars($_POST['uf_func']) . "<br>";
        echo "Função: " . htmlspecialchars($_POST['funcao_func']) . "<br>";
        echo "Data de Admissão: " . htmlspecialchars($_POST['dataadmissao_func']) . "<br>";
        echo "Salário: " . htmlspecialchars($_POST['salario_func']) . "<br>";
    } else {
        echo "Erro: Dados incompletos.";
    }
?>