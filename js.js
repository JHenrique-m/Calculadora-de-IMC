function calcular(){
    var p = Number(document.getElementById("peso").value)
    var a = Number(document.getElementById("altura").value)
    if(p == "" && a == ""){
        document.getElementById("label").innerText = "Digite sua altura e seu peso"
    }else{
        var imc = p/(a*a)
        imc = imc.toFixed(2)
        document.getElementById("label").innerText = "Seu IMC é igual a: " + imc
    }
}

