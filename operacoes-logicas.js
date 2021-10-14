/*passou: falso
escreval("Qual o nome do aluno? ")
leia(nome)
escreval("Qual foi a primera nota? ")
leia(nota1)
Escreval("Qual foi a segunda nota? ")
leia(nota2)
media <- (nota1 + nota2) / 2

se media >= 5 entao
   passou = verdadeiro
fimse

se (passou) && (media >= 50 || media <= 70) entao
   escreval("Aprovado! ", nome)
senao
   escreval("Reprovado!", nome)
fimse*/

var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota: ")  
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota02)) / 2;

if(media >= 5)
    passou = true;

if(passou && (media >= 7 || media <= 9))  //disjunção exclusiva
    alert("Aprovado!" + nome)
else
    alert("Reprovado!" + nome)