<?php
session_start();

if (
    isset($_POST['nome_func']) && isset($_POST['cpf_func']) && isset($_POST['senha_func']) &&
    isset($_POST['email_func']) && isset($_POST['telefone_func']) && isset($_POST['rua_func']) &&
    isset($_POST['numero_func']) && isset($_POST['bairro_func']) && isset($_POST['cidade_func']) &&
    isset($_POST['uf_func']) && isset($_POST['funcao_func']) &&
    isset($_POST['dataadmissao_func']) && isset($_POST['salario_func'])
) {
    // Inicializa array na sessão se ainda não existir
    if (!isset($_SESSION['funcionarios'])) {
        $_SESSION['funcionarios'] = array();
    }

    // Cria um array com os dados do funcionário
    $funcionario = array(
        'nome' => $_POST['nome_func'],
        'cpf' => $_POST['cpf_func'],
        'senha' => $_POST['senha_func'],
        'email' => $_POST['email_func'],
        'telefone' => $_POST['telefone_func'],
        'rua' => $_POST['rua_func'],
        'numero' => $_POST['numero_func'],
        'bairro' => $_POST['bairro_func'],
        'cidade' => $_POST['cidade_func'],
        'uf' => $_POST['uf_func'],
        'funcao' => $_POST['funcao_func'],
        'dataadmissao' => $_POST['dataadmissao_func'],
        'salario' => $_POST['salario_func']
    );

    // Adiciona funcionário ao array da sessão
    $_SESSION['funcionarios'][] = $funcionario;

    echo "<h2>Funcionário cadastrado com sucesso!</h2>";
} else {
    echo "<p style='color:red;'>Erro: Dados incompletos.</p>";
}

// Exibe todos os funcionários cadastrados na sessão
if (isset($_SESSION['funcionarios']) && count($_SESSION['funcionarios']) > 0) {
    echo "<h2>Funcionários Cadastrados:</h2>";
    echo "<table border='1' cellpadding='5'>";
    echo "<tr>
            <th>Nome</th><th>CPF</th><th>Email</th><th>Telefone</th>
            <th>Endereço</th><th>Função</th><th>Admissão</th><th>Salário</th>
          </tr>";

    foreach ($_SESSION['funcionarios'] as $f) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($f['nome']) . "</td>";
        echo "<td>" . htmlspecialchars($f['cpf']) . "</td>";
        echo "<td>" . htmlspecialchars($f['email']) . "</td>";
        echo "<td>" . htmlspecialchars($f['telefone']) . "</td>";
        echo "<td>" . htmlspecialchars($f['rua']) . ", " . htmlspecialchars($f['numero']) . ", " . htmlspecialchars($f['bairro']) . ", " . htmlspecialchars($f['cidade']) . " - " . htmlspecialchars($f['uf']) . "</td>";
        echo "<td>" . htmlspecialchars($f['funcao']) . "</td>";
        echo "<td>" . htmlspecialchars($f['dataadmissao']) . "</td>";
        echo "<td>R$ " . number_format((float)$f['salario'], 2, ',', '.') . "</td>";
        echo "</tr>";
    }

    echo "</table>";
}
?>
