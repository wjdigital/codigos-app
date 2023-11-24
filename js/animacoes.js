function formatCPF(input) {
    // Remove tudo que não é dígito
    var cpf = input.value.replace(/\D/g, '');

    // Verifica se o CPF está completo
    if (cpf.length >= 11) {
      cpf = cpf.slice(0, 11); // Limita o CPF a 11 dígitos
    }

    // Adiciona os pontos e o traço
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    // Atualiza o valor do input
    input.value = cpf;
    
}

function validaNome(elemento) {
    let regexNome = (nome) => {
      return nome.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/)
    }

    $(elemento).css("border-color", "#dde4e8");

    if (regexNome(elemento.value)) {
      $(elemento).css("border-color", "#1CC88A");
      $("#button").css("opacity","1")
      $('#buttondis').prop( "disabled", false );
    }
    else {
      $(elemento).css("border-color", "red");
      $("#button").css("opacity","0.5")
      $('#buttondis').prop( "disabled", true );
    }
}

function validaCPF(elemento) {
    let regexCPF = (nome) => {
      return nome.match(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/)
    }

    $(elemento).css("border-color", "#dde4e8");

    if (regexCPF(elemento.value)) {
      $(elemento).css("border-color", "#1CC88A");
      $("#button").css("opacity","1")
      $('#buttondis').prop( "disabled", false );
    }
    else {
      $(elemento).css("border-color", "red");
      $("#button").css("opacity","0.5")
      $('#buttondis').prop( "disabled", true );
    }
}








