document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var km = parseFloat(document.getElementById("km").value);
    var trips = parseInt(document.getElementById("viagens").value);
    var schedule = parseFloat(document.getElementById("pauta").value);
    var aliquotIcms = parseFloat(
      document.getElementById("aliquota-icms").value
    );

    var freightValue = (km * trips * schedule * aliquotIcms) / 100;

    document.getElementById("result").innerHTML =
      "Valor do Frete: R$ " + freightValue.toFixed(2);
  });
