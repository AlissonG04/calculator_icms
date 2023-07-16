document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var checkboxMetrosToneladas = document.getElementById(
      "checkboxMetrosToneladas"
    );
    var checkboxToneladasMetros = document.getElementById(
      "checkboxToneladasMetros"
    );
    var valor = parseFloat(document.getElementById("valor").value);
    var result;

    if (checkboxMetrosToneladas.checked) {
      result = valor * 1.3;
      document.getElementById("result").innerHTML =
        "Resultado (Metros para Toneladas): " + result.toFixed(2);
    } else if (checkboxToneladasMetros.checked) {
      result = 1.3 / valor;
      document.getElementById("result").innerHTML =
        "Resultado (Toneladas para Metros): " + result.toFixed(2);
    } else {
      document.getElementById("result").innerHTML =
        "Selecione uma opção de cálculo.";
    }
  });
