document.getElementById("submit").onclick = function (e) {
    const primeiraNota = parseFloat(document.getElementById("nota-1").value);
    const segundaNota = parseFloat(document.getElementById("nota-2").value);
    const terceiraNota = parseFloat(document.getElementById("nota-3").value);
    const quartaNota = parseFloat(document.getElementById("nota-4").value);

    const notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);

    let resultado;

    if (notaFinal >= 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado"
    }

    document.getElementById("resultado").innerHTML = `O aluno ficou com nota <em>${notaFinal}</em>, e foi <em>${resultado}</em>`
}