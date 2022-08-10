exercicios();
eventoHTMLeJS();

function exercicios() { //Function

    $('body').append(
        $('<ol>',{
            style:'list-style: none',
            class:'ms-0'
        }
            
            ).append(
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
                    eventoHTMLeJS();
                })
            ),
            $('<li>').append(
                $('#ex4').on("click", () => {
                    console.log('Abrindo exercício crud...');
                })
            ),
            $('<li>').append(
                $('#ex5').on("click", () => {
                    consumoDeAPI();
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

    let capNotas = function () { //Array convertida em Float


        let notas = [];

        notas.push(parseFloat(prompt("Digite a primeira nota:")))
        notas.push(parseFloat(prompt("Digite a segunda nota:")))
        notas.push(parseFloat(prompt("Digite a terceira nota:")))

        return notas ;

    }

    //Variáveis
    nome = capNome(); //String
    idade = capIdade(); // Number
    notas = capNotas(); //Array
    let pessoas = ['João','Carlos', 'Bianca','Cris']; //Array
    let aprovado; // Boolean
    let soma = 0; // Number para somar as notas


    //Condicionais If else

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


    pessoas.forEach(pessoa => { //Foreach
        console.log('Olá', pessoa );
    });

   

    for (var counter = 0; counter < notas.length; counter++) { // For com índice
        soma += notas[counter];
        console.log(notas[counter], typeof (notas));
    }

    console.log("Suas notas foram... ", notas, ". Essa variável é do tipo", typeof (notas));

    notas = parseFloat() //Converter notas em float para calcular a média
    let media = (soma / 3);
    console.log("Sua média foi",media);

    if (media >= 7) { //If retornando um resultado no tipo boolean
        aprovado = true;
    } else {
        aprovado = false;
    }

   if(aprovado == true){ //If usando o boolean do if acima como condição
    console.log('Aprovado');
    
   }else{
    console.log('Reprovado');
    
   }
        
   // Objeto criado usando json
    $('<p>',).append(
        console.log('Json criado.')
    )
    console.log("Nome: ", nome, ". Essa variável é do tipo", typeof (nome));
    console.log("Você tem ", idade, " anos", ". Essa variável é do tipo", typeof (idade));
    
        // Switch usando string
    switch (nome) {
        case "Alex","Alexsandro":
            console.log("Meu chará");
            break;

        default:
            console.log("Não é meu chará");
            break;
    }

        // Switch usando number
    switch (media) {

        case 0:
            console.log('Nem estudou, né?');
            break;

        case 10:
            console.log('Parabéns, você passou com a nota máxima');
    }

}

function manipularHTMLcomJS() {

    // Localizar elemento no html por id
    let localizarID = document.getElementById("inicio")
    console.log(localizarID);

     // Localizar elemento no html por classe
    let localizarClass = document.getElementsByClassName(".btn")
    console.log(localizarClass);

     // Localizar elemento no html por seletor
    let localizarTag = document.getElementsByTagName("button")
    console.log(localizarTag);

    // Criar um parágrafo no body com JS puro
    let escreverParBody = document.createElement("p")
    escreverParBody.innerHTML = "Parágrafo escrito com JS puro no body."
    document.body.append(escreverParBody)

    // Criar um parágrafo por id com JS puro
    let escreverPar = document.getElementById("escrever_paragrafo")
    escreverPar.textContent = "Parágrafo escrito com JS puro por id."

    console.log('------------------------------------------------------------------------');

    //
    $("#escrever_paragrafo", { text: "Parágrafo escrito com JQuery" }).append( // Localizar elemento por id
        console.log($(escrever_paragrafo).text()), // Exibir o log desse elemento
        console.log(escrever_paragrafo), // Exibir o conteúdo html desse elemento
        console.log($(escrever_paragrafo).text("Paragrafo alterado usando JQuery").append( // Conteúdo alterado usando JQuery
            $('<h1>', { textContent: 'Novo elemento inserido internamente.' }) // Conteúdo inserido usando JQuery
        ))
    )

    // Localizar elementos por classe e converter esses elementos em lista
    let lista = $(".btn-warning")
    console.log(lista.text());
    console.log(lista.text("Mudou Aqui"));

    // Localizar elementos por nome de seletor e converter esses elementos em lista
    let listaClass = $("a")
    console.log(listaClass.text());
    console.log(listaClass.text("Mudou Aqui Também"));


    console.log('------------------------------------------------------------------------');



}

// Funções para operações matemáticas
function calcular() {

    let numA = 3, numB = 5;

    somar();
    subtrair();
    dividir();
    multiplicar();

    function somar() {
        let soma = (numA + numB);
        console.log("Soma: ", soma);

    }

    function subtrair() {
        let subtracao = (numA - numB);
        console.log("Subtração: ", subtracao);
    }

    function dividir() {
        let divisao = (numA / numB);
        console.log("Divisão: ", divisao);
    }

    function multiplicar() {
        let multiplicacao = (numA * numB);
        console.log("Multiplicação: ", multiplicacao);
    }
}

function eventoHTMLeJS() {

    //****************************************
    // Método chamado pelo html: calcular(); |
    //****************************************


    $('#funcionou').on("click", () => { // O botão ('Vai funcionar?') funcionará após o método ser chamado.
        console.log("Funcionando...");
    })

    $("#criar_form").on("submit", (event) => { // Dados capturados em input e exibidos no log
        event.preventDefault()
        console.log('');
        let nome = $("#nome").val()
        let idade = $("#idade").val()

        console.log("O", nome, "tem" , idade, "anos.");
    })

}


function consumoDeAPI(){


    // Consumindo uma API usando Ajax
    $.ajax({

        url: encodeURI("https://random-data-api.com/api/code/random_code"), // Código aleatório que sempre retorna valores diferentes no console
        type: 'get',

        success: (retorno) => { // Caso der certo, retorna o que tem dentro desse método
            console.log(retorno);
        },

        error : (motivo) => { // Caso der errado, retorna o que tem dentro desse método
            console.log('Porque não executou?',motivo);
        }
        
    })
}


