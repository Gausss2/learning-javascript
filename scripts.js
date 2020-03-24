//Declarações

var //declara uma variável, valor inicial é opcional.

let //declara uma variável local no escopo do bloco, valor inicial também opcional.

const //declara uma constate no escopo do bloco.


//Variáveis

//Nome de variáveis - IDENTIFICADORES
//Devem sempre começar com letra, "$" ou "_";



//Declarando variáveis

var x = 123; //declara uma variável que pode ser tanto global quanto loca.

x = 42; //declara uma variável local. (NÃO SE DEVE USÁ-LA!!!)

let x = 541; //declara uma variável loca, no escopo do bloco.

//Classificando variáveis

/*Declarar x com */ let /**ou */ var /**sem um valor inicial define por padrão o valor */ undefined

/*Ao tentar acessar uma variável não declarada o javascript retorn o erro */ ReferenceError

//ex.:

var $r;

console.log($r); // retorna undefined
console.log($s); // returna ReferenceError

//um variável undefined quando colocada no contexto booleano retorna o valor false. Ex.:

var _teste;

console.log(if(_teste){return 0}); // _teste sempre retornará false.

//outro ex.:, o codigo abaixo executa um console.log caso a variável seja undefined.

var array = [];

if(!array) {return console.log('o array está vazio!!!');}

//quando o valor undefined é coloca em um contexto numérico (aritmético) ele converte-se para NaN
//Ex.:
var a;
console.log(a); // retorna NaN

console.log(a + 2) // retorna NaN,

//o valor null, quando coloca em um contexto numerico se comporta como 0.

var a = null;

console.log(a*23131); // retorna 0.

//Escopo de variável

//declarar uma variável fora de qualquer funcao é declarar uma variável global. pois ela pode ser acessada por outro código qualquer.
if (true){var x= 2;}
console.log(x); //2

//declarar uma variável dentro de uma funcao é declarar uma variavel local, pois ela está só disponível dentro da funcao.
if (true){let x= 2;}
console.log(x); //x não está declarado!!!

//Variável de elevação

//Dentro de javascript há um conceito chamado hoisting: você pode acessar uma variável antes de declarála, pois js puxa todos as vars para o topo da funcao.
//POR ISSO É RECOMENDADO QUE TODAS AS VARIÁVEIS DENTRO DE UMA FUNÇÃO SEJAM DECLARADAS NO TOPO.
//EX.:

console.log(a); // retorna undefined

var a = 2;

//Constantes

//você pode declarar um constante com a palavra const
//as regras de sintaxe de constantes sao as mesmas para variaveis.

const pi = 3.14;

//Obs.: uma constate n pode ser alterada durante a execução do script.
// voce nao pode dar o mesmo identificar a uma constante e uma variavel ou funcao no mesmo escopo de bloco.
//ex.:

function a()
{
    const a = 1; //vai retornar um erro.
}

function f()
{
    const g = 4;
    var g; //causará um erro.
}

//Estrutura de dados e tipos.

//tipos de dados

Boolean:  true e false

null //indica valor nulo. n é o mesmo que Null  ou NULL

undefined //propriedade superior cuja o valor e indefinido.

Number //42 ou 32.123123

String //"asdoaskd"

Symbol // novo em ECMASCRIPT 6. INSTÂNCIAS UNICAS E IMUTÁVEIS.

Object // recipentes para valores. 

//Conversão de tipos de dados.


//Javascript é dinamicamento tipado, isto é, não é preciso especificar o tipo de variável durante a declaração.
//Ex.:
var  x = 123123;

x = 'asfipodjasdij'; //sem retornar qualquer erro.

//o perador + converte Number em strings.
//Ex.:

let y = 123123 + "oi"; //retorna sem qualquer erro.

let x = "posada" + 123 // retorna sem erro.

//porém nas declarações com os outros operadores js n converte p/ strings apenas retorna o resultado.
//Ex.:
console.log("32" - 2) // 30
