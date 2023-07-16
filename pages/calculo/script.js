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

    if (checkboxMetrosToneladas.checked && checkboxToneladasMetros.checked) {
      document.getElementById("result").innerHTML =
        "Selecione apenas uma opção de cálculo.";
      return;
    }

    if (checkboxMetrosToneladas.checked) {
      result = valor * 1.3;
      document.getElementById("result").innerHTML =
        "Resultado (Metros para Toneladas): " + result.toFixed(2);
    } else if (checkboxToneladasMetros.checked) {
      result = valor / 1.3;
      document.getElementById("result").innerHTML =
        "Resultado (Toneladas para Metros): " + result.toFixed(2);
    } else {
      document.getElementById("result").innerHTML =
        "Por favor, selecione uma opção de cálculo.";
    }
  });
