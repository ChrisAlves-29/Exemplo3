// DECLARAÇÃO E VARIAVEIS

//var nome ="Fiap";
//console.log(nome)

///let idade =19;
//console.log(idade)

//const sobrenome ="Fiapinho";
//console.log(sobrenome)

//undefined

//let exemplo;
//console.log(exemplo)

//nula

//let exemplo1 =null;
//console.log(exemplo1)

//TIPOS DE VARIAVEIS

//let ex1 ="Fiap";
//console.log(typeof ex1)

//let ex2 =25;
//console.log(typeof ex2)

//let ex3 =true;
//console.log(typeof ex3)

// let ex4={};
//console.log(typeof ex4)

// let ex5=[];
//console.log(typeof ex5)


//CONVERSÕES

//FLOAT => STRING
// let numfloat = 123.456;
// console.log(numfloat.toString())

// STRING => FLOAT
// let numString = "12.963"
// console.log(parseFloat(numString))

// INT => STRING
// let numInt = 10;
// console.log (numInt.toString())

// STRING => INT
// let numstring = "29"
// console.log (parseFloat(numstring))

// MÉTODOS

// MÉTODO LENGTH - VERIFICA O TAMANHO DA STRING
// let frase = "O mundo da tecnologia"
// console.log(frase.length)

// MÉTODO indexOf/lastIndexOf - Retorna um trecho do seu código
// let texto = "Programação sustentável";
// console.log (texto.lastIndexOf("ão"))

// MÉTODO slice - retorna parte de um texto, passando o ínicio e o final.
// let info ="Programação de ponta";
// console.log(info.slice(2,6))

// OPERADORES ARITMÉTICOS
// const a =10;
// const b=20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// OPERADORES LÓGICOS
// const c=20;
// const d =30;

// console.log(c < d);
// console.log(c > d && c < 10);
// console.log(c > d || d > c);
// console.log (c == d || d <= c);


// OPERADORES DE COMPARAÇÃO
// const e = 10;
// const f = 30;

// console.log (e == f);
// console.log (e === f);
// console.log (e != f);


// CONDICIONAL
// if

// if(true){
//     console.log("é verdadeiro")
// }

// let exemplo =1
// if(exemplo==1){
//     console.log("Está correto")
// }


// If/Else

// let nome = "fiap";

// if (nome=="fiap"){
//     console.log("Nome correto")
//     // document.write("Nome certo")
// }
// else{
//     console.log("Nome errado")
    // document.write("Nome errado")
// }

// IF enadeado OU Aninhado

// let idade = 12;
// if(idade<=14){
//     console.log("Entrada negada")
// }
// else if(idade >14 && idade <=18){
//     console.log("pode entrar e curtir")
// }
// else if(idade >18 && idade <=50){
//     console.log("Perigo, seus pais estão na balada")
// }
// else {
//     console.log("Você deve ficar em casa")
// }

// Switch case

// let time ="São paulo"
// switch (time){
//     case "São paulo":
//         console.log("Melhor time")
//         break;
//     case "Coritnhians":
//         console.log("é tão ruim que não consegue ganhar em casa")
//         break;
//     case "Palmeiras":
//         console.log("Simplesmente, não tem mundial")
//         break;
//     default:
//         console.log("Nenhuma das opções válidas(Santos)")
// }

// Ternário ( ? interrogação é o IF /// : dois pontos é ELSE)

// let valor =100;
// let resultado = valor ==100 ? "Valor certo" : "Valor errado";
// console.log(resultado);

// let nota =4;
// let media = nota /1 >=6 ? "Passou" : "Reprovou";
// console.log(media);



// Estrutura de Repetição

// for(let i=0; i<10;i++){
//     console.log("O valor de I é", i)
// }

// While

// let f=0;
// while(f<10){
//     console.log("O valor de f é", f)
//     f++;
// }

// Do while

// let w=0;
// do{
//     console.log("do while", w)
//     w++
// }while (w<=20)


// Jogo de adivinhação

// Declarando uma váriavel indefinida
// let palpite;
// const sorteio = Math.floor(Math.random()*10)+1;
// do{
//     palpite = parseInt(prompt("Escolha um número entre 1 e 10"))
// } while (palpite!== sorteio)
//     alert(`Parabéns você ganhou o jogo: ${palpite}`)


// Função

function saudacao(nome){
    console.log(`Seja bem-vindo: ${nome}`)
    console.log("Seja bem-vindo:",nome)
}
saudacao("Christoffer")
