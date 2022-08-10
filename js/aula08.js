exercicios();


function exercicios() { //Function

    $('body').append(
        $('<ul>').append(
            $('<li>').append(
                $('#ex1').on("click", () => {
                    variaveis();
                })
            ),
            $('<li>').append(
                $('#ex2').on("click", () => {
                    manipularHTMLcomJS();
                })
            ),
            $('<li>').append(
                $('#ex3').on("click", () => {
                    //();
                })
            ),
            $('<li>').append(
                $('#ex4').on("click", () => {
                    //();
                })
            ),
            $('<li>').append(
                $('#ex5').on("click", () => {
                    //();
                })
            ),
        )
    )

}


function variaveis() { //Function

    let capNome = function () { // String

        nome = prompt("Digite seu nome")

        return nome;

    }

    let capIdade = function () { //Number

        idade = parseInt(prompt("Digite sua idade:"))


        return idade;

    }

    let capNotas = function () { //Array


        notas = [parseInt(prompt("Digite sua primeira nota:")),
        parseInt(prompt("Digite sua segunda nota:")),
        parseInt(prompt("Digite sua terceira nota:"))]



        return notas;

    }



    function resultado() {

        if (aprovado = true) {
            console.log('Aprovado');

        } else {
            console.log('Reprovado');

        }

    }

    nome = capNome();
    idade = capIdade();
    notas = capNotas(Number);


    let aprovado = true // Boolean
    let alunos = ['João', 'Maria', 'Carlos', 'Rebeca'] //Array.length
    let soma;



    if (nome == null) {
        capNome();
    } else {
        console.log('Seu nome é', nome);

    }

    if (idade == 0) {
        capIdade();
    }

    else if (idade <= 18) {
        console.log('É de menor.');

    } else {
        console.log('É de maior.');

    }

    for (var counter = 0; counter < notas.length; counter++) { // For puro
        soma += notas[counter];

        console.log(notas[counter], typeof (notas));
    }

    notas.forEach(nota => {
        soma += notas;
    });

    media = (soma / 3);
    console.log(media);

    if (media == 21) {
        aprovado = true;
    } else {
        aprovado = false;
    }

    $('<p>',).append(
        console.log('Json criado.')
    )
    console.log("Nome: ", nome, ". Essa variável é do tipo", typeof (nome));
    console.log("Quantos anos você tem? ", idade, " anos.", ". Essa variável é do tipo", typeof (idade));
    console.log("Suas notas foram... ", notas, ". Essa variável é do tipo", typeof (notas));

    switch (nome) {
        case "Alex":
            console.log("Meu chará");
            break;

        default:
            console.log("Não é meu chará");
            break;
    }

    switch (media) {

        case 5:
            console.log('Tem que melhorar');
            break;

        case 7:
            console.log('Parabéns, você passou');



    }

}

function manipularHTMLcomJS() {

    let localizarID = document.getElementById("inicio")
    console.log(localizarID);

    let localizarClass = document.getElementsByClassName("btn")
    console.log(localizarClass);

    let localizarTag = document.getElementsByTagName("button")
    console.log(localizarTag);

    let escreverParBody = document.createElement("p")
    escreverParBody.innerHTML = "Parágrafo escrito com JS puro no body."
    document.body.append(escreverParBody)

    let escreverPar = document.getElementById("escrever_paragrafo")
    escreverPar.textContent = "Parágrafo escrito com JS puro por id."

    console.log('------------------------------------------------------------------------');



    // 2 - Localize uma lista de elementos por class
    // Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
    // Altere o conteúdo desses elementos por outro
    // 3 - Localize uma lista de elementos por nome de seletor
    // Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
    // Altere o conteúdo desses elementos por outro

$("#escrever_paragrafo", {text:"Parágrafo escrito com JQuery"}).append(
    console.log($(escrever_paragrafo).text()),
    console.log(escrever_paragrafo),
    console.log($(escrever_paragrafo).text("Paragrafo alterado usando JQuery").append(
        $('<h1>', {textContent:'Novo elemento inserido internamente.'})
    ))
)

let lista = $("button")
console.log(lista.text());
console.log(lista.text());


















}








