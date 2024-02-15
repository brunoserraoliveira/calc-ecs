function adicionarCaracter(caracter) {
    document.getElementById('display').value += caracter;
  }

  function limparDisplay() {
    document.getElementById('display').value = '';
  }

  function apagarCaracter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }

  function calcularResultado() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Erro';
    }
  }