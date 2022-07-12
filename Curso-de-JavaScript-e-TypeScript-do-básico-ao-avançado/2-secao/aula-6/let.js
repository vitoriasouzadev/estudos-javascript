// Variável - Valor guardado na memória que pode ser alterado a qualquer momento. 
// Var é antigo, hoje se utiliza "Let"

let nome = "Maria";

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Lucas.');
console.log(nome, 'casou-se com Lucas em 2012.');
console.log(nome, 'teve 1 filho com Lucas em 2015.');
console.log('O filho de Lucas se chama Pablo');

//Tem como declarar uma var/let sem usa-lá. 
let casa; //Declarada 
console.log(casa);

//Não se pode utilizar let mais de uma vez com a mesma declaração. Quando quiser mudar, apenas mude o valor da variável, sem declara-la novamente.
let signo = "virgem";
console.log(signo);

signo = "peixes";
console.log(signo); 

//Não é possível criar variáveis com palavras reservadas pela linguagem. Ex: Let, if, console...
//Variáveis precisam ter nomes significativos 
//Não pode começar o nome de uma variável com um número 
//Não podem conter espaços, nem traços
//Utilizamos camelCase
//Case-sensitive - Letras minusculas e maiusculas fazem diferença 