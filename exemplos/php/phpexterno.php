<?php
    if(isset($_post['nome_func'])&& isset($_post['cpf_func'])&& isset($_post['senha_func'])&& isset($_post['email_func'])&& isset($_post['telefone_func'])&& isset($_post['rua_func'])&& isset($_post['numero_func'])&& isset($_post['bairro_func'])&& isset($_post['cidade_func'])&& isset($_post['uf_func'])&& isset($_post['funcao_func'])&& isset($_post['dataadmissao_func'])&& isset($_post['salario_func'])){
        echo "Dados do funcionário recebidos:<br>";
        echo "Nome: " . $_post['nome_func'] . "<br>";
        echo "CPF: " . $_post['cpf_func'] . "<br>";
        echo "Senha: " . $_post['senha_func'] . "<br>";
        echo "Email: " . $_post['email_func'] . "<br>";
        echo "Telefone: " . $_post['telefone_func'] . "<br>";
        echo "Rua: " . $_post['rua_func'] . "<br>";
        echo "Número: " . $_post['numero_func'] . "<br>";
        echo "Bairro: " . $_post['bairro_func'] . "<br>";
        echo "Cidade: " . $_post['cidade_func'] . "<br>";
        echo "UF: " . $_post['uf_func'] . "<br>";
        echo "Função: " . $_post['funcao_func'] . "<br>";
        echo "Data de Admissão: " . $_post['dataadmissao_func'] . "<br>";
        echo "Salário: " . $_post['salario_func'] . "<br>";
    }
?>