function traduzir() {
    const x = document.getElementById("paragrafo");
    x.innerHTML = "hello!";
}

function trocaImg() {
    const elemento = document.getElementById("myimage");
    if (elemento.src.match("bulbon")) {
        elemento.src = "./img/pic_bulboff.jpeg";
    } else {
        elemento.src = "./img/pic_bulbon.jpeg";
    }
}

function Soma() {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (x + y);
}
function verificar() {
    try {
        var x = document.getElementById("valor").value;
        if (x == "") throw "Campo vazio";
        if (isNaN(x)) throw "Não é um número válido";
        if (x > 10) throw "Alto demais";
        if (x < 5) throw "Baixo demais";
        document.getElementById("msg").innerHTML = "Número aceito!";
    } catch (err) {
        var y = document.getElementById("msg");
        y.innerHTML = "Erro: " + err + ".";
    }
}

/* ------------------- ARRAYS --------------------- */
var nomes = new Array();
var nomes = [];

nomes[0] = "Camaro ";
nomes[1] = "Bugatti ";
nomes[2] = "Lamborghini ";
nomes.push("Mercedes ");
document.write("Nomes: " + nomes)
document.getElementById("names").innerHTML = "Names: " + (nomes[1]);

/* ---------------------------------------- */

var carro = { placa: "ABC-1234", ano: 2013 }
carro.ano = 2012;
document.write(" Placa do carro: " + carro.placa);
carro.cor = "verde";

/* -------------------------------------------- */

function Carro(ano, placa) {
    //constructor
    this.ano = ano;
    //atributo
    this.placa = placa;

    var nCor = Math.random() * Carro.cores.length;
    this.cor = Carro.cores[Math.floor(nCor)];

    this.alterarAno = function (novoAno) {
        this.ano = novoAno;
    };
}

Carro.cores = ["Azul", "Branco", "Vermelho"];
//atributo estático 
Carro.adicionarCor = function (novaCor) {
    //Método estático
    Carro.cores.push(novaCor)
    document.write(" Cor do carro: " + Carro.cores);
}


/* --------------------------- */
