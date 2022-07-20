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
document.getElementById("names").innerHTML = "Names: " + nomes;

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

/* -------------FORMULÁRIOS-------------- */

function validarForm() {
    var val = document.getElementById("valido");
    try {
        var x = document.forms["meuForm"]["nome"].value;
        if (x == null || x == "") {
            throw "O nome deve ser preenchido";
        }
        var y = document.forms["meuForm"]["email"].value;
        var atpos = y.indexOf("@");
        var dotpos = y.lastIndexOf(".");

        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= y.length) {
            throw "Digite um e-mail válido!";
        }
        return true;
    } catch (err) {
        val.style.color = "#FF0000";
        val.innerHTML = "Erro: " + err;
        return false;
    }
}

/* ----------------Adicionando elementos-------------- */
function adicionar() {
    var texto = document.getElementById("texto").value;
    var para = document.createElement("p");
    para.innerHTML = texto;

    var corpo = document.getElementById("corpo");
    corpo.appendChild(para);
}

/* ------------------removendo elementos ------------------*/
function remover() {
    var mae = document.getElementById("corpo2");
    var filha = document.getElementById("texto2");
    mae.removeChild(filha);
}

/* ------------------Analisa Cookies ------------------*/

function checkCookies() {
    var user = getCookie("user");
    var msg = document.getElementById("msg");
    if (user != null && user != "") {
        msg.innerHTML = "Bem vinda de volta " + user;
    } else {
        user = prompt("Digite seu nome:", "");
        if (user != null && user != "") {
            setCookie("user", user, 365);
            msg.innerHTML = "Bem-vindo" + user;
        }
    }
}
