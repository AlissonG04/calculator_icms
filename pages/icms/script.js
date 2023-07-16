document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var km = parseFloat(document.getElementById("km").value);
    var viagens = parseInt(document.getElementById("viagens").value);
    var pauta = parseFloat(document.getElementById("pauta").value);
    var aliquotaIcms = parseFloat(
      document.getElementById("aliquota-icms").value
    );

    var valorFrete = (km * viagens * pauta * aliquotaIcms) / 100;

    document.getElementById("result").innerHTML =
      "Valor do Frete: R$ " + valorFrete.toFixed(2);
  });
