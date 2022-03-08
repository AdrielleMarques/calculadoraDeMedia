function Calcular() {
  // Definindo variaveis e fazendo a media
  var n1 = parseFloat(document.getElementById("nota1").value);
  var n2 = parseFloat(document.getElementById("nota2").value);
  var n3 = parseFloat(document.getElementById("nota3").value);
  var n4 = parseFloat(document.getElementById("nota4").value);

  var media = (n1 + n2 + n3 + n4) / 4;
  var notaFixada = media.toFixed(1);

  // Se a media é menor que 5
  if (
    document.getElementById("nota1") !== "" &&
    document.getElementById("nota2") !== "" &&
    document.getElementById("nota3") !== "" &&
    document.getElementById("nota4") !== "" &&
    notaFixada < 5
  ) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia = "Sua média foi de " + notaFixada + ". Você reprovou.";
    elementoMedia.innerHTML = resultadoMedia;

    // Se media é maior que 5
  } else if (notaFixada > 5) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia =
      "Sua média foi de " + notaFixada + ". Você Foi Aprovado!";
    elementoMedia.innerHTML = resultadoMedia;

    // Se as condições anteriores sao falsas
  } else {
    var elementoErro = document.getElementById("resultado");
    var erro = "Preencha todos os campos";
    elementoErro.innerHTML = erro;
  }
}
